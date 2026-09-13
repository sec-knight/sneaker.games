# Session Tray — sneaker.games play drop

Static production build of [session-tray](https://github.com/sec-knight/session-tray) for deployment at `sneaker.games/games/session-tray/play/`.

- **Source commit:** `04745aa` (main after PR #1)
- **Build:** `npm ci && npm test && npm run build` (Vite 7, `base: './'`)
- **Branch:** `vendor/sneaker-play-dist` — dist tree only; no source or merge into main.

Copy this directory tree to the play path as-is. Hashed assets live under `assets/`.
