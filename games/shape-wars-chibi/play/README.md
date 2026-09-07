# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `5a64ec585d92128f90f6f2a5dc24642890d3b047`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (Tet title buddy preview fix)

Rebuild of `5a64ec5` — *Fix Tet title buddy preview using wrong color slot (#7)*:

- **playerMatchColors** — title-screen buddy preview uses the player's faction color slot via `playerMatchColors(setup)` instead of a hard-coded index, so Tet pickers show the correct tint
- **Prior fixes** — solid mainHex swatches and faction-neutral faceChip (#6), empty-picker init-order fix (#5), pre-battle color/face pick, playtest HUD and AI fixes (#3)

## Files

- `index.html`
- `favicon.svg`
- `assets/index-C_gMIChD.js`
- `assets/index-SojUHsEh.css`
