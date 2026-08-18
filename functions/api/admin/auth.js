import { createRemoteJWKSet, jwtVerify } from "jose";

const jwksCache = new Map();

function normalizeIssuer(value) {
  if (typeof value !== "string" || !value.trim()) return null;

  try {
    const url = new URL(value.trim());

    if (
      url.protocol !== "https:" ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}

function getJwks(issuer) {
  let jwks = jwksCache.get(issuer);

  if (!jwks) {
    jwks = createRemoteJWKSet(
      new URL(`${issuer}/cdn-cgi/access/certs`)
    );
    jwksCache.set(issuer, jwks);
  }

  return jwks;
}

export async function authorize(request, env) {
  const token = request.headers.get("cf-access-jwt-assertion");
  const issuer = normalizeIssuer(env?.TEAM_DOMAIN);
  const audience =
    typeof env?.POLICY_AUD === "string" ? env.POLICY_AUD.trim() : "";
  const adminEmail =
    typeof env?.ADMIN_EMAIL === "string"
      ? env.ADMIN_EMAIL.trim().toLowerCase()
      : "";

  if (!token || !issuer || !audience || !adminEmail) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, getJwks(issuer), {
      issuer,
      audience,
    });

    const tokenEmail =
      typeof payload.email === "string"
        ? payload.email.trim().toLowerCase()
        : "";

    return tokenEmail === adminEmail ? payload : null;
  } catch {
    return null;
  }
}