Godot web export output.

Copied from `godot-horde-demo` with `tools/copy-web-to-site.ps1`.
`index.wasm.gz` is stored in this folder. The site worker gunzips it and serves raw WASM at `/index.wasm` so the file stays under Cloudflare's 25 MB upload limit. Do not set Content-Encoding: gzip on that response — Cloudflare strips it, and Godot's loader also drops the header.
