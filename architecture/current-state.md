# Current state

As of 2026-08-27, from the tree and recent git history on `main`.

## Site

Public hub, two playable public games, two workshop posts, and writing are live in this repo. Admin workshop hub lists five tools. There is no root `README.md`.

Recent merged work (2026-08-26): Pink Bloom admin (OTS / ADS / shop, A/D strafe fix), character designer added under admin, repeated Three.js horde refreshes. Those admin copies are built artifacts from extra_sources, not authored in this repo.

## Hosting

`wrangler.jsonc` is the Worker + assets + D1 config in git. Public write APIs expect Turnstile, `RATE_LIMIT_SALT`, and D1. Admin APIs expect Cloudflare Access (`ADMIN_EMAIL`, `POLICY_AUD`, `TEAM_DOMAIN`).

`functions/` still exists beside `worker.js`. `CLOUDFLARE-FEEDBACK-SETUP.md` still talks about Pages. Production dashboard state is not in this repo.

Open draft [PR #15](https://github.com/sec-knight/sneaker.games/pull/15) adds a local Cloud Agent Worker + D1 environment (`wrangler` scripts, `.dev.vars.example`, persist-dir workaround). Do not merge it as part of architecture seeding.

## Identify

`GET /api/admin/identify` returns a hardcoded snapshot labeled `black-clover/projects.yaml snapshot`. It is not a live read of the personal Grimoire.

## What is not here

- No `games/character-designer/` (or other public character-designer route).
- No public Pink Bloom route.
- No playable Spheres of Influence in this tree.
- No `architecture/` or `activity/` existed before this seed.

`.assetsignore` excludes worker/config/docs such as `README.md`, but not `AGENTS.md`, `FAMILIAR.md`, `architecture/`, or `activity/`. Those files would currently be uploaded as static assets unless later excluded.
