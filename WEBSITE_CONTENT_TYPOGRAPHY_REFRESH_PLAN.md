# Website Content And Typography Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Replace placeholder portfolio content with verified internship, open-source, and personal project evidence while rebuilding the site's Chinese typography system.

**Architecture:** Keep the existing Next.js App Router and CSS Modules structure. Add public portfolio media derived from the supplied demo videos, extend the typed project data, and render the same verified content on the homepage and projects page. Establish semantic display, body, and data font tokens in the root stylesheet so every route shares one hierarchy.

**Tech Stack:** Next.js 16, React 19, Motion, CSS Modules, Fontsource Noto Sans SC and Noto Serif SC, FFmpeg.

---

### Task 1: Prepare public evidence assets

**Files:**
- Create: `public/assets/work/price-comparison-demo.webm`
- Create: `public/assets/work/coupon-demo.webm`
- Create: `public/assets/work/price-comparison-poster.webp`
- Create: `public/assets/work/coupon-poster.webp`

1. Cut short muted clips from the supplied product demonstrations.
2. Export representative WebP posters with no private account data.
3. Verify dimensions, duration, and file sizes.

### Task 2: Replace the typography system

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: homepage and collection CSS modules.

1. Load Noto Sans SC Variable and Noto Serif SC Variable.
2. Add semantic `--font-display`, `--font-body`, and `--font-data` roles.
3. Cap display text at 6rem, tracking at -0.04em, and ordinary body text at 1rem.
4. Retune line height and reading measure on dark and light surfaces.

### Task 3: Publish verified project content

**Files:**
- Modify: `src/data/home.ts`
- Modify: `src/data/open-source.ts`
- Modify: homepage project components.
- Modify: `src/app/projects/page.tsx`
- Modify: project components and CSS modules.

1. Replace the restricted internship placeholder with Wonderable AI product work.
2. Show price comparison and coupon execution as two verified feature demonstrations.
3. Add Mastra PR #20346 as the third externally merged contribution.
4. Distinguish merged contributions from open or superseded technical records.

### Task 4: Align all routes

**Files:**
- Modify: `src/app/collection-page.module.css`
- Modify: blog and shared layout components where typography roles differ.

1. Remove obsolete industrial grids, oversized type, section counters, and decorative eyebrow labels.
2. Keep navigation, article cards, project evidence, and footer hierarchy consistent.
3. Verify 390px, 768px, and 1440px layouts.

### Task 5: Verify

1. Run targeted ESLint and `npm run build`.
2. Run the Impeccable detector once on changed UI targets.
3. Inspect desktop and mobile screenshots in one browser batch.
4. Fix findings in one pass and confirm ordinary and reduced-motion modes.
