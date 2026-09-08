# Shape Wars - Chibi! play build

Official production dist from [`sec-knight/shape-wars-chibi`](https://github.com/sec-knight/shape-wars-chibi) `@ main`, commit `744ce8d8e5063e06441ac5c9dd7fe0abf9ac21e0`.

This is the real Vite `npm ci && npm run build` output (`base: './'`), not a stand-in. Assets resolve under `/games/shape-wars-chibi/play/`.

## Included from main (#16 per-player caps + score screen)

Rebuild of `744ce8d` — *Per-player caps, HUD refresh, and post-match score screen (#16)*:

- **Per-player caps** — each faction limited to **300 units**, **100 walls**, **30 towers**, **3 barracks** (CAP 100/30/3/300); demolish frees the owning player's slot
- **HUD refresh** — local army count shows `/300`; construction chips show W/T/R caps
- **Post-match score screen** — end screen with kills, POC captures, and match duration
- **Keeps #15** — Select All in top-left HUD for iPhone reach
- **Keeps #14** — compact bottom bar, expandable Resource / Recruit / Build sheets, corner demolish chip
- **Keeps #13** — attack lunge, tower beams, X-eye corpses
- **Keeps #12** — HUD caps, demolish, build-territory zones
- **Keeps juice #10** — saturated primary palette, unit hop/squash/wiggle, worker eco bob
- **Keeps frown #9** — frown mouths across SVG buddies, 3D cubi faces, face picker chips; Tet default face is frown; Pips keep classic; buddy blush `#ff4081`

## Files

- `index.html`
- `favicon.svg`
- `assets/index-HW408Uk8.js`
- `assets/index-BU0uhsVb.css`
