import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  PALETTE,
  clipLoops,
  createRenderer,
  createSparkBurst,
  createStageFloor,
  createStudioLights,
  loadAnimationLibrary,
  loadCharacter,
  mergeClips,
  onResize,
  playClip,
  prefersReducedMotion,
  projectToScreen,
  resizeRenderer,
  webglAvailable,
} from '../../assets/js/three-kit.js';

const stage = document.querySelector('[data-family-stage]');
const canvas = document.querySelector('[data-family-canvas]');
const loading = document.querySelector('[data-family-loading]');
const statusEl = document.querySelector('[data-family-status]');
const labels = {
  sneaker: document.querySelector('[data-label="sneaker"]'),
  nezuko: document.querySelector('[data-label="nezuko"]'),
  midnight: document.querySelector('[data-label="midnight"]'),
};

const CAST = {
  sneaker: {
    url: '../../assets/models/sneaker.min.glb',
    x: 0,
    z: 0.18,
    height: 1.7,
    color: PALETTE.pink,
    idle: 'idle',
    title: 'Sneaker',
    line: 'Mascot. Center of gravity. Same UAL1 moves as his sisters now.',
  },
  nezuko: {
    url: '../../assets/models/nezuko.min.glb',
    x: -1.55,
    z: 0,
    height: 1.62,
    color: PALETTE.nezuko,
    idle: 'idle',
    title: 'Nezuko',
    line: 'Sister. Starts the dance. Keeps the sketch-mask energy.',
  },
  midnight: {
    url: '../../assets/models/midnight.min.glb',
    x: 1.55,
    z: 0,
    height: 1.62,
    color: PALETTE.midnight,
    idle: 'idle',
    title: 'Midnight',
    line: 'Sister. Shows up after dark. Still knows the choreography.',
  },
};

const FLOOR_RADIUS = 3.2;
const GAIT_SPEED = { walk: 1.15, jog: 2.05, sprint: 3.15, crouch: 0.85 };
const reduced = prefersReducedMotion();
let actors = {};
let selected = 'sneaker';
let spark;
let lights;
let camera;
let cameraTarget = new THREE.Vector3(0, 0.95, 0);
const held = new Set();

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

function setSelected(id) {
  selected = id;
  document.querySelectorAll('[data-cast]').forEach((card) => {
    card.classList.toggle('is-active', card.dataset.cast === id);
  });
  document.querySelectorAll('[data-label]').forEach((label) => {
    label.classList.toggle('is-active', label.dataset.label === id);
  });
  const spec = CAST[id];
  const actor = actors[id];
  cameraTarget.set(actor ? actor.root.position.x : spec.x, 0.95, actor ? actor.root.position.z : spec.z);
  setStatus(`${spec.title} is in the light.`);
}

function pickClip(actor, name) {
  if (actor.clips[name]) return name;
  if (name === 'stand') return actor.clips.idle ? 'idle' : actor.idle;
  if (name.startsWith('jog-') && actor.clips.jog) return 'jog';
  if (name.startsWith('crouch-') && actor.clips.crouch) return 'crouch';
  if (name === 'sprint' && actor.clips.jog) return 'jog';
  if (name === 'walk' && actor.clips.jog) return 'jog';
  return actor.idle;
}

function everyone(name, options) {
  for (const actor of Object.values(actors)) {
    actor.pose = name === 'sit' || name === 'crouch' ? name : 'idle';
    playClip(actor, pickClip(actor, name), options);
  }
}

function act(name, { solo = false } = {}) {
  if (!actors[selected]) return;
  const loop = clipLoops(name);
  if (solo) {
    const actor = actors[selected];
    const clip = pickClip(actor, name);
    actor.pose = name === 'sit' || name === 'crouch' ? name : 'idle';
    playClip(actor, clip, { loop, fade: 0.12 });
    const color = CAST[selected].color;
    spark.burst(actor.root.position.x, 1.2, actor.root.position.z, color);
    setStatus(`${CAST[selected].title} · ${clip}`);
    return;
  }
  everyone(name, { loop, fade: 0.12 });
  spark.burst(0, 1.35, 0, PALETTE.pink);
  setStatus(name === 'dance' ? 'Dance break. All three this time.' : `Family ${name}.`);
}

function gaitFromKeys() {
  if (held.has('control')) return 'sprint';
  if (held.has('shift')) return 'walk';
  return 'jog';
}

function moveVector() {
  const x = (held.has('d') ? 1 : 0) - (held.has('a') ? 1 : 0);
  const z = (held.has('s') ? 1 : 0) - (held.has('w') ? 1 : 0);
  if (!x && !z) return null;
  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  forward.y = 0;
  if (forward.lengthSq() < 1e-6) forward.set(0, 0, -1);
  forward.normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
  const move = right.multiplyScalar(x).addScaledVector(forward, -z);
  if (move.lengthSq() < 1e-6) return null;
  return move.normalize();
}

function locomote(actor, dt) {
  const move = moveVector();
  if (!move) {
    if (actor.locomoting) {
      actor.locomoting = false;
      const rest = actor.pose === 'crouch' ? 'crouch' : actor.pose === 'sit' ? 'sit' : 'idle';
      playClip(actor, pickClip(actor, rest), { loop: true, fade: 0.12 });
    }
    return;
  }
  if (actor.pose === 'sit') actor.pose = 'idle';
  const gait = actor.pose === 'crouch' ? 'crouch' : gaitFromKeys();
  const clip = gait === 'crouch' ? 'crouch-fwd' : gait;
  if (actor.clipName !== clip) {
    playClip(actor, pickClip(actor, clip), { loop: true, fade: 0.08 });
  }
  actor.locomoting = true;
  const speed = GAIT_SPEED[gait] || GAIT_SPEED.jog;
  actor.root.position.x += move.x * speed * dt;
  actor.root.position.z += move.z * speed * dt;
  const radius = Math.hypot(actor.root.position.x, actor.root.position.z);
  if (radius > FLOOR_RADIUS) {
    actor.root.position.x *= FLOOR_RADIUS / radius;
    actor.root.position.z *= FLOOR_RADIUS / radius;
  }
  actor.root.rotation.y = Math.atan2(move.x, move.z);
  cameraTarget.set(actor.root.position.x, 0.95, actor.root.position.z);
}

async function boot() {
  if (!stage || !canvas || !webglAvailable()) {
    if (loading) loading.textContent = 'WebGL is not available in this browser, so the stage stays dark.';
    return;
  }

  const renderer = createRenderer(canvas, { alpha: false });
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(PALETTE.cream);
  scene.fog = new THREE.Fog(PALETTE.cream, 9, 18);

  camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.set(0, 1.55, 5.4);

  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 2.6;
  controls.maxDistance = 8.5;
  controls.minPolarAngle = 0.85;
  controls.maxPolarAngle = 1.42;
  controls.target.copy(cameraTarget);

  lights = createStudioLights(scene, { rim: PALETTE.pink });
  if (renderer.softwareWebGL) lights.key.castShadow = false;
  scene.add(createStageFloor(3.6));
  spark = createSparkBurst(scene, { count: 70 });

  const nezukoLamp = new THREE.PointLight(PALETTE.nezuko, 0.55, 6, 2);
  nezukoLamp.position.set(-1.6, 2.1, 1.1);
  scene.add(nezukoLamp);
  const midnightLamp = new THREE.PointLight(PALETTE.midnight, 0.55, 6, 2);
  midnightLamp.position.set(1.6, 2.1, 1.1);
  scene.add(midnightLamp);

  onResize(stage, (width, height) => {
    resizeRenderer(renderer, camera, width, height);
  });

  if (loading) loading.textContent = 'Loading the UAL1 move list…';
  const libraryPromise = loadAnimationLibrary('../../assets/models/ual1.min.glb');
  const entries = Object.entries(CAST);
  let loaded = 0;
  const library = await libraryPromise;
  await Promise.all(entries.map(async ([id, spec]) => {
    const actor = await loadCharacter(spec.url, { height: spec.height });
    mergeClips(actor, library);
    actor.root.position.set(spec.x, 0, spec.z);
    actor.idle = spec.idle;
    actor.id = id;
    actor.pose = 'idle';
    actor.locomoting = false;
    scene.add(actor.root);
    playClip(actor, spec.idle, { loop: true, fade: 0 });
    if (reduced && actor.action) actor.action.paused = true;
    actors[id] = actor;
    loaded += 1;
    if (loading) loading.textContent = `Summoning siblings ${loaded} / ${entries.length}`;
  }));

  if (loading) loading.hidden = true;
  canvas.hidden = false;
  stage.classList.add('is-live');
  const rect = stage.getBoundingClientRect();
  resizeRenderer(renderer, camera, rect.width, rect.height);
  setSelected('sneaker');
  setStatus('Sneaker, Nezuko, and Midnight. Same skeleton, same UAL1 library. WASD to walk.');

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function pick(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const meshes = Object.values(actors).flatMap((actor) => {
      const list = [];
      actor.root.traverse((obj) => { if (obj.isMesh) list.push(obj); });
      return list;
    });
    const hit = raycaster.intersectObjects(meshes, false)[0];
    if (!hit) return;
    const id = Object.keys(actors).find((key) => {
      let found = false;
      actors[key].root.traverse((obj) => { if (obj === hit.object) found = true; });
      return found;
    });
    if (!id) return;
    setSelected(id);
    const greeting = actors[id].clips.drink ? 'drink' : (actors[id].clips.look ? 'look' : 'idle');
    act(greeting, { solo: true });
  }

  let drag = null;

  canvas.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener('pointerup', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    drag = null;
    if (Math.hypot(dx, dy) > 6) return;
    pick(event);
  });

  document.querySelectorAll('[data-act]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.act;
      const solo = button.dataset.solo === 'true';
      act(name, { solo });
    });
  });

  document.querySelectorAll('[data-cast]').forEach((card) => {
    card.addEventListener('click', () => {
      setSelected(card.dataset.cast);
      act(actors[card.dataset.cast].clips.look ? 'look' : 'idle', { solo: true });
    });
  });

  const moveKeys = {
    w: 'w', a: 'a', s: 's', d: 'd',
    arrowup: 'w', arrowleft: 'a', arrowdown: 's', arrowright: 'd',
    shift: 'shift', control: 'control',
  };

  function trackKey(event, down) {
    const mapped = moveKeys[event.key.toLowerCase()];
    if (!mapped) return false;
    if (down) held.add(mapped);
    else held.delete(mapped);
    if (mapped === 'w' || mapped === 'a' || mapped === 's' || mapped === 'd') event.preventDefault();
    return true;
  }

  window.addEventListener('keydown', (event) => {
    if (event.target.matches('input, textarea')) return;
    const moving = trackKey(event, true);
    if (event.repeat && moving) return;
    const map = { 1: 'sneaker', 2: 'nezuko', 3: 'midnight' };
    if (map[event.key]) {
      setSelected(map[event.key]);
      act('drink', { solo: true });
    }
    if (event.key === 'e' || event.key === 'E') act('dance');
    if (event.key === 'f') act('flip');
    if (event.key === 'c') act('celebrate');
    if (event.key === 'i') act('idle');
    if (event.key === 'x') act('sit');
    if (event.key === 'v') act('crouch');
    if (event.key === ' ') {
      event.preventDefault();
      act('jump', { solo: true });
    }
  });
  window.addEventListener('keyup', (event) => {
    if (event.target.matches('input, textarea')) return;
    trackKey(event, false);
  });
  window.addEventListener('blur', () => held.clear());

  const clock = new THREE.Clock();
  const labelPos = new THREE.Vector3();

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.033);
    const t = clock.elapsedTime;
    if (!reduced) {
      lights.rimLight.color.setHSL((Math.sin(t * 0.25) * 0.06) + 0.9, 0.55, 0.7);
      const mover = actors[selected];
      if (mover) locomote(mover, dt);
      for (const actor of Object.values(actors)) {
        const idleFloat = !actor.locomoting && (actor.clipName === 'idle' || actor.clipName === 'look');
        actor.root.position.y = idleFloat ? Math.sin(t * 1.5 + actor.root.position.x) * 0.015 : 0;
        actor.mixer.update(dt);
      }
    }
    controls.target.lerp(cameraTarget, 0.06);
    controls.update();
    spark.update(dt);
    renderer.render(scene, camera);

    for (const [id, actor] of Object.entries(actors)) {
      const el = labels[id];
      if (!el) continue;
      labelPos.set(actor.root.position.x, 1.78, actor.root.position.z);
      projectToScreen(labelPos, camera, el, stage);
    }
  }
  tick();
}

boot().catch((err) => {
  console.error(err);
  if (loading) loading.textContent = 'The siblings refused to load. Try a refresh.';
});
