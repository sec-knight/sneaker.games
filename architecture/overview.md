# Overview

## What this repo is

`sec-knight/sneaker.games` is one project with two jobs:

1. The live website at sneaker.games.
2. The Grimoire architecture repository for personal-Grimoire key `sneaker-games-site` (`sec-knight/black-clover`).

Identify's hardcoded registry already lists this repo as both architecture and source. That matches the tree: there is no separate architecture-only repo.

## Public vs admin

That is the main structural split.

**Public** (no login; linked from the home page):

| Path | What it is |
| --- | --- |
| `/` (`index.html`) | Hub: Games, Workshop, Writing |
| `/games/horde-defense/` | Horde Defense game page, public top 20, feedback |
| `/games/horde-defense/play/` | Godot WASM playable |
| `/games/plushy-guardian/` | Plushy Guardian game page and feedback |
| `/plushy/` | Plushy Guardian playable (canvas prototype lives here, not under `games/`) |
| `/writing.html` | Morning wisdom / essays |
| `/workshop/` | Public Grimoire writing pages |

Home also cards **Spheres of Influence** as "Prototype cooking" with no playable route in this repo.

**Admin** (Cloudflare Access on `/admin/*` and `/api/admin/*`; not linked from the public site):

| Path | What it is |
| --- | --- |
| `/admin/` | Private workshop hub |
| `/admin/feedback/` | Playtest inbox |
| `/admin/identify/` | Read-only project registry UI |
| `/admin/character-designer/` | Mannequin dressing-room prototype |
| `/admin/horde-three/` | Three.js Horde Defense prototype |
| `/admin/pink-bloom/` | Pink Bloom night-shift prototype |

## extra_sources

Related implementation and asset vaults. They are not separate products of this site. This repo hosts the deployed copies.

| extra_source | Repo | What it feeds here |
| --- | --- | --- |
| pink-bloom | [sec-knight/cursed-procedure](https://github.com/sec-knight/cursed-procedure) | `admin/pink-bloom/` (`npm run build:admin`, copy `deploy/sneaker-admin/pink-bloom/`) |
| avatars | [sec-knight/avatars](https://github.com/sec-knight/avatars) | `admin/character-designer/` (Vite build with `--base /admin/character-designer/`, copy `dist/`) |
| horde | [sec-knight/godot-horde-demo](https://github.com/sec-knight/godot-horde-demo) | Public Godot WASM at `games/horde-defense/play/`; Three.js admin build at `admin/horde-three/` |

Rebuild instructions live in the admin folder READMEs and in `games/horde-defense/play/README.md`. Do not clone those repos unless the work needs their source.

Plushy Guardian is implemented in this repo (`plushy/`), not via an extra_source copy.

## Cloudflare pieces visible in this tree

- `wrangler.jsonc` + `worker.js`: Worker `sneaker-games` in front of static assets from the repo root. `run_worker_first` for `/api/*` and the Horde WASM path. D1 binding `FEEDBACK_DB` → database `sneaker-feedback`.
- Worker routes: `POST/GET /api/feedback`, `/api/admin/feedback`, `GET /api/admin/identify`, `/api/scores/horde-defense`, and gzip-unwrap for `/games/horde-defense/play/index.wasm`.
- `functions/`: Pages-style handlers for public and admin feedback only. Overlaps `worker.js`; does not implement scores or Identify.
- `CLOUDFLARE-FEEDBACK-SETUP.md`: one-time Access, Turnstile, D1, and env-var setup. It still describes a Pages project.
- Constraints in-repo: Cloudflare 25 MB asset limit (uncompressed Godot `index.wasm` is gitignored; the Worker serves gunzipped WASM from `index.wasm.gz`); Access JWT checks via `jose`; Turnstile + hashed visitor keys for public writes.

Do not assume hosting details that are not in these files (custom domains, Pages vs Workers dashboard state, secret values).
