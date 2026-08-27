# Project Context

This repository contains the live sneaker.games site **and** the durable architecture and work activity for that site.

Personal Grimoire: private repo `sec-knight/black-clover`, project key `sneaker-games-site`. Architecture and source both resolve here (`sec-knight/sneaker.games`). Do not look for a separate architecture-only repo.

## Architecture

`architecture/` contains the project's reconciled durable understanding: intent, structure, important decisions, constraints, and direction.

The structural split that matters is **public site vs Access-protected `/admin` workshop**. Related game and tool repos are `extra_sources` — implementation and asset vaults that feed built copies into this tree. They are not separate products hosted by this project.

Architecture remains the canonical record for those durable concerns until deliberately changed. If activity reveals that architecture may be stale or wrong within that role, surface the contradiction for refinement rather than silently allowing activity to supersede it.

## Activity

`activity/` contains work-session context and evidence: notes, experiments, partial ideas, failures, findings, and unresolved questions.

Dated activity preserves continuity across chats, tools, devices, and work sessions. It is evidence and history, not durable canon.

`activity/CURRENT.md` is authoritative for current execution state and the single next action. It is a bounded pointer to the latest relevant session record, current state, next action, and approaches that should not be retried.

`AGENTS.md` and this file define how to interpret and operate the repository. They should not duplicate the active-work pointer.

## extra_sources

These vaults are related implementation, not this repo's products. Do not clone them unless the current work needs their source. Deployed copies already live under the paths named in `architecture/overview.md`.

- `sec-knight/cursed-procedure` — Pink Bloom assets and procedural Three.js game; feeds `admin/pink-bloom/`
- `sec-knight/avatars` — mannequin/avatar builder; feeds `admin/character-designer/`
- `sec-knight/godot-horde-demo` — Godot Horde Defense plus Three.js remake; feeds public `games/horde-defense/` and admin `admin/horde-three/`

## Context Flow

```text
architecture
  -> CURRENT.md + bounded recent activity
  -> work session
  -> activity update
  -> deliberate refinement
  -> architecture
```

## Principle

**Preserve activity freely. Promote architecture deliberately.**
