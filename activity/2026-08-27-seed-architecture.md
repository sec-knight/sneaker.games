# Session: Seed Grimoire architecture into sneaker.games

**Date:** 2026-08-27  
**Environment:** Cursor Cloud Agent

## Goal

Copy the Grimoire architecture-repo template into this repo and write a first architecture plan from evidence in the tree. Do not invent games, routes, or infra.

## Context Used

- Grimoire template: `sec-knight/grimoire/templates/architecture-repo` (AGENTS.md, FAMILIAR.md, architecture/README.md, activity/{CURRENT,README,SESSION-TEMPLATE}.md)
- This tree: public pages, `admin/`, `worker.js`, `wrangler.jsonc`, `functions/`, migrations, admin READMEs, `_headers`, `.assetsignore`, `.gitignore`
- Git history on `main` through 2026-08-26 (Pink Bloom, character designer, Three.js horde)
- Open draft PR #15 (local Worker + D1 env) — inspected, not merged
- Personal Grimoire routing given in the task: `sec-knight/black-clover`, key `sneaker-games-site`
- extra_sources named in the task; not cloned

## Work

- Added template files and adapted `AGENTS.md` / `FAMILIAR.md` for a combined site + architecture repo.
- Wrote `architecture/intent.md`, `overview.md`, `current-state.md`, `decisions.md` from the tree.
- Created this first activity record and `CURRENT.md`.

## Findings

- Public vs `/admin` is the real split. Admin hub is explicit: "Private · not linked from the public site" / Cloudflare Access on `/admin/*`.
- extra_sources already document their copy paths in admin READMEs. Public Horde WASM also comes from `godot-horde-demo`.
- No `games/character-designer/` in this tree. Character designer is admin-only.
- Plushy playable lives at `/plushy/`, with the game page at `/games/plushy-guardian/`.
- `worker.js` is the wrangler `main`. `functions/` is a narrower Pages-style duplicate of feedback only. Setup doc still says Pages.
- Identify is a hardcoded snapshot, not a live `black-clover` read.
- `.assetsignore` does not exclude the new Grimoire files; they would publish as static assets.

## Result

First architecture plan is in `architecture/`. Template activity files exist. Next action is human review, not more invented work.

## Possible Architecture Changes

Already written as the first plan (intent / overview / current-state / decisions). Review before treating any of it as settled canon.

Later, if Mark wants Grimoire files off the public site, add them to `.assetsignore`. Not done in this seed.

## Open Questions

- Pages vs Workers: which Cloudflare product actually serves production, given both `worker.js` and `functions/` plus a Pages-oriented setup doc?
- Should `AGENTS.md`, `FAMILIAR.md`, `architecture/`, and `activity/` be excluded from asset upload?
- Is a public character-designer route still intended? It is not in the tree.

## Continuation

Mark reviews `architecture/` against the live site and either confirms or records corrections. Outstanding engineering on `main` after that: draft PR #15 (local Worker + D1). Do not merge #15 from this seed.
