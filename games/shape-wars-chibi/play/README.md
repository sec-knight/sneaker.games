# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `bf061e4`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (#19 eco/battle POCs + floating upgrades)

Rebuild of `bf061e4` — *Fix spear/yaw, eco vs battle POCs, floating upgrade chips (#19)*:

- **Eco vs battle POCs** — HQ + mine nodes are eco sites; safe/mid/center nodes are battle POCs with upgrades
- **Floating upgrade chips** — tap a battle POC; ★ Star / 🛡 Squad buttons appear above it (not in bottom HUD)
- **Upgrade reset** — star/defender upgrades clear when a battle POC is captured
- **Spear pose** — upright at unit side; bonk swing on attack
- **Stable facing** — idle units no longer drift toward origin or flip yaw
- **Keeps #17–#12** — POC upgrades, defender squads, Spheerz/Coobz, caps, HUD, juice, etc.

## Files

- `index.html`
- `favicon.svg`
- `assets/index-Dgf9p-B6.js`
- `assets/index-BU0uhsVb.css`
