# Editorial Evidence Homepage

Date: 2026-08-09

## Intent

The homepage should feel authored, current, and human without relying on
mechanical spectacle or generic portfolio cards. It should make one promise and
prove it with real work: build Agent systems that can operate reliably, then
leave enough evidence for someone else to verify the result.

## Visual language

- Near-black display space, warm off-white reading space, and one vermilion
  accent.
- Oversized Chinese headlines with compact mono metadata.
- Asymmetrical editorial grids, hard edges, long rules, and deliberate colour
  changes between sections.
- No simulated hardware, fake status indicators, film countdowns, glowing
  effects, decorative grids, rounded dashboards, or invented metrics.
- Real upstream pull requests and real article pages are the main visual
  material.

## Information structure

1. Hero: one positioning statement and two recent merged upstream records.
2. Selected work: problem, responsibility, evidence, verified facts, and links.
3. Writing: two real article previews with summaries and direct reading links.
4. Contact: concise invitation with email, GitHub, and an expandable WeChat QR.

## Motion thesis

One vermilion evidence line establishes the page rhythm. Headline lines arrive
through controlled clipping, project rows settle as they enter the reading
area, and article imagery responds slightly to pointer position. Motion never
hides required content, loops, fakes progress, or delays interaction.

Reduced-motion mode keeps every section visible, removes spatial image response,
and uses the shared motion configuration plus CSS media queries so server and
client markup stay consistent.

## Responsive rules

- Desktop uses wide asymmetrical grids and alternating article composition.
- Tablet collapses proof material beneath the main project narrative.
- Mobile becomes a single reading column, preserves evidence order, and keeps
  every contact target comfortably tappable.
- No horizontal overflow is accepted at 390 CSS pixels.

## Acceptance checks

- Homepage contains no mechanical or pseudo-system visual metaphor.
- All project facts come from repository data; restricted work stays explicitly
  restricted.
- Desktop and mobile render without console errors or horizontal overflow.
- WeChat disclosure works with native keyboard and pointer behaviour.
- Reduced-motion emulation produces no hydration mismatch.
- Lint and production build complete successfully.

