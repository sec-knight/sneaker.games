# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `b422d925998467f385a6a6b3c0b492d0550f36e0`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (#18 spear/yaw fix)

Rebuild of `b422d92` — *Fix spear pose and stabilize unit facing (#18)*:

- **Spear pose** — melee spears held upright at the unit side instead of pointing forward
- **Attack bonk** — spear swings forward on attack via roll juice layered on lunge
- **Stable facing** — yaw derived from goal intent, not separation/obstacle velocity noise
- **Idle facing** — skip facing updates when idle or already at destination
- **Keeps #17** — eco worker cap, exclusive POC upgrades, defender squads, Spheerz/Coobz rename, melee spears
- **Keeps #16** — per-player caps (300 units / 100 walls / 30 towers / 3 barracks), HUD refresh, post-match score screen
- **Keeps #15** — Select All in top-left HUD for iPhone reach
- **Keeps #14** — compact bottom bar, expandable Resource / Recruit / Build sheets, corner demolish chip
- **Keeps #13** — attack lunge, tower beams, X-eye corpses
- **Keeps #12** — HUD caps, demolish, build-territory zones
- **Keeps juice #10** — saturated primary palette, unit hop/squash/wiggle, worker eco bob
- **Keeps frown #9** — frown mouths across SVG buddies, 3D cubi faces, face picker chips; Tet default face is frown; Pips keep classic; buddy blush `#ff4081`

## Files

- `index.html`
- `favicon.svg`
- `assets/index-D-3l2524.js`
- `assets/index-8BtEnhk-.css`
