import { createRemoteJWKSet, jwtVerify } from "jose";

const CATEGORIES = new Set(["fun", "needs-work", "bug", "idea"]);
const DEVICES = new Set(["phone", "tablet", "desktop", "unknown"]);
const INPUTS = new Set(["touch", "keyboard", "unknown"]);
const STATUSES = new Set(["new", "useful", "planned", "fixed", "dismissed"]);
const GAME_BUILDS = {"plushy-guardian": new Set(["2026-08-13-adaptive-audio"])};

const IDENTIFY_PROJECTS = [
  {id:"plushy-godot", name:"Plushy Godot Project", emblem:"◆", architecture:"https://github.com/sec-knight/plushy-godot-architecture.git", source:"https://github.com/sec-knight/plushy-godot-source.git", archive:"https://github.com/sec-knight/plushy-godot-archive.git"},
  {id:"godot-framework", name:"Godot Framework", emblem:"⚙", architecture:"https://github.com/sec-knight/godot-framework-arch.git", source:"https://github.com/sec-knight/godot-framework.git"},
  {id:"godot-ai-workbench", name:"Godot AI Workbench", emblem:"⌘", architecture:"https://github.com/sec-knight/godot-ai-workbench.git", architecturePath:"docs", source:"https://github.com/sec-knight/godot-ai-workbench.git"},
  {id:"find-familiar", name:"Find Familiar", emblem:"✦", architecture:"https://github.com/sec-knight/find-familiar.git", architecturePath:"docs", source:"https://github.com/sec-knight/find-familiar.git"},
  {id:"sneaker-games-site", name:"Sneaker.games", emblem:"◒", architecture:"https://github.com/sec-knight/sneaker.games.git", source:"https://github.com/sec-knight/sneaker.games.git"},
  {id:"holocron", name:"Project Holocron", emblem:"◇", architecture:"https://github.com/sec-knight/holocron.git", source:"https://github.com/sec-knight/holocron.git"},
  {id:"home-dnd-design", name:"Home D&D Design", emblem:"⬡", architecture:"https://github.com/sec-knight/home-dnd-design.git", source:"https://github.com/sec-knight/home-dnd-design.git"},
  {id:"spheres-of-influence", name:"Spheres of Influence", emblem:"◎", architecture:"https://github.com/sec-knight/Spheres-of-Influence.git", architecturePath:"docs", source:"https://github.com/sec-knight/godot-sphere-c-poc.git"}
];

const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), {
  status,
  headers: {"content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers}
});

function sameSite(request) {
  const url = new URL(request.url);
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const supplied = new URL(origin);
    return supplied.protocol === "https:" && supplied.hostname === url.hostname;
  } catch {
    return false;
  }
}

async function verifyTurnstile(request, env, token) {
  if (!env.TURNSTILE_SECRET_KEY || !token) return false;
  const body = new FormData();
  body.set("secret", env.TURNSTILE_SECRET_KEY);
  body.set("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) body.set("remoteip", ip);
  const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {method: "POST", body});
  if (!result.ok) return false;
  const data = await result.json();
  return data.success === true;
}

async function visitorKey(request, env) {
  if (!env.RATE_LIMIT_SALT) throw new Error("RATE_LIMIT_SALT is not configured");
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const bytes = new TextEncoder().encode(ip + ":" + env.RATE_LIMIT_SALT);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(v => v.toString(16).padStart(2, "0")).join("");
}

async function checkRateLimit(request, env) {
  const key = await visitorKey(request, env);
  const now = Date.now(), windowMs = 10 * 60 * 1000;
  await env.FEEDBACK_DB.prepare("DELETE FROM feedback_rate_limits WHERE window_started < ?").bind(now - windowMs * 2).run();
  const row = await env.FEEDBACK_DB.prepare(`
    INSERT INTO feedback_rate_limits(visitor_key, window_started, submission_count)
    VALUES (?, ?, 1)
    ON CONFLICT(visitor_key) DO UPDATE SET
      window_started = CASE WHEN window_started < ? THEN excluded.window_started ELSE window_started END,
      submission_count = CASE WHEN window_started < ? THEN 1 ELSE submission_count + 1 END
    RETURNING submission_count
  `).bind(key, now, now - windowMs, now - windowMs).first();
  return Number(row?.submission_count || 99) <= 5;
}

async function adminAuthorized(request, env) {
  if (!env.ADMIN_EMAIL || !env.POLICY_AUD || !env.TEAM_DOMAIN) return false;
  const assertion = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!assertion) return false;
  const teamDomain = env.TEAM_DOMAIN.replace(/\/$/, "");
  try {
    const jwks = createRemoteJWKSet(new URL(`${teamDomain}/cdn-cgi/access/certs`));
    const { payload } = await jwtVerify(assertion, jwks, {issuer: teamDomain, audience: env.POLICY_AUD});
    const email = typeof payload.email === "string" ? payload.email : "";
    return email.toLowerCase() === env.ADMIN_EMAIL.toLowerCase();
  } catch (error) {
    console.warn("Cloudflare Access JWT verification failed", error?.code || error?.message || error);
    return false;
  }
}

async function publicFeedback(request, env) {
  if (request.method === "GET") return json({ready: Boolean(env.TURNSTILE_SITE_KEY), siteKey: env.TURNSTILE_SITE_KEY || ""});
  if (request.method !== "POST") return json({error: "Method not allowed."}, 405);
  if (!env.FEEDBACK_DB || !env.TURNSTILE_SECRET_KEY || !env.RATE_LIMIT_SALT) return json({error: "Feedback is not connected yet."}, 503);
  if (!sameSite(request)) return json({error: "Invalid submission origin."}, 403);
  if (!(request.headers.get("content-type") || "").toLowerCase().startsWith("application/json")) return json({error: "Expected JSON."}, 415);
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > 8192) return json({error: "Submission is too large."}, 413);
  let body;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 8192) return json({error: "Submission is too large."}, 413);
    body = JSON.parse(raw);
  } catch {
    return json({error: "Invalid JSON."}, 400);
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return json({error: "Invalid submission."}, 400);
  if (body.website) return json({ok: true}, 202);
  const game = typeof body.game === "string" ? body.game : "";
  const build = typeof body.build === "string" ? body.build : "";
  const category = typeof body.category === "string" ? body.category : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const device = DEVICES.has(body.device) ? body.device : "unknown";
  const input = INPUTS.has(body.input) ? body.input : "unknown";
  if (!GAME_BUILDS[game]?.has(build)) return json({error: "Unknown game build."}, 400);
  if (!CATEGORIES.has(category)) return json({error: "Choose a feedback type."}, 400);
  if (message.length < 3 || message.length > 1200) return json({error: "Message must be 3–1200 characters."}, 400);
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(message)) return json({error: "Message contains unsupported characters."}, 400);
  if (!(await verifyTurnstile(request, env, body.turnstileToken))) return json({error: "Human verification failed. Please try again."}, 403);
  if (!(await checkRateLimit(request, env))) return json({error: "Too many submissions. Please try again in ten minutes."}, 429, {"retry-after": "600"});
  await env.FEEDBACK_DB.prepare(`
    INSERT INTO feedback(id, game_slug, build_id, category, message, device_class, input_method, status, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'new', ?)
  `).bind(crypto.randomUUID(), game, build, category, message, device, input, new Date().toISOString()).run();
  return json({ok: true}, 201);
}

async function adminFeedback(request, env) {
  if (!env.FEEDBACK_DB || !(await adminAuthorized(request, env))) return json({error: "Not authorized."}, 403);
  if (request.method === "GET") {
    const requested = new URL(request.url).searchParams.get("status");
    const status = STATUSES.has(requested) ? requested : null;
    const query = status ? "SELECT * FROM feedback WHERE status = ? ORDER BY created_at DESC LIMIT 200" : "SELECT * FROM feedback ORDER BY created_at DESC LIMIT 200";
    const result = status ? await env.FEEDBACK_DB.prepare(query).bind(status).all() : await env.FEEDBACK_DB.prepare(query).all();
    return json({items: result.results || []});
  }
  if (request.method === "PATCH") {
    if (!(request.headers.get("content-type") || "").toLowerCase().startsWith("application/json")) return json({error: "Expected JSON."}, 415);
    let body;
    try { body = await request.json(); } catch { return json({error: "Invalid JSON."}, 400); }
    const id = typeof body?.id === "string" ? body.id : "";
    const status = typeof body?.status === "string" ? body.status : "";
    if (!/^[0-9a-f-]{36}$/i.test(id) || !STATUSES.has(status)) return json({error: "Invalid update."}, 400);
    const result = await env.FEEDBACK_DB.prepare("UPDATE feedback SET status = ? WHERE id = ?").bind(status, id).run();
    if (!result.meta?.changes) return json({error: "Feedback not found."}, 404);
    return json({ok: true});
  }
  return json({error: "Method not allowed."}, 405);
}

async function adminIdentify(request, env) {
  if (!(await adminAuthorized(request, env))) return json({error: "Not authorized."}, 403);
  if (request.method !== "GET") return json({error: "Method not allowed."}, 405);
  return json({version: "1.0", mode: "read-only", source: "black-clover/projects.yaml snapshot", generatedAt: new Date().toISOString(), projects: IDENTIFY_PROJECTS});
}

export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    try {
      if (pathname === "/api/feedback") return await publicFeedback(request, env);
      if (pathname === "/api/admin/feedback") return await adminFeedback(request, env);
      if (pathname === "/api/admin/identify") return await adminIdentify(request, env);
      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error("Request failed", error);
      return json({error: "The workshop hit an unexpected problem."}, 500);
    }
  }
};
