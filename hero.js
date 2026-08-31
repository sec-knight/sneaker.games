import * as THREE from 'three';
import {
  PALETTE,
  createRenderer,
  createSparkBurst,
  createStudioLights,
  findFaceTexture,
  loadCharacter,
  onResize,
  playClip,
  prefersReducedMotion,
  resizeRenderer,
  setFaceFrame,
  webglAvailable,
} from './assets/js/three-kit.js';

const host = document.querySelector('[data-hero-stage]');
if (host && webglAvailable()) {
  const canvas = host.querySelector('[data-hero-canvas]');
  const fallback = host.querySelector('[data-hero-fallback]');
  const hint = host.querySelector('[data-hero-hint]');
  const reduced = prefersReducedMotion();

  const renderer = createRenderer(canvas, { alpha: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.set(0, 1.18, 3.35);
  camera.lookAt(0, 0.82, 0);
  const lights = createStudioLights(scene);
  if (renderer.softwareWebGL) lights.key.castShadow = false;

  const spark = createSparkBurst(scene, { count: 36 });
  const clock = new THREE.Clock();
  const pointer = { x: 0, y: 0 };
  let actor = null;
  let face = null;
  let faceIndex = 0;
  let busy = false;
  let visible = true;
  let targetYaw = 0;
  let targetPitch = 0;

  try {
    actor = await loadCharacter('assets/models/sneaker.min.glb', { height: 1.62 });
    scene.add(actor.root);
    face = findFaceTexture(actor.root);
    playClip(actor, 'idle', { loop: true, fade: 0 });
    if (reduced) {
      actor.mixer.update(0.3);
      actor.action.paused = true;
    }
    canvas.hidden = false;
    if (fallback) fallback.hidden = true;
    if (hint) hint.hidden = false;
    host.classList.add('is-live');
    const rect = host.getBoundingClientRect();
    resizeRenderer(renderer, camera, rect.width, rect.height);
  } catch (err) {
    console.warn('Hero stage failed to load', err);
  }

  onResize(host, (width, height) => {
    resizeRenderer(renderer, camera, width, height);
  });

  const io = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
  }, { threshold: 0.08 });
  io.observe(host);

  host.addEventListener('pointermove', (event) => {
    const rect = host.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    pointer.y = (event.clientY - rect.top) / rect.height * 2 - 1;
    targetYaw = pointer.x * 0.55;
    targetPitch = THREE.MathUtils.clamp(pointer.y * 0.18, -0.12, 0.16);
  });

  host.addEventListener('pointerleave', () => {
    targetYaw = 0;
    targetPitch = 0;
  });

  async function flip() {
    if (!actor || busy || reduced) return;
    busy = true;
    faceIndex = (faceIndex + 1) % 4;
    setFaceFrame(face, faceIndex);
    spark.burst(0, 1.1, 0.2, PALETTE.pink);
    playClip(actor, 'flip', { loop: false, fade: 0.08 });
    const clip = actor.clips.flip;
    const duration = clip ? clip.duration / Math.max(actor.action.timeScale, 0.01) : 1.2;
    await new Promise((resolve) => window.setTimeout(resolve, duration * 900));
    playClip(actor, 'idle', { loop: true, fade: 0.16 });
    busy = false;
  }

  host.addEventListener('click', flip);
  host.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      flip();
    }
  });

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.033);
    if (!visible) return;
    if (actor) {
      actor.root.rotation.y += (targetYaw - actor.root.rotation.y) * 0.08;
      actor.root.rotation.x += (targetPitch - actor.root.rotation.x) * 0.08;
      if (!reduced) {
        actor.root.position.y = Math.sin(clock.elapsedTime * 1.6) * 0.012;
        actor.mixer.update(dt);
      }
    }
    spark.update(dt);
    renderer.render(scene, camera);
  }
  tick();
}
