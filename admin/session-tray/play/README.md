# Session Tray — sneaker.games play drop

Static production build of [session-tray](https://github.com/sec-knight/session-tray) for deployment at `admin/session-tray/play/` (Access-gated).

- **Source commit:** `1b6f70c8196685d6cdb8439941e74f734d077b3e` (main after PR #3 — SRD catalog expand)
- **Build:** `npm ci && npm test && npm run build` (Vite 7, `base: './'`)
- **Branch:** `vendor/sneaker-play-dist` — dist tree only; no source or merge into main.

Copy this directory tree to the play path as-is. Hashed assets live under `assets/`.
