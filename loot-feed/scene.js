import * as THREE from 'three';

const canvas = document.getElementById('bg');
if (!canvas) {
  // no canvas — CSS bg only
} else {
  try {
    boot(canvas);
  } catch (err) {
    console.warn('LootFeed WebGL fallback', err);
    canvas.remove();
  }
}

function boot(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x07060c, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07060c, 0.045);

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0.35, 7.2);

  const key = new THREE.PointLight(0xff2d55, 48, 40, 2);
  key.position.set(4, 3, 5);
  scene.add(key);
  const fill = new THREE.PointLight(0x4cc9f0, 28, 40, 2);
  fill.position.set(-5, -1, 3);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0xffffff, 0.18));

  // floating loot crystals / polyhedra
  const loot = new THREE.Group();
  scene.add(loot);
  const geos = [
    new THREE.IcosahedronGeometry(0.55, 0),
    new THREE.OctahedronGeometry(0.5, 0),
    new THREE.TetrahedronGeometry(0.65, 0),
    new THREE.DodecahedronGeometry(0.45, 0),
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
  ];
  const mats = [
    new THREE.MeshStandardMaterial({ color: 0xff2d55, metalness: 0.85, roughness: 0.2, emissive: 0x4a0018, emissiveIntensity: 0.55 }),
    new THREE.MeshStandardMaterial({ color: 0xffb347, metalness: 0.7, roughness: 0.25, emissive: 0x3a2200, emissiveIntensity: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0x4cc9f0, metalness: 0.8, roughness: 0.15, emissive: 0x003344, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x9b5de5, metalness: 0.75, roughness: 0.2, emissive: 0x1a0033, emissiveIntensity: 0.45 }),
    new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1, emissive: 0x222222, emissiveIntensity: 0.25 }),
  ];

  const pieces = [];
  for (let i = 0; i < 28; i++) {
    const mesh = new THREE.Mesh(geos[i % geos.length], mats[i % mats.length]);
    const r = 2.2 + Math.random() * 4.5;
    const a = Math.random() * Math.PI * 2;
    mesh.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 5.5, Math.sin(a) * r - 1.5);
    mesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    const s = 0.35 + Math.random() * 0.9;
    mesh.scale.setScalar(s);
    mesh.userData = {
      spin: new THREE.Vector3(
        (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 1.1,
        (Math.random() - 0.5) * 0.8
      ),
      bob: Math.random() * Math.PI * 2,
      bobAmp: 0.15 + Math.random() * 0.35,
      baseY: mesh.position.y,
    };
    loot.add(mesh);
    pieces.push(mesh);
  }

  // star / spark particle field
  const COUNT = 900;
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 18 - 2;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xffd6e0,
    size: 0.035,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const sparks = new THREE.Points(pGeo, pMat);
  scene.add(sparks);

  // soft ground ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.03, 12, 80),
    new THREE.MeshBasicMaterial({ color: 0xff2d55, transparent: true, opacity: 0.35 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -2.1;
  scene.add(ring);

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFine = window.matchMedia('(pointer: fine)').matches;
  if (isFine && !reduce) {
    window.addEventListener(
      'pointermove',
      (e) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      },
      { passive: true }
    );
  }

  // nudge from pane scrolls
  let scrollEnergy = 0;
  document.querySelectorAll('.pane-scroll').forEach((el) => {
    el.addEventListener(
      'scroll',
      () => {
        scrollEnergy = Math.min(1.5, scrollEnergy + 0.08);
      },
      { passive: true }
    );
  });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  let running = true;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
  });

  function frame() {
    requestAnimationFrame(frame);
    if (!running) return;
    const t = clock.getElapsedTime();
    const dt = Math.min(clock.getDelta(), 0.05);

    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;

    if (!reduce) {
      loot.rotation.y = t * 0.08 + pointer.x * 0.25;
      loot.rotation.x = pointer.y * 0.12;
      sparks.rotation.y = t * 0.02;
      sparks.position.y = Math.sin(t * 0.2) * 0.15;
      ring.rotation.z = t * 0.15;
      ring.scale.setScalar(1 + Math.sin(t * 0.7) * 0.03 + scrollEnergy * 0.05);

      for (const mesh of pieces) {
        const u = mesh.userData;
        mesh.rotation.x += u.spin.x * dt;
        mesh.rotation.y += u.spin.y * dt;
        mesh.rotation.z += u.spin.z * dt;
        mesh.position.y = u.baseY + Math.sin(t * 0.9 + u.bob) * u.bobAmp;
      }

      key.intensity = 42 + Math.sin(t * 1.4) * 8 + scrollEnergy * 12;
      fill.intensity = 24 + Math.cos(t * 1.1) * 6;
      scrollEnergy *= 0.96;
    }

    camera.position.x = pointer.x * 0.55;
    camera.position.y = 0.35 - pointer.y * 0.25;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  frame();
}
