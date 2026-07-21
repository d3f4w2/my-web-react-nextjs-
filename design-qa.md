# Homepage redesign — design QA

## Scope

- Source target: `output/design-references/homepage-post-punk-mechanical-assembly.png`
- Desktop viewport: 1440 × 1000
- Mobile viewport: 390 × 844
- States reviewed: hero assembly, project rail, evidence timeline, final system frame, reduced mobile stack

## Comparison evidence

- Full key-state comparison: `output/implementation-qa/comparison-full.png`
- Hero comparison: `output/implementation-qa/comparison-hero.png`
- Desktop captures: `homepage-desktop-1440.png`, `homepage-project-stage.png`, `homepage-time-log.png`, `homepage-footer.png`
- Mobile captures: `homepage-mobile-390.png`, `homepage-mobile-projects.png`

## Findings and corrections

1. The first hero pass made the assembly image too recessive. Its initial opacity was raised from 0.40 to 0.62 so the machine reads immediately without overpowering the headline.
2. The inactive evidence rows were too faint on the paper surface. Their opacity was raised from 0.52 to 0.72 for legibility.
3. The hero LCP image was changed to eager loading. A clean browser pass reports no errors or warnings.
4. Full-page browser capture is not used as a fidelity artifact because sticky scroll scenes repeat during tiled capture. The comparison board instead uses four real viewport states from the implemented interaction.

## Acceptance notes

- The black, warm ivory, signal-orange palette and post-punk industrial hierarchy match the approved direction.
- The hero retains the stacked Chinese statement and presents the Agent as a mechanical system of Context, Memory, Tools, and Evidence.
- Projects are arranged as three assembly workstations with truthful placeholder content; no invented case-study outcomes were introduced.
- Motion is functional and scroll-driven: module assembly, rail travel, evidence scanning, and final lock-up.
- Mobile removes sticky choreography and presents stable, readable stacked content without horizontal overflow.
- The final status remains `STRUCTURE READY · CONTENT IN REVIEW`, avoiding a false claim that unfinished project content is complete.
- `npm run lint`, `npm run build`, and `git diff --check` pass.

## Final result

passed
