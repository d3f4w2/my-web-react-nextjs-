# Homepage second-version cinematic pass — design QA

## Scope

- Baseline: second homepage version at commit `73982ba`
- Desktop viewport: 1440 × 1000
- Mobile viewport: 390 × 844
- States reviewed: hero, project feature cut, time log, final frame, reduced motion

## Cinematic treatment

- Hero: camera boot reveal, REC/roll metadata, 16:9 aperture bars, viewfinder corners, focus sweep, restrained grain and vignette.
- Projects: horizontal push and clip transitions, feature-cut slate, scene/take counters, focus-settle animation.
- Time log: film perforation rail, roll metadata, sequential frame labels.
- Footer: final-frame metadata, held end card, subtle closing-gate treatment.
- Content, hierarchy, mechanical system visual, project data, and contact details remain from the second version.

## Verification evidence

- Desktop: `output/playwright/cinematic-hero-desktop.png`, `cinematic-projects-desktop.png`, `cinematic-time-log-desktop.png`, `cinematic-footer-desktop.png`
- Mobile: `output/playwright/cinematic-hero-mobile.png`, `cinematic-projects-mobile.png`, `cinematic-time-log-mobile.png`, `cinematic-footer-mobile.png`
- Film intro: `output/playwright/film-intro-countdown-desktop.png`, `film-intro-slate-desktop.png`, `film-intro-gate-desktop.png`, `film-intro-reveal-desktop.png`, `film-intro-countdown-mobile.png`
- Mobile document width equals viewport width: 390 px; no horizontal overflow.
- Reduced-motion mode keeps the hero visible and disables decorative aperture/focus animation.
- Browser pass reports zero console errors. The three production-only CSS preload warnings are emitted by the local Next.js start server and do not affect rendering.
- `npm run lint`, `npm run build`, and `git diff --check` pass.

## Film countdown interaction QA

- A fresh session completes the full countdown, removes the overlay, writes `personal-agent-lab:film-intro:v1=complete`, and restores page scrolling.
- Reloading in the same session does not replay the overlay.
- The visible skip control and Escape both dismiss the overlay, persist the session flag, and restore scrolling.
- Reduced motion bypasses the countdown and persists the session flag.
- Desktop and 390 × 844 mobile captures show the countdown, slate, and reveal without horizontal overflow.

## Hero assembly stage QA

- Evidence: `output/playwright/hero-assembly-mid-desktop.png`, `hero-assembly-complete-desktop.png`, `hero-assembly-cycle-desktop.png`, `hero-assembly-handoff-desktop.png`, and `hero-assembly-mobile.png`.
- The film intro now explicitly releases the Hero timeline; title and apparatus motion no longer finish behind the countdown overlay.
- The frame and rails appear first, four modules enter from their physical directions, connection paths draw in, and the Agent core locks last.
- After assembly, the active system cycles through SYSTEM, MEMORY, TOOLS, and RELIABILITY. Pointer and keyboard focus take control of the same state and signal path.
- The Hero apparatus compresses, rotates slightly, and transfers toward the project stage during scroll instead of only fading vertically.
- The 390 × 844 completed Hero has a document width of 390 px and keeps all primary copy readable before the apparatus.
- Reduced motion bypasses the intro and automated inspection while retaining the complete Hero content.

## Final result

passed
