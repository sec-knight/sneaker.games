import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  PALETTE,
  createRenderer,
  createSparkBurst,
  createStageFloor,
  createStudioLights,
  loadCharacter,
  onResize,
  playClip,
  prefersReducedMotion,
  projectToScreen,
  resizeRenderer,
  webglAvailable,
} from '../assets/js/three-kit.js';

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
    url: '../assets/models/sneaker.min.glb',
    x: 0,
    z: 0.18,
    height: 1.7,
    color: PALETTE.pink,
    idle: 'idle',
    title: 'Sneaker',
    line: 'Mascot. Center of gravity. Will flip instead of dancing if you let him.',
  },
  nezuko: {
    url: '../assets/models/nezuko.min.glb',
    x: -1.55,
    z: 0,
    height: 1.62,
    color: PALETTE.nezuko,
    idle: 'idle',
    title: 'Nezuko',
    line: 'Sister. Starts the dance. Keeps the sketch-mask energy.',
  },
  midnight: {
    url: '../assets/models/midnight.min.glb',
    x: 1.55,
    z: 0,
    height: 1.62,
    color: PALETTE.midnight,
    idle: 'idle',
    title: 'Midnight',
    line: 'Sister. Shows up after dark. Still knows the choreography.',
  },
};

const reduced = prefersReducedMotion();
let actors = {};
let selected = 'sneaker';
let spark;
let lights;
let cameraTarget = new THREE.Vector3(0, 0.95, 0);

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
  cameraTarget.set(spec.x, 0.95, spec.z);
  setStatus(`${spec.title} is in the light.`);
}

function pickClip(actor, name) {
  if (actor.clips[name]) return name;
  if (name === 'dance' || name === 'celebrate') return actor.clips.flip ? 'flip' : actor.idle;
  return actor.idle;
}

function everyone(name, options) {
  for (const actor of Object.values(actors)) {
    playClip(actor, pickClip(actor, name), options);
  }
}

function act(name, { solo = false } = {}) {
  if (!actors[selected]) return;
  if (solo) {
    const actor = actors[selected];
    const clip = pickClip(actor, name);
    playClip(actor, clip, { loop: /idle|dance|look|combat/.test(clip), fade: 0.12 });
    const color = CAST[selected].color;
    spark.burst(CAST[selected].x, 1.2, CAST[selected].z, color);
    setStatus(`${CAST[selected].title} · ${clip}`);
    return;
  }
  everyone(name, { loop: name === 'dance' || name === 'idle' || name === 'look', fade: 0.12 });
  spark.burst(0, 1.35, 0, PALETTE.pink);
  const label = name === 'dance' ? 'Dance break. Sneaker is improvising.' : `Family ${name}.`;
  setStatus(label);
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

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
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
  if (renderer.userData.software) lights.key.castShadow = false;
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

  const entries = Object.entries(CAST);
  let loaded = 0;
  await Promise.all(entries.map(async ([id, spec]) => {
    const actor = await loadCharacter(spec.url, { height: spec.height });
    actor.root.position.set(spec.x, 0, spec.z);
    actor.idle = spec.idle;
    actor.id = id;
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
  setStatus('Sneaker, Nezuko, and Midnight. Click a sibling. Then make trouble.');

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
    const greeting = actors[id].clips.wave ? 'wave' : (actors[id].clips.look ? 'look' : 'idle');
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

  window.addEventListener('keydown', (event) => {
    if (event.target.matches('input, textarea')) return;
    const map = { 1: 'sneaker', 2: 'nezuko', 3: 'midnight' };
    if (map[event.key]) {
      setSelected(map[event.key]);
      act('wave', { solo: true });
    }
    if (event.key === 'd') act('dance');
    if (event.key === 'f') act('flip');
    if (event.key === 'c') act('celebrate');
    if (event.key === 'i') act('idle');
  });

  const clock = new THREE.Clock();
  const labelPos = new THREE.Vector3();

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.033);
    const t = clock.elapsedTime;
    if (!reduced) {
      lights.rimLight.color.setHSL((Math.sin(t * 0.25) * 0.06) + 0.9, 0.55, 0.7);
      for (const actor of Object.values(actors)) {
        actor.root.position.y = Math.sin(t * 1.5 + actor.root.position.x) * 0.015;
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
      labelPos.set(CAST[id].x, 1.78, CAST[id].z);
      projectToScreen(labelPos, camera, el, stage);
    }
  }
  tick();
}

boot().catch((err) => {
  console.error(err);
  if (loading) loading.textContent = 'The siblings refused to load. Try a refresh.';
});
