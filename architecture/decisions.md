# Decisions

Only decisions already visible in the tree. Proposed changes stay in activity until promoted.

1. **One repo for site and architecture.** Identify already points `sneaker-games-site` architecture and source at `sec-knight/sneaker.games`. Architecture files live in this tree.

2. **Public vs `/admin` is the access split.** Cloudflare Access covers `/admin/*` and `/api/admin/*`. Admin prototypes are not linked from the public site.

3. **extra_sources feed copies, they are not products here.** Pink Bloom, the character designer, and Horde Three.js are rebuilt elsewhere and copied into `admin/`. Public Horde Defense is a Godot web export copied into `games/horde-defense/play/`.

4. **Godot WASM stays under the 25 MB asset limit** by publishing `index.wasm.gz` and having `worker.js` gunzip it to `application/wasm`. Do not set `Content-Encoding: gzip` on that response.
