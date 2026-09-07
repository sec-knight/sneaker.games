# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `d2c693f0ecb319b0cc0675461b4dd1093986410e`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (empty-picker init-order fix)

Rebuild of `d2c693f` — *Fix title pickers when View init fails or blocks (#5)*:

- **Empty-picker fix** — `hud.bind()` (color/face pickers) runs before `new View()` so title swatches and face presets still populate when WebGL or geometry init fails or blocks
- **Pre-battle color pick** — on the title screen before Battle!, choose a faction tint; that color becomes your one faction color for the match
- **Pre-battle chibi face pick** — choose a chibi face preset; it applies to SVG title buddies and in-world unit faces
- **Prior playtest fixes** (`cf0343f`) — iso pan remap, unified faction colors, selection / AI isolation, auto workers, Eco / War HUD

## Files

- `index.html`
- `favicon.svg`
- `assets/index-DRiudZiL.js`
- `assets/index-SojUHsEh.css`
