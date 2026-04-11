# Dinh Doc Lap - Sample Style Workflow (matched to Lab2_sample)

## A. Structure Pattern (same style as Lab2_sample)
- `phase1_base`: core mass first
  - site
  - building floors
  - roof
- `phase2_modules`: detailed modules after base is stable
  - landscape
  - facade
  - points
  - details (reserved)

Runtime source now uses:
- `data/dinh_doc_lap/20_integration/geojson/phase1_base/*`
- `data/dinh_doc_lap/20_integration/geojson/phase2_modules/*`

## B. Team Split (5 members, team lead integrates last)
1. Member 01 - Site/Base boundary
- Work folder: `10_member_work/member_01_site_boundary`
- Output to integration:
  - `phase1_base/site/site_boundary.geojson`

2. Member 02 - Landscape module
- Work folder: `10_member_work/member_02_landscape_transport`
- Output to integration:
  - `phase2_modules/landscape/driveways_water_green.geojson`

3. Member 03 - Building mass module
- Work folder: `10_member_work/member_03_building_mass`
- Output to integration:
  - `phase1_base/building/main_floor_0.geojson`
  - `phase1_base/building/main_floor_1.geojson`
  - `phase1_base/building/main_floor_2.geojson`

4. Member 04 - Roof + Facade module
- Work folder: `10_member_work/member_04_roof_facade`
- Output to integration:
  - `phase1_base/roof/roof_main.geojson`
  - `phase1_base/roof/roof_secondary.geojson`
  - `phase2_modules/facade/facade_outer.geojson`

5. Member 05 - Points + QA metadata
- Work folder: `10_member_work/member_05_points_metadata`
- Output to integration:
  - `phase2_modules/points/entrance_points.geojson`
- QA duty:
  - check required fields
  - check duplicate `id`
  - check status before handoff

Team lead (you): final integration only
- verify merge order by phase
- tune colors/offset in `layers.config.json`
- run demo and export in `30_exports`

## C. Build Steps (to get sample-like result)
1. Build base context (phase1/site)
2. Build floor masses (phase1/building)
3. Build roof layers (phase1/roof)
4. Freeze phase1 and review topology
5. Add modules (phase2/landscape, facade, points)
6. Final visual tune (color, offset, popup)
7. Demo capture and submission package

## D. Merge Order (strict)
1. site_boundary
2. main_floor_0 -> main_floor_1 -> main_floor_2
3. roof_main -> roof_secondary
4. landscape
5. facade
6. points

## E. Handoff Checklist per member
- GeoJSON valid FeatureCollection
- Required properties present
- group and owner correct
- status = review before sending to team lead
- no duplicated id across project
