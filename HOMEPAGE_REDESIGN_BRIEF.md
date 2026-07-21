# Homepage Redesign Brief

Updated: 2026-07-20

## Selected Final Direction

On 2026-07-21, the visual direction was finalized as **Post-Punk Agent
Assembly**, a heavier execution of Mechanical Choreography Theater. The
complete design, motion, responsive, accessibility, content, asset, and QA
specification is recorded in
[`HOMEPAGE_FINAL_DESIGN_SPEC.md`](HOMEPAGE_FINAL_DESIGN_SPEC.md).

Treat that document as the selected implementation target. The earlier three
visual directions remain useful exploration history, but implementation no
longer needs another direction-selection round unless the owner explicitly
reopens visual exploration.

## Purpose

Redesign the personal homepage for hiring managers and senior engineers. The
page should prove that the owner can build reliable AI Agent systems by making
the website itself feel like a system that assembles, runs, records evidence,
and reaches a clear conclusion.

This redesign must be assertive and memorable. Do not reduce it to a restrained
editorial portfolio or a generic collection of polished cards.

## Starting Point

- Repository: `D:\web`
- Working branch at handoff: `codex/homepage-refactor`
- Last pushed implementation commit: `73982ba` (`feat: 重构首页展示与项目舞台`)
- Current visual audit: `output/design-audit/`
- Captured inspiration: `output/design-references/`
- Existing design tokens: `src/app/globals.css`
- Existing project stage: `src/components/home/featured-projects-section.tsx`
- Existing time log: `src/components/home/experience-section.tsx`

## Visual DNA To Preserve

- Near-black `#11100e` and `#090907`
- Warm paper `#f0eadf`
- Safety orange `#d75a32` used as a decisive signal, not decoration
- Heavy Chinese display typography, clean sans body text, mono system labels
- Industrial grid, measurement marks, rails, crop marks, system boundaries
- Editorial contrast between dark technical scenes and warm-paper intervals
- Core copy and attitude: `把 Agent 做成真正能工作的系统。`

Do not introduce glassmorphism, rounded SaaS dashboards, neon cyberpunk,
decorative blobs, generic feature-card grids, or unrelated visual styles.

## User Feedback That Must Be Addressed

1. The current design is too restrained.
2. The project section needs meaningful motion. Switching scenes with only
   opacity, vertical offset, or scale is not enough; each project's internal
   visual system must animate and transform.
3. The current time log is too ordinary. It should feel like time and ongoing
   practice, not a static table.
4. The strongest areas are still only average. The hero and ending must create
   a real opening ignition and final climax.
5. Project scenes must not crop at normal desktop widths.

## Desired Experience

### Hero: ignition

The headline and Agent apparatus should occupy one composition. Components,
rails, labels, signals, and system boundaries should assemble or boot as the
visitor enters. Avoid another quiet two-column hero.

### Featured projects: choreographed stage

Use a pinned, scroll-driven theater with three distinct project states. Panels
may slide on rails, typography may cross the viewport, system nodes may rotate
or lock into place, and media planes may move in depth. Every scene needs one
dominant visual, readable title, role, tags, and status. Motion must communicate
how the project works, not merely decorate it.

### Time log: living chronology

Replace the simple rows with an event trace, paper strip, signal timeline, or
oscilloscope-like chronology. Emphasize a current entry, timestamps, evidence,
and an orange progress signal. It should convey learning and practice as an
ongoing process.

### Finale: convergence

Do not repeat the hero's giant-type formula. Let the scattered machinery,
signals, and project fragments converge into a stable Agent system boundary or
signature, followed by decisive navigation/contact actions.

## Visual Directions To Explore

Generate exactly three independent visual options before implementation:

1. **Mechanical Choreography Theater** — the recommended direction. A system is
   physically assembled and performed across the page.
2. **Editorial Film Cut** — cinematic framing, hard cuts, frame counters, and
   kinetic typography turn projects and experience into an authored sequence.
3. **Living System Map** — a responsive network of nodes, traces, and evidence
   shows the Agent system evolving over time.

The options should change hierarchy, composition, and motion model while
preserving the same brand DNA. Present the three visual options to the user and
wait for selection before editing production UI.

## Reference Sources

- Owner's previous hero:
  `C:\Users\24719\.codex\state\plugins\product-design\assets\homepage-previous-agent-lab-hero.png`
- Owner's previous time log:
  `C:\Users\24719\.codex\state\plugins\product-design\assets\homepage-previous-time-log.png`
- Lusion spatial/interactive staging:
  `C:\Users\24719\.codex\state\plugins\product-design\assets\reference-lusion-immersive-hero.png`
- Obys radical editorial grid:
  `C:\Users\24719\.codex\state\plugins\product-design\assets\reference-obys-editorial-grid.png`
- fromanother cinematic depth and framing:
  `C:\Users\24719\.codex\state\plugins\product-design\assets\reference-fromanother-cinematic-hero.png`

Use the external captures as moodboard material only. Do not copy their logos,
text, or exact layouts.

## Current Blocker And Next Step

The built-in image generator repeatedly failed while uploading the reference
images. No design option was successfully returned, and no redesign source code
was changed after commit `73982ba`.

The next session should first continue visual ideation. If the built-in image
generator still fails, use the CLI fallback only after the user explicitly
approves it and has configured `OPENAI_API_KEY` locally. Never ask the user to
paste the key into chat.

After the user selects a visual option, implement it, then run lint/build and
browser QA. Push only when requested.

## Acceptance Criteria

- The first screen feels like an ignition or live system event.
- The project section contains coordinated internal motion, not just scene
  fades, and stays uncropped at 1440px desktop widths.
- The time log is experiential and clearly temporal.
- The finale escalates and resolves the page instead of repeating the hero.
- Primary content remains readable and navigable without motion.
- `prefers-reduced-motion` has a coherent fallback.
- Mobile and desktop layouts do not overflow horizontally.
- Existing truthfulness constraints remain: do not invent employers, results,
  awards, links, dates, or project claims.
- Verify at 1440x900 or 1440x1024, then check smaller breakpoints.
