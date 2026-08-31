/**
 * Strip Mixamo bloat, drop leftover mannequin meshes, retarget Midnight's
 * clips onto the real character, rename a handful of animations, and bake
 * the KayKit Universal Animation Library (UAL1) onto the family's DEF bones.
 *
 * Usage: node scripts/prepare-models.mjs
 * Reads assets/models/{sneaker,nezuko,midnight,ual1}.glb when present
 * Writes assets/models/{name}.min.glb
 *
 * UAL1.glb on Drive is ~21 MB (over the Google Drive MCP download cap).
 * The prepare input is UAL1-G.glb, the same KayKit mannequin and clip set
 * Sneaker was built on — rest poses already match the DEF skeleton.
 */
import { NodeIO } from '@gltf-transform/core';
import { dedup, prune, resample, textureCompress } from '@gltf-transform/functions';
import { access } from 'node:fs/promises';
import { basename } from 'node:path';

const KEEP = {
  idle: (name) => /Idle_Loop_Rig/i.test(name) && !/Combat|Look|Talk|Tired|Torch|Paper|Rock|Scissors/.test(name),
  combat: (name) => /Idle_Combat_Loop/i.test(name),
  look: (name) => /Idle_LookAround/i.test(name),
  dance: (name) => /Dance_Loop/i.test(name),
  celebrate: (name) => /Celebration/i.test(name),
  flip: (name) => /BackFlip_Rig\.001/i.test(name),
  punch: (name) => /Punch_Jab/i.test(name),
  block: (name) => name === 'Block',
};

const UAL_KEEP = {
  idle: /^Idle_Loop$/,
  look: /^Idle_LookAround_Loop$/,
  talk: /^Idle_Talking_Loop$/,
  dance: /^Dance_Loop$/,
  sit: /^Sitting_Idle_Loop$/,
  'sit-enter': /^Sitting_Enter$/,
  'sit-exit': /^Sitting_Exit$/,
  groundsits: /^GroundSit_Idle_Loop$/,
  crouch: /^Crouch_Idle_Loop$/,
  'crouch-enter': /^Crouch_Enter$/,
  'crouch-exit': /^Crouch_Exit$/,
  'crouch-fwd': /^Crouch_Fwd_Loop$/,
  'crouch-bwd': /^Crouch_Bwd_Loop$/,
  'crouch-left': /^Crouch_Left_Loop$/,
  'crouch-right': /^Crouch_Right_Loop$/,
  'crouch-fwd-l': /^Crouch_Fwd_L_Loop$/,
  'crouch-fwd-r': /^Crouch_Fwd_R_Loop$/,
  'crouch-bwd-l': /^Crouch_Bwd_L_Loop$/,
  'crouch-bwd-r': /^Crouch_Bwd_R_Loop$/,
  walk: /^Walk_Loop$/,
  jog: /^Jog_Fwd_Loop$/,
  'jog-bwd': /^Jog_Bwd_Loop$/,
  'jog-left': /^Jog_Left_Loop$/,
  'jog-right': /^Jog_Right_Loop$/,
  'jog-fwd-l': /^Jog_Fwd_L_Loop$/,
  'jog-fwd-r': /^Jog_Fwd_R_Loop$/,
  'jog-bwd-l': /^Jog_Bwd_L_Loop$/,
  'jog-bwd-r': /^Jog_Bwd_R_Loop$/,
  sprint: /^Sprint_Loop$/,
  jump: /^Jump_Start$/,
  flip: /^BackFlip$/,
  celebrate: /^Celebration$/,
  drink: /^Drink$/,
  punch: /^Punch_Jab$/,
  kick: /^Kick$/,
};

function ualBoneMap() {
  const map = {
    root: 'root',
    pelvis: 'DEF-hips',
    spine_01: 'DEF-spine.001',
    spine_02: 'DEF-spine.002',
    spine_03: 'DEF-spine.003',
    neck_01: 'DEF-neck',
    Head: 'DEF-head',
    clavicle_l: 'DEF-shoulder.L',
    clavicle_r: 'DEF-shoulder.R',
    upperarm_l: 'DEF-upper_arm.L',
    upperarm_r: 'DEF-upper_arm.R',
    lowerarm_l: 'DEF-forearm.L',
    lowerarm_r: 'DEF-forearm.R',
    hand_l: 'DEF-hand.L',
    hand_r: 'DEF-hand.R',
    thigh_l: 'DEF-thigh.L',
    thigh_r: 'DEF-thigh.R',
    calf_l: 'DEF-shin.L',
    calf_r: 'DEF-shin.R',
    foot_l: 'DEF-foot.L',
    foot_r: 'DEF-foot.R',
    ball_l: 'DEF-toe.L',
    ball_r: 'DEF-toe.R',
  };
  const fingers = [
    ['index', 'f_index'],
    ['middle', 'f_middle'],
    ['pinky', 'f_pinky'],
    ['ring', 'f_ring'],
    ['thumb', 'thumb'],
  ];
  for (const [src, dst] of fingers) {
    for (const [from, to] of [['l', 'L'], ['r', 'R']]) {
      for (const i of [1, 2, 3]) {
        map[`${src}_0${i}_${from}`] = `DEF-${dst}.0${i}.${to}`;
      }
    }
  }
  return map;
}

function classify(name) {
  for (const [clip, test] of Object.entries(KEEP)) {
    if (test(name)) return clip;
  }
  return null;
}

function classifyUal(name) {
  for (const [clip, test] of Object.entries(UAL_KEEP)) {
    if (test.test(name)) return clip;
  }
  return null;
}

function nuke(node) {
  for (const child of [...node.listChildren()]) nuke(child);
  node.dispose();
}

function collectNamed(node, map = new Map()) {
  const name = node.getName();
  if (name && !map.has(name)) map.set(name, node);
  for (const child of node.listChildren()) collectNamed(child, map);
  return map;
}

function retargetClips(document, fromRootName, toRootName) {
  const root = document.getRoot();
  const fromRoot = root.listNodes().find((n) => n.getName() === fromRootName);
  const toRoot = root.listNodes().find((n) => n.getName() === toRootName);
  if (!fromRoot || !toRoot) return;
  const fromBones = collectNamed(fromRoot);
  const toBones = collectNamed(toRoot);
  let moved = 0;
  for (const anim of root.listAnimations()) {
    for (const channel of anim.listChannels()) {
      const target = channel.getTargetNode();
      if (!target) continue;
      const name = target.getName();
      if (fromBones.get(name) === target && toBones.has(name)) {
        channel.setTargetNode(toBones.get(name));
        moved += 1;
      }
    }
  }
  console.log(`  retargeted ${moved} channels ${fromRootName} → ${toRootName}`);
}

function disposeAnim(anim) {
  for (const channel of [...anim.listChannels()]) channel.dispose();
  for (const sampler of [...anim.listSamplers()]) sampler.dispose();
  anim.dispose();
}

function qmul(a, b) {
  return [
    a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
    a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
    a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
    a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
  ];
}

function qinv(a) {
  return [-a[0], -a[1], -a[2], a[3]];
}

function qrot(q, v) {
  const t = [
    2 * (q[1] * v[2] - q[2] * v[1]),
    2 * (q[2] * v[0] - q[0] * v[2]),
    2 * (q[0] * v[1] - q[1] * v[0]),
  ];
  return [
    v[0] + q[3] * t[0] + (q[1] * t[2] - q[2] * t[1]),
    v[1] + q[3] * t[1] + (q[2] * t[0] - q[0] * t[2]),
    v[2] + q[3] * t[2] + (q[0] * t[1] - q[1] * t[0]),
  ];
}

function restOf(node) {
  return {
    t: node.getTranslation() ?? [0, 0, 0],
    r: node.getRotation() ?? [0, 0, 0, 1],
    s: node.getScale() ?? [1, 1, 1],
  };
}

async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function prepare(src, dest, { preferCombatIdle = false, dropNamed = [], retarget = null } = {}) {
  const io = new NodeIO();
  const document = await io.read(src);
  const root = document.getRoot();

  if (retarget) retargetClips(document, retarget.from, retarget.to);

  const drop = new Set(dropNamed);
  const scene = root.getDefaultScene();
  for (const child of [...scene.listChildren()]) {
    if (drop.has(child.getName())) nuke(child);
  }
  for (const node of [...root.listNodes()]) {
    if (drop.has(node.getName()) || /^(shirt|pants|shoes|clothes|clothing)(\.\d+)?$/i.test(node.getName())) {
      nuke(node);
    }
  }

  const claimed = new Set();
  for (const anim of [...root.listAnimations()]) {
    const clip = classify(anim.getName());
    if (!clip || claimed.has(clip)) {
      disposeAnim(anim);
      continue;
    }
    claimed.add(clip);
    anim.setName(clip);
  }

  if (preferCombatIdle) {
    const combat = root.listAnimations().find((a) => a.getName() === 'combat');
    const idle = root.listAnimations().find((a) => a.getName() === 'idle');
    if (combat && !idle) combat.setName('idle');
  }

  // Blender exported Sneaker's "Black" material with no baseColorFactor, so it
  // came out white and dedup merged it with the body. Paint it actually black.
  for (const material of root.listMaterials()) {
    const name = material.getName() || '';
    if (/^black$/i.test(name)) {
      material.setBaseColorFactor([0, 0, 0, 1]);
    } else if (name === 'Material' && !material.getBaseColorTexture()) {
      material.setBaseColorFactor([1, 1, 1, 1]);
    }
  }

  await document.transform(
    resample({ tolerance: 1e-3 }),
    textureCompress({ resize: [512, 512] }),
    dedup(),
    prune(),
  );

  await io.write(dest, document);
  const kept = root.listAnimations().map((a) => a.getName()).join(', ');
  console.log(`${basename(src)} → ${basename(dest)}  clips: ${kept || '(none)'}`);
}

async function prepareUal(src, dest, restSrc) {
  const io = new NodeIO();
  const document = await io.read(src);
  const restDoc = await io.read(restSrc);
  const boneMap = ualBoneMap();
  const root = document.getRoot();
  const restByName = new Map(restDoc.getRoot().listNodes().map((n) => [n.getName(), n]));
  const srcByName = new Map(root.listNodes().map((n) => [n.getName(), n]));

  const claimed = new Set();
  for (const anim of [...root.listAnimations()]) {
    const clip = classifyUal(anim.getName());
    if (!clip || claimed.has(clip)) {
      disposeAnim(anim);
      continue;
    }
    claimed.add(clip);
    anim.setName(clip);
  }

  await document.transform(resample({ tolerance: 1e-3 }));

  const bakedSamplers = new WeakSet();
  let baked = 0;
  for (const anim of root.listAnimations()) {
    for (const channel of [...anim.listChannels()]) {
      const target = channel.getTargetNode();
      const srcName = target?.getName();
      const dstName = boneMap[srcName];
      if (!dstName) {
        channel.dispose();
        continue;
      }
      const dstNode = restByName.get(dstName);
      if (!dstNode) {
        channel.dispose();
        continue;
      }
      const sampler = channel.getSampler();
      const output = sampler?.getOutput();
      if (!sampler || !output || bakedSamplers.has(sampler)) continue;
      bakedSamplers.add(sampler);

      const srcRest = restOf(target);
      const dstRest = restOf(dstNode);
      const rDelta = qmul(dstRest.r, qinv(srcRest.r));
      const path = channel.getTargetPath();
      const arr = output.getArray();
      if (!arr) continue;

      if (path === 'rotation') {
        const next = new Float32Array(arr.length);
        for (let i = 0; i < arr.length; i += 4) {
          const q = qmul(rDelta, [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]]);
          next[i] = q[0];
          next[i + 1] = q[1];
          next[i + 2] = q[2];
          next[i + 3] = q[3];
        }
        output.setArray(next);
        baked += 1;
      } else if (path === 'translation') {
        const next = new Float32Array(arr.length);
        for (let i = 0; i < arr.length; i += 3) {
          const delta = [arr[i] - srcRest.t[0], arr[i + 1] - srcRest.t[1], arr[i + 2] - srcRest.t[2]];
          const rotated = qrot(rDelta, delta);
          next[i] = dstRest.t[0] + rotated[0];
          next[i + 1] = dstRest.t[1] + rotated[1];
          next[i + 2] = dstRest.t[2] + rotated[2];
        }
        output.setArray(next);
        baked += 1;
      }
    }
  }

  for (const [from, to] of Object.entries(boneMap)) {
    const node = srcByName.get(from);
    if (node) node.setName(to);
  }

  // Keep the Armature + DEF bones so animation channels still have targets.
  // Drop the KayKit dummy mesh only.
  for (const node of [...root.listNodes()]) {
    const name = node.getName();
    if (name === 'Mannequin' || /^(shirt|pants|shoes|clothes|clothing)(\.\d+)?$/i.test(name)) {
      nuke(node);
    }
  }

  await document.transform(dedup(), prune({ keepLeaves: true }));
  await io.write(dest, document);
  const kept = root.listAnimations().map((a) => a.getName()).join(', ');
  console.log(`${basename(src)} → ${basename(dest)}  baked ${baked} samplers  clips: ${kept || '(none)'}`);
}

if (await pathExists('assets/models/sneaker.glb')) {
  await prepare('assets/models/sneaker.glb', 'assets/models/sneaker.min.glb', { preferCombatIdle: true });
}
if (await pathExists('assets/models/nezuko.glb')) {
  await prepare('assets/models/nezuko.glb', 'assets/models/nezuko.min.glb');
}
if (await pathExists('assets/models/midnight.glb')) {
  await prepare('assets/models/midnight.glb', 'assets/models/midnight.min.glb', {
    retarget: { from: 'Rig.001', to: 'Rig' },
    dropNamed: ['Mannequin', 'Rig.001', 'Plane', 'Shirt'],
  });
}
if (await pathExists('assets/models/ual1.glb')) {
  await prepareUal('assets/models/ual1.glb', 'assets/models/ual1.min.glb', 'assets/models/sneaker.min.glb');
}
