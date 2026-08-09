---
name: design-md-collection
description: Compare curated DESIGN.md references and derive an original, project-specific design direction. Use when choosing a visual language, reviewing design-system options, drafting or revising DESIGN.md, or translating brand references into UI rules without copying a source site.
---

# Design MD Collection

Use the vendored reference systems to sharpen design decisions, not to clone a brand.

## Workflow

1. Read the repository instructions and existing design documents first. Existing briefs, accepted specifications, truthfulness rules, and accessibility requirements take precedence over this collection.
2. Inspect `references/styles/` and shortlist no more than three relevant reference families. Match the product, audience, information density, and interaction model before matching visual taste.
3. For each shortlisted family, read its `DESIGN.md` and companion `README.md` completely. Compare hierarchy, grid, typography, color roles, shapes, components, responsive behavior, motion implications, and accessibility risks.
4. Present distinct directions with trade-offs. State which principles come from each reference and what must remain original to the project.
5. Wait for the user's selection before changing production UI or replacing an existing `DESIGN.md`.
6. After selection, synthesize project-owned rules and tokens. Reconcile them with the existing code instead of copying a reference file verbatim.

## Guardrails

- Use at most two reference families in a final direction. Give each a clear role, such as editorial hierarchy from one and interaction density from another.
- Do not copy logos, trademarks, product copy, illustrations, distinctive page compositions, or proprietary assets.
- Do not import a reference palette wholesale when the project already has brand colors.
- Do not replace known project facts with invented metrics, clients, awards, dates, or evidence.
- Preserve semantic HTML, keyboard access, visible focus, WCAG AA contrast, reduced-motion behavior, and responsive readability.
- Prefer a project-specific `DESIGN.md` whose values are traceable to the actual codebase and approved direction.

## Reference Routing

Each directory under `references/styles/<name>/` contains a `DESIGN.md` and usually a `README.md`. Search directory names first, then load only the shortlisted references. The collection is vendored from `VoltAgent/awesome-design-md` commit `8147538b4226ae41e2487a9179e3bcc1f68e8554` under its included MIT license.
