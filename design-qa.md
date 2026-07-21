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

## Editorial Agent core QA

- The previous dashboard-like apparatus has been replaced by a single high-contrast Agent monolith, four sparse coordinate signals, and restrained orbital geometry.
- The film intro explicitly releases the Hero timeline; the title, coordinate paths, aperture, and core reveal after the countdown instead of completing behind it.
- After reveal, the active route cycles through SYSTEM, MEMORY, TOOLS, and RELIABILITY. Pointer movement adds shallow 3D focus, while pointer and keyboard focus on the direction list take manual control of the same signal state.
- The Agent monolith uses a warm-paper face, orange structural backplate, and black aperture so the primary object remains legible against the dark stage. Orange is still reserved for the headline, active route, structural backplate, and state signal.
- During scroll, the copy eases left while the core gains scale, rotation, and lateral drift before handing off to the project scene.
- Desktop verification at 1440 × 900 reports a 1425 px layout width inside a 1440 px viewport, with no horizontal overflow and zero console errors. The settled Agent core is visible without relying on its animated signal state.
- The 390 × 844 mobile layout keeps the complete headline and direction list ahead of the enlarged core, with a 375 px layout width inside the scrollbar-adjusted 390 px viewport and no horizontal overflow.
- Reduced-motion CSS removes sticky depth, automated transitions, and decorative animation while preserving the complete static composition.

## Cinematic mechanical shot QA

- Each automatic or manually selected system state now triggers a complete shot: the active route charges, the oversized shot number hard-cuts behind the apparatus, rear plates shift on separate depth rails, the paper face enters from a direction-specific axis, the aperture locks, and a light gate crosses the core.
- SYSTEM enters from the left, MEMORY from the right, TOOLS from below, and RELIABILITY from above, so motion communicates the source and meaning of the state change.
- The sequence settles into a readable hold instead of continuously floating. The next automatic cut occurs after 3.6 seconds; pointer or keyboard inspection pauses automatic cycling.
- Scroll progress now creates a controlled camera push before the apparatus rotates and transfers toward the project scene.
- Desktop verification at 1440 × 900 captured the settled state, a manual mid-cut, an automatic state change, and the scroll-driven camera push with no horizontal overflow.
- Mobile verification at 390 × 844 preserves the completed core below the primary copy with no horizontal overflow. Reduced motion removes the light gate, route travel, plate transitions, focus lock, and continuous orbit.
- Browser runtime verification reports zero warnings or errors; lint and the production build pass.

## Cinematic chassis style QA

- The warm-paper face is now an inset film bay inside a graphite outer chassis instead of defining the full silhouette, removing the oversized folder appearance seen in the supplied wide screenshot.
- The assembly uses a near-square camera-module proportion, a thicker black boundary, an orange rear lock plate, a side rail, and a live frame counter while retaining the legible black Agent aperture.
- Headline scale, description spacing, list spacing, and project-link spacing were tightened so all four system directions and the project entry fit in the 1440 × 900 Hero viewport.
- Verified at 1440 × 900, a 2048 × 1024 wide viewport, and 390 × 844 mobile with no horizontal overflow.
- Automatic state motion remains active after the restyle, moving from TOOLS to RELIABILITY during runtime verification with zero console warnings or errors.

## Evidence reel transition QA

- The project stage now hands off through two matte-black film gates instead of cutting directly to a warm-paper table. An orange seam closes, a numbered evidence packet crosses the frame, and the paper chronology opens from the same center axis.
- The time log is a 210svh scroll-driven scanner scene: the warm-paper tape advances between metal rollers while a fixed evidence scanner locates, scans, and records the first frame, then reviews and protects the second.
- Only the two real placeholder records are rendered. Their original period, title, organization boundary, and summary remain unchanged; states use honest `IN PROGRESS` and `CONTENT REVIEW` labels.
- Desktop verification at 1440 × 900 covers the dark gate, evidence-packet handoff, first scan, second scan, and the final handoff into the footer.
- Mobile verification at 390 × 844 removes the long sticky mechanism and presents both records as readable perforated film frames with no horizontal overflow.
- Reduced motion removes the gates, scanner, rollers, tape travel, and sticky timeline while preserving the complete records in normal document order.

## Final result

passed
