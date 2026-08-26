# Character designer · admin

Private playable dressing-room: snap hair, faces, and sneakers onto the Quaternius UAL mannequin.

- URL: `https://sneaker.games/admin/character-designer/`
- Access: same `/admin/*` login wall as the rest of the workshop
- Source: `sec-knight/avatars` (`npm run build`)

Rebuild from that repo with:

```bash
npx vite build --base /admin/character-designer/
```

Then copy `dist/` over this folder.

Do not link this from the public site.
