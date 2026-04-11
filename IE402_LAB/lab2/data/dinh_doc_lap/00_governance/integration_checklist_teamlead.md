# Integration Checklist - Team Lead

## Phase 1 gate (base lock)
1. `phase1_base/site/site_boundary.geojson` valid and closed polygon.
2. `phase1_base/building/*` heights are consistent by floor.
3. `phase1_base/roof/*` aligned to building footprint.
4. No duplicate `id` in phase1.

## Phase 2 gate (module lock)
1. `phase2_modules/landscape/*` does not overlap building interior.
2. `phase2_modules/facade/*` offset/height visually correct.
3. `phase2_modules/points/*` points snapped to entrances.
4. No duplicate `id` across full project.

## Final runtime gate
1. `layers.config.json` phase order = [phase1_base, phase2_modules].
2. `script.js` loads layers sorted by phase.
3. Scene opens without console errors.
4. Export screenshots + final geojson package to `30_exports`.
