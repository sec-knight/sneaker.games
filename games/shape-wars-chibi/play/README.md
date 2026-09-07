# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `1cbfd475cf9ea55cd08d6fc29b06b2b2ede06807`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (Pip happy face eyes fix)

Rebuild of `1cbfd47` — *Fix Pip happy face missing eyes in SVG buddies (#8)*:

- **pipFaceSvg happy eyes** — happy Pip SVG buddies now render open eyes (sclera, pupils, highlights) in pre-battle picker chips, title buddy previews, and HUD buddies, matching chipFaceSvg and cubiFaceSvg
- **playerMatchColors (#7)** — title-screen buddy preview uses the player's faction color slot via `playerMatchColors(setup)` instead of a hard-coded index, so Tet pickers show the correct tint
- **Prior fixes** — solid mainHex swatches and faction-neutral faceChip (#6), empty-picker init-order fix (#5), pre-battle color/face pick, playtest HUD and AI fixes (#3)

## Files

- `index.html`
- `favicon.svg`
- `assets/index-U1uPoPr0.js`
- `assets/index-SojUHsEh.css`
