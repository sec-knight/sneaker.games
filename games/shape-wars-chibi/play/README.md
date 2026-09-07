# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `d11336fac0fa67a0a42e82b1f96cf239c9554a99`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (juice polish #10, keeps frown #9)

Rebuild of `d11336f` — *Juice polish pass: saturated palette + unit hop animations (#10)*:

- **Saturated primary palette** — PLAYER_COLOR_OPTIONS and faction defaults retuned to clear primary hues (cyan, red, green, purple, orange, yellow) instead of pastel watercolor; swatches still flow through mainHex/playerMatchColors into buddies and in-match army tint
- **Unit hop/squash/wiggle** — cheap view-layer animation for moving units
- **Worker eco bob** — gentle bob for idle/gathering workers at eco sites
- **Buddy cheek blush** — frown face accent pink aligned with saturated palette
- **Keeps frown #9** — happy → frown across SVG buddies, 3D cubi faces, face picker chips; Tet default face is frown; Pips keep classic

## Files

- `index.html`
- `favicon.svg`
- `assets/index-CnbIL_PX.js`
- `assets/index-CAQeU48P.css`
