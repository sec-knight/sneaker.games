# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `cf0343f4d7ec187a4a72026ab9f24ea06588248e`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (post playtest-fix merge)

Rebuild of `cf0343f` — *Fix playtest issues and add Eco / War management HUD (#3)*:

- **Pan** — iso grab-pan remapped so drag matches camera motion
- **Colors** — all units painted with one faction color
- **Selection** — player orders isolated from the AI flow field; HQ / owned POC taps select the building even when troops are selected
- **Auto workers** — workers stay unselectable auto-gather (not troops)
- **Eco / War HUD** — Eco hires a worker from the tapped HQ/POC; War queues Spark / Buddy / Chunk from barracks with live counts

## Files

- `index.html`
- `favicon.svg`
- `assets/index-DQHOSGZG.js`
- `assets/index-D51iEWxU.css`
