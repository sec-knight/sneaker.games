# Horde Defense · Three.js (admin)

Private playable build of the Three.js horde demo (Admin Studio + combat polish).

- URL: `https://sneaker.games/admin/horde-three/`
- Access: Cloudflare Access on `/admin/*`
- Source: `sec-knight/godot-horde-demo` branch `cursor/admin-bundle-studio-1460`

Rebuild from that repo with:

```bash
npx vite build --base=/admin/horde-three/ --outDir=deploy/sneaker-admin/horde-three --emptyOutDir
```

Do not link this from the public site.
