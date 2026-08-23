(()=>{
  const BUILD = "2026-08-23-web-v1";
  const NAME_KEY = "hordePlayerName";
  const NAME_RE = /^[A-Za-z0-9][A-Za-z0-9 _-]{0,15}$/;
  const board = document.querySelector("[data-scoreboard]");
  const overlay = document.querySelector("[data-score-overlay]");
  const form = document.querySelector("[data-score-form]");
  const summary = document.querySelector("[data-score-summary]");
  const status = document.querySelector("[data-score-status]");
  const skip = document.querySelector("[data-score-skip]");
  const nameHint = document.querySelector("[data-name-hint]");
  const turnstileContainer = form ? form.querySelector("[data-turnstile]") : null;
  const submit = form ? form.querySelector("button[type=submit]") : null;
  const nameInput = form ? form.querySelector("input[name=playerName]") : null;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  window.hordeUseHtmlKeyboard = coarse;
  let token = "";
  let widgetId = null;
  let pending = null;
  let turnstileReady = false;

  const device = () => {
    const w = Math.min(screen.width, screen.height);
    if (w < 600) return "phone";
    if (w < 1000) return "tablet";
    return "desktop";
  };
  const say = (message, state = "") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };
  const sanitizeName = (raw) => String(raw || "").replace(/[^A-Za-z0-9 _-]/g, "").replace(/\s+/g, " ").trim().slice(0, 16);
  const asPayload = (payload) => {
    if (typeof payload === "string") {
      try { return JSON.parse(payload); } catch { return null; }
    }
    return payload && typeof payload === "object" ? payload : null;
  };
  const savedName = () => {
    try { return sanitizeName(localStorage.getItem(NAME_KEY) || ""); } catch { return ""; }
  };
  const syncOverlayLock = () => {
    const open = Boolean(overlay && !overlay.hidden);
    document.documentElement.classList.toggle("horde-overlay-open", open);
    const canvas = document.getElementById("canvas");
    if (!canvas) return;
    canvas.style.pointerEvents = open ? "none" : "";
    canvas.style.visibility = open ? "hidden" : "";
    canvas.style.zIndex = open ? "0" : "";
  };
  const setOpen = (open) => {
    if (!overlay) return;
    if (open) document.body.appendChild(overlay);
    overlay.hidden = !open;
    if (open) {
      overlay.style.zIndex = "2147483647";
      overlay.style.position = "fixed";
    }
    syncOverlayLock();
  };

  function renderBoard(scores) {
    if (!board) return;
    board.replaceChildren();
    if (!scores || !scores.length) {
      const empty = document.createElement("li");
      empty.className = "scoreboard-empty";
      empty.textContent = "The wall is unclaimed. Be the first.";
      board.append(empty);
      return;
    }
    scores.forEach((row, index) => {
      const item = document.createElement("li");
      const rank = document.createElement("span");
      rank.className = "scoreboard-rank";
      rank.textContent = String(index + 1);
      const name = document.createElement("span");
      name.className = "scoreboard-name";
      name.textContent = row.playerName;
      const meta = document.createElement("span");
      meta.className = "scoreboard-meta";
      meta.innerHTML = `<strong>${Number(row.score).toLocaleString()}</strong><span>Wave ${row.waveReached}</span><span>${row.kills} kills</span>`;
      item.append(rank, name, meta);
      board.append(item);
    });
  }

  async function loadBoard() {
    if (!board) return;
    try {
      const response = await fetch("/api/scores/horde-defense", {headers: {accept: "application/json"}});
      const data = await response.json();
      if (!response.ok) throw new Error();
      renderBoard(data.scores || []);
    } catch {
      board.replaceChildren();
      const empty = document.createElement("li");
      empty.className = "scoreboard-empty";
      empty.textContent = "The board will appear once scores are connected.";
      board.append(empty);
    }
  }

  function hideOverlay() {
    setOpen(false);
    pending = null;
  }

  async function ensureTurnstile(siteKey) {
    if (turnstileReady || !turnstileContainer || !window.turnstile) return;
    widgetId = window.turnstile.render(turnstileContainer, {
      sitekey: siteKey,
      theme: "light",
      callback: (value) => { token = value; say(""); },
      "expired-callback": () => { token = ""; say("Verification expired. Please try again.", "error"); }
    });
    turnstileReady = true;
    if (submit) submit.disabled = false;
  }

  async function bootOverlay() {
    if (!form) return;
    try {
      const response = await fetch("/api/scores/horde-defense", {headers: {accept: "application/json"}});
      const data = await response.json();
      if (!response.ok || !data.ready || !data.siteKey) throw new Error();
      if (data.boardReady === false) {
        say("The public board is not connected yet.", "error");
        return;
      }
      if (!window.turnstile) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
          script.async = true;
          script.defer = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      await ensureTurnstile(data.siteKey);
      say("");
    } catch {
      say("Could not open the board. Try again in a moment.", "error");
    }
  }

  window.onHordeGameOver = (raw) => {
    window.hordeScorePayload = null;
    const payload = asPayload(raw);
    if (!overlay || !form || !payload) return;
    pending = payload;
    if (summary) {
      summary.textContent = `Score ${Number(payload.score).toLocaleString()} · Wave ${payload.wave} · ${payload.kills} kills · ${Math.floor(payload.seconds)}s`;
    }
    if (nameInput) nameInput.value = savedName() || sanitizeName(payload.name || "");
    if (nameHint) nameHint.hidden = !coarse;
    setOpen(true);
    if (!coarse) nameInput?.focus();
    bootOverlay();
  };
  window.hordeOpenScoreOverlay = function (raw) {
    window.hordeScorePayload = raw;
    window.onHordeGameOver(raw);
  };
  window.addEventListener("horde-game-over", (event) => {
    window.onHordeGameOver(event.detail);
  });
  setInterval(() => {
    if (window.hordeScorePayload == null || window.hordeScorePayload === "") return;
    window.onHordeGameOver(window.hordeScorePayload);
  }, 250);

  if (skip) skip.addEventListener("click", hideOverlay);

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!pending) { say("Play a run first.", "error"); return; }
      const playerName = sanitizeName(nameInput ? nameInput.value : "");
      if (!NAME_RE.test(playerName) || playerName.length < 2) {
        say("Name must be 2–16 letters, numbers, spaces, - or _.", "error");
        return;
      }
      if (!token) { say("Please complete the human verification.", "error"); return; }
      const data = new FormData(form);
      submit.disabled = true;
      say("Sending…");
      try {
        const response = await fetch("/api/scores/horde-defense", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({
            game: "horde-defense",
            build: pending.build || BUILD,
            playerName,
            score: pending.score,
            waveReached: pending.wave,
            wavesCleared: pending.wavesCleared,
            kills: pending.kills,
            survivalSeconds: pending.seconds,
            website: data.get("website"),
            device: device(),
            turnstileToken: token
          })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Could not submit score.");
        try { localStorage.setItem(NAME_KEY, playerName); } catch {}
        say("Posted. The wall remembers.", "success");
        setTimeout(hideOverlay, 1200);
      } catch (error) {
        say(error.message || "Could not submit score.", "error");
      } finally {
        token = "";
        if (widgetId !== null && window.turnstile) window.turnstile.reset(widgetId);
        submit.disabled = false;
      }
    });
  }

  loadBoard();
})();
