
const PLATES = [
  'linear-gradient(135deg,#1a0a2e,#c4005a 60%,#ff6b35)',
  'linear-gradient(160deg,#0b1d3a,#1f6feb,#7ee787)',
  'linear-gradient(120deg,#2d0a0a,#ff0033,#ffaa00)',
  'linear-gradient(145deg,#0a2e1a,#00c2a8,#e0ffe8)',
  'linear-gradient(130deg,#1a1028,#9b5de5,#f15bb5)',
  'linear-gradient(150deg,#101820,#fee715,#00a3e0)',
  'linear-gradient(125deg,#220a1e,#ff006e,#8338ec)',
  'linear-gradient(140deg,#0d1b2a,#415a77,#e0e1dd)',
];

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function trailerRow(t) {
  const meta = [t.studio, t.source, t.note].filter(Boolean).join(' · ');
  return `<a class="t-row" href="${esc(t.watchUrl)}" target="_blank" rel="noopener">
  <span class="t-thumb"><img src="${esc(t.thumbnailUrl || '')}" alt="" width="320" height="180" loading="lazy" decoding="async"></span>
  <span class="t-copy"><span class="t-title">${esc(t.headline)}</span><span class="t-meta">${esc(meta)}</span></span>
</a>`;
}

function artTile(a, i) {
  const plate = a.imageUrl
    ? `<span class="a-plate has-img" style="background-image:url('${esc(a.imageUrl)}')"></span>`
    : `<span class="a-plate" style="background:${PLATES[i % PLATES.length]}"><span class="sample">Sample</span></span>`;
  const credit = a.creditLine || a.artist || '';
  return `<a class="a-tile" href="${esc(a.sourceUrl)}" target="_blank" rel="noopener">
  ${plate}
  <span class="a-title">${esc(a.headline)}</span>
  <span class="a-credit">${esc(credit)}</span>
</a>`;
}

function renderPane(root, days, kind) {
  const parts = [];
  let artIdx = 0;
  for (const day of days) {
    const items = kind === 'trailers' ? (day.trailers || []) : (day.art || []);
    if (!items.length) continue;
    parts.push(`<div class="day-break" role="separator"><span>${esc(day.label || day.date)}</span></div>`);
    if (kind === 'trailers') {
      parts.push(items.map(trailerRow).join(''));
    } else {
      parts.push('<div class="art-grid">');
      for (const a of items) {
        parts.push(artTile(a, artIdx++));
      }
      parts.push('</div>');
    }
  }
  root.innerHTML = parts.length ? parts.join('') : `<p class="empty-pane">Nothing here yet.</p>`;
}

async function main() {
  const res = await fetch(`feed.json?t=${Date.now()}`);
  const feed = await res.json();
  const tastes = feed.tastes || {};
  const genres = (tastes.genres || []).join(' · ');
  const platforms = (tastes.platforms || []).join(' · ');
  const line = document.getElementById('taste-line');
  if (line) {
    line.textContent = [genres, platforms].filter(Boolean).join(' — ') || 'games wire';
  }
  // newest first
  const days = [...(feed.days || [])].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  renderPane(document.getElementById('trailers-root'), days, 'trailers');
  renderPane(document.getElementById('art-root'), days, 'art');
}

main().catch((err) => {
  console.error(err);
  const line = document.getElementById('taste-line');
  if (line) line.textContent = 'feed failed to load';
});
