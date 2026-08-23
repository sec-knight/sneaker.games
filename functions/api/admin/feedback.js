import { authorize } from "./auth.js";
const STATUSES = new Set(["new", "useful", "planned", "fixed", "dismissed"]);
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: {"content-type": "application/json; charset=utf-8", "cache-control": "no-store"}
});


export async function onRequest({request, env}) {
if (!env.FEEDBACK_DB || !(await authorize(request, env))) {
  return json({error: "Not authorized."}, 403);
}

  if (request.method === "GET") {
    const url = new URL(request.url);
    const requested = url.searchParams.get("status");
    const status = STATUSES.has(requested) ? requested : null;
    const query = status
      ? "SELECT * FROM feedback WHERE status = ? ORDER BY created_at DESC LIMIT 200"
      : "SELECT * FROM feedback ORDER BY created_at DESC LIMIT 200";
    const result = status
      ? await env.FEEDBACK_DB.prepare(query).bind(status).all()
      : await env.FEEDBACK_DB.prepare(query).all();
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
