# Post-Punk Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the restrained homepage motion with the selected post-punk mechanical assembly experience while preserving truthful content, accessibility, responsive behavior, and existing Next.js conventions.

**Architecture:** Keep `app/page.tsx` as a Server Component and isolate scroll-driven motion inside focused Client Components. Use real generated raster assets for the mechanical assembly, project production line, and evidence-log machine; layer semantic HTML text and controls over those assets. Reuse the existing Motion provider, data model, design tokens, header, and contact data.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, CSS Modules, Motion 12, `next/image`.

---

### Task 1: Preserve and integrate visual assets

**Files:**
- Create: `public/assets/homepage/agent-assembly.*`
- Create: `public/assets/homepage/project-workstations.*`
- Create: `public/assets/homepage/evidence-log-machine.*`

**Steps:**
1. Generate each asset from the selected reference with full safe margins and no embedded project copy.
2. Inspect the output at original resolution for crop, text artifacts, unwanted neon, and inconsistent material.
3. Record intrinsic dimensions and use them in `next/image`.
4. Confirm the files are available under `/assets/homepage/`.

### Task 2: Rebuild the Hero as a boot sequence

**Files:**
- Modify: `src/components/home/hero-section.tsx`
- Modify: `src/components/home/hero-section.module.css`

**Steps:**
1. Replace the CSS-drawn harness with the generated assembly image.
2. Preserve the title and truth-constrained introduction as semantic HTML.
3. Add scroll-driven title lock, module label docking, signal progress, and stable running state.
4. Keep module labels keyboard-focusable and map focus/hover to a highlighted state.
5. Add a non-sticky, already-assembled reduced-motion and mobile layout.
6. Run `npm run lint` and expect no component or accessibility errors.

### Task 3: Replace project fades with one mechanical production line

**Files:**
- Modify: `src/components/home/featured-projects-section.tsx`
- Modify: `src/components/home/featured-projects-section.module.css`

**Steps:**
1. Replace three absolute full-screen scenes with a single persistent production-line chassis.
2. Place the three truthful project summaries in three work-order stations.
3. Move a real assembly asset between station stops as scroll progress crosses each project interval.
4. Animate each active work order, media aperture, rail signal, and transfer state independently.
5. Keep titles, roles, statuses, tags, and links readable at 1440px without cropping.
6. Stack workstations in normal document flow below the desktop breakpoint and for reduced motion.
7. Run `npm run lint` and expect no TypeScript or accessibility errors.

### Task 4: Build the live evidence-log chronology

**Files:**
- Modify: `src/components/home/experience-section.tsx`
- Modify: `src/components/home/experience-section.module.css`

**Steps:**
1. Convert the section into a Client Component with section scroll progress.
2. Use the generated log-machine image as the structural hardware layer.
3. Render existing experience data as semantic records on the warm-paper surface.
4. Drive paper travel, scanner position, active record state, and confirmation line from scroll.
5. Do not invent dates, evidence IDs, QR codes, organizations, or additional rows.
6. Provide a static readable list for reduced motion and narrow screens.
7. Run `npm run lint` and expect no TypeScript or accessibility errors.

### Task 5: Turn the global footer into the convergent system finale

**Files:**
- Modify: `src/components/layout/site-footer.tsx`
- Modify: `src/components/layout/site-footer.module.css`

**Steps:**
1. Reuse the Agent assembly asset as the stable final system.
2. Replace the repeated giant-type ending with concise system conclusions and truthful status.
3. Animate evidence arrival, module tightening, boundary confirmation, and contact activation.
4. Preserve working Email, GitHub, WeChat details, QR disclosure, and return-to-top link.
5. Use `STRUCTURE READY / CONTENT IN REVIEW` while project content remains incomplete.
6. Provide static final state under reduced motion.
7. Run `npm run lint` and expect no TypeScript or accessibility errors.

### Task 6: Align the global system rail and tokens

**Files:**
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/site-header.module.css`
- Modify: `src/app/globals.css`

**Steps:**
1. Restyle the header as a thin system rail with brand, mode, status, and existing navigation.
2. Remove glass-like blur and rounded presentation from the homepage frame.
3. Add shared post-punk surface, measurement, motion, and safe-area tokens only where reused.
4. Ensure focus indicators and skip link remain visible.
5. Run `npm run lint` and expect no lint errors.

### Task 7: Production verification and design QA

**Files:**
- Create: `design-qa.md`
- Create: `output/implementation-qa/*`

**Steps:**
1. Run `npm run lint`; expect exit code 0.
2. Run `npm run build`; expect exit code 0.
3. Start the local Next.js app on an available fixed port.
4. Capture the homepage at `1440×900`, `1440×1024`, `1024×768`, and `390×844` with the in-app browser.
5. Test navigation, project links, keyboard focus, WeChat disclosure, return-to-top, and reduced motion.
6. Check browser console for runtime errors.
7. Compare the selected reference and rendered captures in one combined visual artifact.
8. Fix all P0/P1/P2 findings and repeat capture/comparison.
9. Save `design-qa.md` with `final result: passed` before handoff.
