# Session Tray — sneaker.games play drop

Static production build of [session-tray](https://github.com/sec-knight/session-tray) for deployment at `admin/session-tray/play/` (Access-gated).

- **Source commit:** `bf48d29` (main after PR #4 — SRD Foundation pack)
- **Build:** `npm ci && npm test && npm run build` (Vite 7, `base: './'`)
- **Branch:** `vendor/sneaker-play-dist` — dist tree only; no source or merge into main.

Copy this directory tree to the play path as-is. Hashed assets live under `assets/`. The SRD Foundation pack is under `foundation/`.
