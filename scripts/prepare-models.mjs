/**
 * Strip Mixamo bloat, drop leftover mannequin meshes, retarget Midnight's
 * clips onto the real character, and rename a handful of animations so the
 * site can load Sneaker / Nezuko / Midnight at web size.
 *
 * Usage: node scripts/prepare-models.mjs
 * Reads assets/models/{sneaker,nezuko,midnight}.glb
 * Writes assets/models/{name}.min.glb
 */
import { NodeIO } from '@gltf-transform/core';
import { dedup, prune, resample, textureCompress } from '@gltf-transform/functions';
import { basename } from 'node:path';

const KEEP = {
  idle: (name) => /Idle_Loop_Rig/i.test(name) && !/Combat|Look|Talk|Tired|Torch|Paper|Rock|Scissors/.test(name),
  combat: (name) => /Idle_Combat_Loop/i.test(name),
  look: (name) => /Idle_LookAround/i.test(name),
  dance: (name) => /Dance_Loop/i.test(name),
  celebrate: (name) => /Celebration/i.test(name),
  flip: (name) => /BackFlip_Rig\.001/i.test(name),
  wave: (name) => /Interact_Rig/i.test(name),
  punch: (name) => /Punch_Jab/i.test(name),
  block: (name) => name === 'Block',
};

function classify(name) {
  for (const [clip, test] of Object.entries(KEEP)) {
    if (test(name)) return clip;
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
  // Nested leftovers: Midnight's scrapped modular clothes (Shirt) lived under Rig.
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

await prepare(
  'assets/models/sneaker.glb',
  'assets/models/sneaker.min.glb',
  { preferCombatIdle: true },
);
await prepare(
  'assets/models/nezuko.glb',
  'assets/models/nezuko.min.glb',
);
await prepare(
  'assets/models/midnight.glb',
  'assets/models/midnight.min.glb',
  {
    retarget: { from: 'Rig.001', to: 'Rig' },
    dropNamed: ['Mannequin', 'Rig.001', 'Plane', 'Shirt'],
  },
);
