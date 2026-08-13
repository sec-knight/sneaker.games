# Sneaker Games feedback setup

The repository side is complete. These one-time Cloudflare settings activate it.

## 1. Create and initialize D1

Create a D1 database named `sneaker-feedback`. Open its Console and execute the contents of `migrations/001_feedback.sql`.

In the Sneaker Games Pages project, add a D1 binding:

- Variable name: `FEEDBACK_DB`
- Database: `sneaker-feedback`

## 2. Create Turnstile

Create a Turnstile widget for `sneaker.games`. Add these Pages environment variables:

- `TURNSTILE_SITE_KEY`: the public site key
- `TURNSTILE_SECRET_KEY`: the secret key (encrypt this value)

## 3. Configure rate limiting salt

Add an encrypted Pages environment variable named `RATE_LIMIT_SALT` with a long random value. It is used to create short-lived, non-reversible visitor keys. Raw IP addresses are not stored.

## 4. Protect the private inbox

Create a Cloudflare Access self-hosted application covering both:

- `sneaker.games/admin/*`
- `sneaker.games/api/admin/*`

Allow only the owner's email address. Add a Pages environment variable:

- `ADMIN_EMAIL`: the same allowed email address

The admin API rejects requests unless both the Cloudflare Access assertion and matching authenticated-email header are present.

## 5. Redeploy

Redeploy the Pages project after bindings and variables are added. Then verify:

- Public form: `https://sneaker.games/games/plushy-guardian/#feedback`
- Private inbox: `https://sneaker.games/admin/feedback/`

## Built-in misuse controls

- Server-side Turnstile validation
- Exact-origin enforcement
- JSON-only endpoint and 8 KiB request limit
- Game/build/category allowlists
- Message length and control-character validation
- Honeypot field
- Five submissions per ten-minute privacy-preserving visitor key
- Parameterized D1 statements
- Fail-closed administrative endpoint
- HTML escaping in the inbox
- No names, email addresses, uploads, or raw IP storage
