---
name: visual-regression-cypress
description: 'Require image-based Cypress component snapshots for significant frontend visual changes. Use when changing React components, layout, styling, design tokens, responsive behavior, animations, or any other user-visible UI.'
argument-hint: '[component or visual change to verify]'
user-invocable: true
---

# Visual Regression Cypress

Use this workflow for every significant visual frontend change. A change is significant when it can alter layout, spacing, typography, color, imagery, responsive behavior, animation, interaction states, or component structure visible to users.

## Required workflow

1. Identify the changed React component and its important visual states.
2. Add or update a spec under `cypress/component/**/*.cy.{js,jsx}`.
3. Mount the component through the shared Cypress component support file.
4. Assert behavior with normal Cypress assertions, then call `.matchImage()` on the smallest stable visual surface that proves the change.
5. Keep snapshots deterministic: freeze or stub dynamic data, avoid arbitrary waits, and use stable viewport dimensions when responsive behavior matters.
6. Run `npm run cy:component` before completing the change.
7. If the intended appearance changed, review the diff and deliberately regenerate baselines with `npm run cy:component:update-snapshots`. Never update snapshots merely to make a failing test pass.

## Snapshot rules

- Every significant visual change must have at least one image snapshot.
- Prefer one focused snapshot per meaningful state over a full-page screenshot.
- Cover meaningful variants and states such as hover, focus, disabled, open, selected, mobile, and desktop when they are affected.
- Keep `maxDiffThreshold: 0` unless rendering noise is demonstrated and documented in the test.
- Do not set `createMissingImages` or `updateImages` to `true` in ordinary test runs. This repository exposes both only when `UPDATE_VISUAL_SNAPSHOTS=true`.
- Treat baseline images as reviewed test artifacts and commit them with the spec.

## Commands

```bash
# Run component snapshots in comparison mode
npm run cy:component

# Open the Cypress component runner
npm run cy:component:open

# Intentionally create or update reviewed baselines
npm run cy:component:update-snapshots
```

The configured plugin is `@pixsame/cypress-plugin-visual-regression-diff`; use its `matchImage()` command rather than ad-hoc screenshot assertions.
