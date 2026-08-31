import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const PALETTE = {
  cream: 0xf8f4f3,
  ink: 0x111111,
  pink: 0xf79be5,
  blush: 0xffd6f0,
  nezuko: 0xff6b8a,
  midnight: 0x6b4eff,
};

export function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createRenderer(canvas, { alpha = false } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  return renderer;
}

export function resizeRenderer(renderer, camera, width, height) {
  const w = Math.max(1, Math.floor(width));
  const h = Math.max(1, Math.floor(height));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

export function createStudioLights(scene, { rim = PALETTE.pink } = {}) {
  const hemi = new THREE.HemisphereLight(0xfff4fa, 0xc8b8c4, 1.15);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 1.35);
  key.position.set(2.4, 5.2, 3.2);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 16;
  key.shadow.camera.left = -4;
  key.shadow.camera.right = 4;
  key.shadow.camera.top = 4;
  key.shadow.camera.bottom = -4;
  key.shadow.bias = -0.001;
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xffd0ea, 0.55);
  fill.position.set(-3.2, 2.4, 1.4);
  scene.add(fill);

  const rimLight = new THREE.DirectionalLight(rim, 0.85);
  rimLight.position.set(0.2, 2.2, -4.2);
  scene.add(rimLight);

  return { hemi, key, fill, rimLight };
}

export function createStageFloor(radius = 3.4) {
  const group = new THREE.Group();
  group.name = 'stage-floor';

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 64),
    new THREE.MeshStandardMaterial({
      color: 0xfffdfc,
      roughness: 0.62,
      metalness: 0,
    }),
  );
  disc.rotation.x = -Math.PI / 2;
  disc.receiveShadow = true;
  group.add(disc);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.92, radius, 64),
    new THREE.MeshStandardMaterial({ color: PALETTE.ink, roughness: 0.4, metalness: 0 }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.004;
  group.add(ring);

  const blush = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.42, 48),
    new THREE.MeshStandardMaterial({
      color: PALETTE.pink,
      roughness: 0.7,
      metalness: 0,
    }),
  );
  blush.rotation.x = -Math.PI / 2;
  blush.position.y = 0.002;
  blush.receiveShadow = true;
  group.add(blush);

  return group;
}

function enableShadows(root) {
  root.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of materials) {
        if (!mat) continue;
        mat.side = THREE.DoubleSide;
        if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
      }
    }
  });
}

export function fitCharacter(root, targetHeight = 1.68) {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  if (size.y < 0.001) return;
  root.scale.multiplyScalar(targetHeight / size.y);
  root.updateMatrixWorld(true);
  box.setFromObject(root);
  root.position.y -= box.min.y;
}

export async function loadCharacter(url, { height = 1.68 } = {}) {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  const root = gltf.scene;
  enableShadows(root);
  fitCharacter(root, height);
  const mixer = new THREE.AnimationMixer(root);
  const clips = Object.fromEntries(gltf.animations.map((clip) => [clip.name, clip]));
  return { root, mixer, clips, gltf };
}

export function playClip(actor, name, { loop = true, fade = 0.18, timeScale = 1 } = {}) {
  const clip = actor.clips[name];
  if (!clip) return null;
  const next = actor.mixer.clipAction(clip);
  next.reset();
  next.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
  next.clampWhenFinished = !loop;
  next.timeScale = timeScale;
  next.enabled = true;
  if (actor.action && actor.action !== next) {
    actor.action.fadeOut(fade);
    next.fadeIn(fade);
  }
  next.play();
  actor.action = next;
  actor.clipName = name;
  return next;
}

export function findFaceTexture(root) {
  let found = null;
  root.traverse((obj) => {
    if (found || !obj.isMesh) return;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of materials) {
      if (mat?.map && /face|eye/i.test(`${mat.name} ${mat.map.name}`)) {
        found = mat.map;
        return;
      }
    }
  });
  return found;
}

export function setFaceFrame(texture, index, frames = 4) {
  if (!texture) return;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.y = 1;
  texture.offset.y = -index / frames;
  texture.needsUpdate = true;
}

export function createSparkBurst(scene, { count = 42 } = {}) {
  const positions = new Float32Array(count * 3);
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: PALETTE.pink,
    size: 0.07,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geom, mat);
  points.visible = false;
  scene.add(points);

  const velocities = [];
  let life = 0;
  let origin = new THREE.Vector3();

  return {
    burst(x, y, z, color = PALETTE.pink) {
      origin.set(x, y, z);
      mat.color.setHex(color);
      life = 1;
      points.visible = true;
      mat.opacity = 1;
      const arr = geom.attributes.position.array;
      velocities.length = 0;
      for (let i = 0; i < count; i += 1) {
        arr[i * 3] = x;
        arr[i * 3 + 1] = y;
        arr[i * 3 + 2] = z;
        velocities.push({
          x: (Math.random() - 0.5) * 2.4,
          y: Math.random() * 2.8 + 0.4,
          z: (Math.random() - 0.5) * 2.4,
        });
      }
      geom.attributes.position.needsUpdate = true;
    },
    update(dt) {
      if (life <= 0) return;
      life -= dt * 1.35;
      mat.opacity = Math.max(0, life);
      const arr = geom.attributes.position.array;
      for (let i = 0; i < velocities.length; i += 1) {
        velocities[i].y -= 2.6 * dt;
        arr[i * 3] += velocities[i].x * dt;
        arr[i * 3 + 1] += velocities[i].y * dt;
        arr[i * 3 + 2] += velocities[i].z * dt;
      }
      geom.attributes.position.needsUpdate = true;
      if (life <= 0) {
        points.visible = false;
        mat.opacity = 0;
      }
    },
  };
}

export function projectToScreen(world, camera, el, host) {
  const v = world.clone().project(camera);
  const rect = host.getBoundingClientRect();
  const x = (v.x * 0.5 + 0.5) * rect.width;
  const y = (-v.y * 0.5 + 0.5) * rect.height;
  el.style.transform = `translate(-50%, -120%) translate(${x}px, ${y}px)`;
  el.hidden = v.z > 1;
}

export function onResize(element, callback) {
  const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      callback(width, height);
    }
  });
  ro.observe(element);
  return ro;
}
