# Current

**Last session:** `activity/2026-08-27-seed-architecture.md`

## Where things stand

Grimoire architecture-repo files now live in this repo (the live site and the architecture home for `sneaker-games-site`). First plan is in `architecture/` from the tree only: public vs `/admin` split, extra_sources as copy-in vaults, Cloudflare pieces that are actually in git.

No architecture/activity existed before this session. Recent merged work on `main` (2026-08-26) is Pink Bloom admin, character designer admin, and Three.js horde refreshes. Draft PR #15 (local Worker + D1 env) remains open and should not be merged as part of this seed.

## Next action

Mark reviews `architecture/` (intent, overview, current-state, decisions) against the live site and records any corrections in activity.

## Do not retry

- Do not invent games, routes, or hosting that are not in this tree.
- Do not clone extra_sources for architecture work.
- Do not merge PR #15 as part of seeding architecture.
