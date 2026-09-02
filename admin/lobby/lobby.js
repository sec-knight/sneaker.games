import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import {
  PALETTE,
  clipLoops,
  createRenderer,
  createStudioLights,
  loadAnimationLibrary,
  loadCharacter,
  mergeClips,
  onResize,
  playClip,
  prefersReducedMotion,
  resizeRenderer,
  webglAvailable,
} from '../../assets/js/three-kit.js';

const stage = document.querySelector('[data-lobby-stage]');
const canvas = document.querySelector('[data-lobby-canvas]');
const loading = document.querySelector('[data-lobby-loading]');
const statusEl = document.querySelector('[data-lobby-status]');
const animList = document.querySelector('[data-anim-list]');

const CAST = {
  sneaker: {
    url: '../../assets/models/sneaker.min.glb',
    height: 1.7,
    color: PALETTE.pink,
    title: 'Sneaker',
  },
  nezuko: {
    url: '../../assets/models/nezuko.min.glb',
    height: 1.62,
    color: PALETTE.nezuko,
    title: 'Nezuko',
  },
  midnight: {
    url: '../../assets/models/midnight.min.glb',
    height: 1.62,
    color: PALETTE.midnight,
    title: 'Midnight',
  },
};

const ROOM_TILES = 5;
const TILE_SIZE = 2;
const ROOM_HALF = (ROOM_TILES * TILE_SIZE) / 2;
const GAIT_SPEED = { walk: 1.15, jog: 2.05, sprint: 3.15, crouch: 0.85 };

const reduced = prefersReducedMotion();
let library = {};
let actors = {};
let activeId = 'sneaker';
let actor = null;
let camera;
let cameraTarget = new THREE.Vector3(0, 0.95, 0);
let lights;
const held = new Set();

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

function setLoading(text) {
  if (loading) loading.textContent = text;
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function meshLocalSize(mesh) {
  mesh.geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  mesh.geometry.boundingBox.getSize(size);
  return size;
}

function categorizeDungeonMeshes(root) {
  const floors = [];
  const walls = [];
  const props = [];
  root.traverse((obj) => {
    if (!obj.isMesh || !obj.geometry) return;
    const size = meshLocalSize(obj);
    const max = Math.max(size.x, size.y, size.z);
    const min = Math.min(size.x, size.y, size.z);
    const flat = size.y < 0.08 && max >= 1.5 && max <= 2.5;
    const tall = size.y > 2 && size.y < 5 && Math.max(size.x, size.z) < 2.5;
    const prop = max > 0.3 && max < 3.5 && !flat;
    if (flat) floors.push(obj);
    else if (tall) walls.push(obj);
    else if (prop) props.push(obj);
  });
  return { floors, walls, props };
}

function groundedClone(source) {
  const mesh = source.clone();
  mesh.geometry = source.geometry;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  source.geometry.computeBoundingBox();
  const box = source.geometry.boundingBox.clone();
  const center = new THREE.Vector3();
  box.getCenter(center);
  mesh.position.set(-center.x, -box.min.y, -center.z);
  const group = new THREE.Group();
  group.add(mesh);
  return group;
}

function buildDungeonRoom(scene, dungeonRoot) {
  const { floors, walls, props } = categorizeDungeonMeshes(dungeonRoot);
  const rand = seededRandom(42);
  const room = new THREE.Group();
  room.name = 'dungeon-room';

  const floorTemplate = floors[Math.floor(rand() * floors.length)] || floors[0];
  const wallTemplate = walls[Math.floor(rand() * walls.length)] || walls[0];

  if (floorTemplate) {
    for (let x = 0; x < ROOM_TILES; x += 1) {
      for (let z = 0; z < ROOM_TILES; z += 1) {
        const tile = groundedClone(floorTemplate);
        tile.position.set(
          (x - ROOM_TILES / 2 + 0.5) * TILE_SIZE,
          0,
          (z - ROOM_TILES / 2 + 0.5) * TILE_SIZE,
        );
        tile.rotation.y = Math.floor(rand() * 4) * (Math.PI / 2);
        room.add(tile);
      }
    }
  }

  if (wallTemplate) {
    for (let i = 0; i < ROOM_TILES; i += 1) {
      const offset = (i - ROOM_TILES / 2 + 0.5) * TILE_SIZE;
      const segments = [
        { x: offset, z: -ROOM_HALF, rot: 0 },
        { x: offset, z: ROOM_HALF, rot: Math.PI },
        { x: -ROOM_HALF, z: offset, rot: Math.PI / 2 },
        { x: ROOM_HALF, z: offset, rot: -Math.PI / 2 },
      ];
      for (const seg of segments) {
        const piece = groundedClone(wallTemplate);
        piece.scale.setScalar(1.05);
        piece.position.set(seg.x, 0, seg.z);
        piece.rotation.y = seg.rot;
        room.add(piece);
      }
    }
  }

  const propPool = [...new Set(props.map((p) => p.name))].map((name) => {
    let found;
    dungeonRoot.traverse((o) => { if (o.isMesh && o.name === name) found = o; });
    return found;
  }).filter(Boolean);

  const decorationCount = 18;
  for (let i = 0; i < decorationCount; i += 1) {
    const source = propPool[Math.floor(rand() * propPool.length)];
    if (!source) continue;
    const prop = groundedClone(source);
    const margin = 1.2;
    prop.position.set(
      (rand() * 2 - 1) * (ROOM_HALF - margin),
      0,
      (rand() * 2 - 1) * (ROOM_HALF - margin),
    );
    prop.rotation.y = rand() * Math.PI * 2;
    const s = 0.85 + rand() * 0.35;
    prop.scale.setScalar(s);
    room.add(prop);
  }

  const torchLight = new THREE.PointLight(0xff9a4d, 1.4, 9, 2);
  torchLight.position.set(0, 2.6, 0);
  room.add(torchLight);

  const corners = [
    [-ROOM_HALF + 1, -ROOM_HALF + 1],
    [ROOM_HALF - 1, -ROOM_HALF + 1],
    [-ROOM_HALF + 1, ROOM_HALF - 1],
    [ROOM_HALF - 1, ROOM_HALF - 1],
  ];
  for (const [x, z] of corners) {
    const lamp = new THREE.PointLight(PALETTE.pink, 0.45, 7, 2);
    lamp.position.set(x, 2.2, z);
    room.add(lamp);
  }

  scene.add(room);
  return room;
}

function pickClip(name) {
  if (!actor) return name;
  if (actor.clips[name]) return name;
  if (name === 'stand') return actor.clips.idle ? 'idle' : 'idle';
  if (name.startsWith('jog-') && actor.clips.jog) return 'jog';
  if (name.startsWith('crouch-') && actor.clips.crouch) return 'crouch';
  if (name === 'sprint' && actor.clips.jog) return 'jog';
  if (name === 'walk' && actor.clips.jog) return 'jog';
  return 'idle';
}

function playAnimation(name) {
  if (!actor) return;
  const clip = pickClip(name);
  const loop = clipLoops(clip);
  actor.pose = /^(sit|crouch)/.test(clip) ? clip.split('-')[0] : 'idle';
  playClip(actor, clip, { loop, fade: 0.12 });
  document.querySelectorAll('[data-anim]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.anim === clip);
  });
  setStatus(`${CAST[activeId].title} · ${clip}`);
}

function buildAnimUI() {
  if (!animList) return;
  animList.innerHTML = '';
  const names = Object.keys(library).sort();
  const groups = [
    { label: 'Idle', test: /^(idle|look|talk)$/ },
    { label: 'Locomotion', test: /^(walk|jog|sprint|crouch)/ },
    { label: 'Actions', test: /^(dance|sit|jump|flip|celebrate|drink|punch|kick|ground)/ },
  ];
  const used = new Set();
  for (const group of groups) {
    const items = names.filter((n) => group.test.test(n));
    if (!items.length) continue;
    const heading = document.createElement('div');
    heading.className = 'lobby-anim-group';
    heading.textContent = group.label;
    animList.appendChild(heading);
    for (const name of items) {
      used.add(name);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lobby-anim-btn';
      btn.dataset.anim = name;
      btn.textContent = name;
      btn.addEventListener('click', () => playAnimation(name));
      animList.appendChild(btn);
    }
  }
  const rest = names.filter((n) => !used.has(n));
  if (rest.length) {
    const heading = document.createElement('div');
    heading.className = 'lobby-anim-group';
    heading.textContent = 'More';
    animList.appendChild(heading);
    for (const name of rest) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lobby-anim-btn';
      btn.dataset.anim = name;
      btn.textContent = name;
      btn.addEventListener('click', () => playAnimation(name));
      animList.appendChild(btn);
    }
  }
}

function showCharacter(id) {
  if (!actors[id]) return;
  activeId = id;
  if (actor?.root) actor.root.visible = false;
  actor = actors[id];
  actor.root.visible = true;
  cameraTarget.copy(actor.root.position).setY(0.95);
  document.querySelectorAll('[data-character]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.character === id);
  });
  playAnimation(actor.clipName || 'idle');
}

async function loadAllCharacters(scene) {
  const entries = Object.entries(CAST);
  let loaded = 0;
  await Promise.all(entries.map(async ([id, spec]) => {
    const data = await loadCharacter(spec.url, { height: spec.height });
    mergeClips(data, library);
    data.root.position.set(0, 0, 0);
    data.pose = 'idle';
    data.locomoting = false;
    data.root.visible = false;
    scene.add(data.root);
    playClip(data, 'idle', { loop: true, fade: 0 });
    if (reduced && data.action) data.action.paused = true;
    actors[id] = data;
    loaded += 1;
    setLoading(`Summoning characters ${loaded} / ${entries.length}`);
  }));
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

function locomote(dt) {
  if (!actor) return;
  const move = moveVector();
  if (!move) {
    if (actor.locomoting) {
      actor.locomoting = false;
      const rest = actor.pose === 'crouch' ? 'crouch' : actor.pose === 'sit' ? 'sit' : 'idle';
      playAnimation(rest);
    }
    return;
  }
  if (actor.pose === 'sit') actor.pose = 'idle';
  const gait = actor.pose === 'crouch' ? 'crouch' : gaitFromKeys();
  const clip = gait === 'crouch' ? 'crouch-fwd' : gait;
  if (actor.clipName !== pickClip(clip)) {
    playAnimation(clip);
  }
  actor.locomoting = true;
  const speed = GAIT_SPEED[gait] || GAIT_SPEED.jog;
  actor.root.position.x += move.x * speed * dt;
  actor.root.position.z += move.z * speed * dt;
  const limit = ROOM_HALF - 0.6;
  actor.root.position.x = THREE.MathUtils.clamp(actor.root.position.x, -limit, limit);
  actor.root.position.z = THREE.MathUtils.clamp(actor.root.position.z, -limit, limit);
  actor.root.rotation.y = Math.atan2(move.x, move.z);
  cameraTarget.set(actor.root.position.x, 0.95, actor.root.position.z);
}

async function boot() {
  if (!stage || !canvas || !webglAvailable()) {
    if (loading) loading.textContent = 'WebGL is not available in this browser.';
    return;
  }

  const renderer = createRenderer(canvas, { alpha: false });
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1218);
  scene.fog = new THREE.Fog(0x1a1218, 12, 22);

  camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
  camera.position.set(0, 2.4, 7.5);

  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 3;
  controls.maxDistance = 14;
  controls.minPolarAngle = 0.55;
  controls.maxPolarAngle = 1.35;
  controls.target.copy(cameraTarget);

  lights = createStudioLights(scene, { rim: PALETTE.pink });
  lights.hemi.intensity = 0.55;
  lights.key.intensity = 0.9;
  lights.key.color.setHex(0xffe8d0);
  if (renderer.softwareWebGL) lights.key.castShadow = false;

  onResize(stage, (width, height) => {
    resizeRenderer(renderer, camera, width, height);
  });

  setLoading('Loading KayKit dungeon tiles…');
  const fbxLoader = new FBXLoader();
  fbxLoader.setResourcePath('assets/dungeon/');
  const dungeonRoot = await fbxLoader.loadAsync('assets/dungeon/Dungeon-AssetPack.fbx');
  const atlas = await new THREE.TextureLoader().loadAsync('assets/dungeon/Assets-textures.png');
  atlas.colorSpace = THREE.SRGBColorSpace;
  atlas.flipY = false;
  dungeonRoot.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = !renderer.softwareWebGL;
      obj.receiveShadow = true;
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of materials) {
        if (!mat) continue;
        mat.map = atlas;
        mat.needsUpdate = true;
      }
    }
  });
  buildDungeonRoom(scene, dungeonRoot);
  dungeonRoot.visible = false;

  setLoading('Loading UAL1 animation library…');
  library = await loadAnimationLibrary('../../assets/models/ual1.min.glb');
  buildAnimUI();

  await loadAllCharacters(scene);
  showCharacter('sneaker');

  if (loading) loading.hidden = true;
  canvas.hidden = false;
  stage.classList.add('is-live');
  const rect = stage.getBoundingClientRect();
  resizeRenderer(renderer, camera, rect.width, rect.height);
  setStatus('Sneaker in the lobby. WASD to walk, pick any UAL1 clip from the list.');

  document.querySelectorAll('[data-character]').forEach((btn) => {
    btn.addEventListener('click', () => showCharacter(btn.dataset.character));
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
    trackKey(event, true);
    if (event.repeat) return;
    const map = { 1: 'sneaker', 2: 'nezuko', 3: 'midnight' };
    if (map[event.key]) showCharacter(map[event.key]);
    if (event.key === ' ') {
      event.preventDefault();
      playAnimation('jump');
    }
  });
  window.addEventListener('keyup', (event) => {
    if (event.target.matches('input, textarea')) return;
    trackKey(event, false);
  });
  window.addEventListener('blur', () => held.clear());

  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.033);
    const t = clock.elapsedTime;
    if (!reduced && actor) {
      lights.rimLight.color.setHSL(0.88 + Math.sin(t * 0.2) * 0.04, 0.5, 0.55);
      locomote(dt);
      const idleFloat = !actor.locomoting && /^(idle|look|dance)$/.test(actor.clipName);
      actor.root.position.y = idleFloat ? Math.sin(t * 1.4) * 0.012 : 0;
      actor.mixer.update(dt);
    }
    controls.target.lerp(cameraTarget, 0.08);
    controls.update();
    renderer.render(scene, camera);
  }
  tick();
}

boot().catch((err) => {
  console.error(err);
  if (loading) loading.textContent = 'The lobby refused to load. Try a refresh.';
});
