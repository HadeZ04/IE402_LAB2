# Team Split Level 3 - Detailed (5 Members, Team Lead Merge Only)

## Rules
- Each member edits only files in their own `10_member_work/member_xx_*` folder.
- Team lead only copies/merges into `20_integration/geojson/...`.
- Required fields: id, name, group, height (polygon), source, owner, status, phase, module.

## Member 01 - Site Boundary Package
Source folder:
- data/dinh_doc_lap/10_member_work/member_01_site_boundary
Files to complete:
- site_boundary.geojson
- perimeter_wall.geojson
- front_plaza.geojson
- rear_court.geojson
- gate_zones.geojson
Integration targets:
- data/dinh_doc_lap/20_integration/geojson/phase1_base/site/* (same file names)

## Member 02 - Landscape & Transport Package
Source folder:
- data/dinh_doc_lap/10_member_work/member_02_landscape_transport
Files to complete:
- driveways_main.geojson
- driveways_secondary.geojson
- parking_zones.geojson
- green_front.geojson
- green_side.geojson
- water_features.geojson
Integration targets:
- data/dinh_doc_lap/20_integration/geojson/phase2_modules/landscape/*

## Member 03 - Building Mass Package
Source folder:
- data/dinh_doc_lap/10_member_work/member_03_building_mass
Files to complete:
- floor0_core.geojson
- floor0_wing_east.geojson
- floor0_wing_west.geojson
- floor1_core.geojson
- floor1_wing_east.geojson
- floor1_wing_west.geojson
- floor2_core.geojson
- floor2_wing_east.geojson
- floor2_wing_west.geojson
- stair_blocks.geojson
Integration targets:
- data/dinh_doc_lap/20_integration/geojson/phase1_base/building/*

## Member 04 - Roof & Facade Package
Source folder:
- data/dinh_doc_lap/10_member_work/member_04_roof_facade
Files to complete:
- roof_main_center.geojson
- roof_main_east.geojson
- roof_main_west.geojson
- roof_secondary_front.geojson
- roof_secondary_rear.geojson
- facade_north.geojson
- facade_south.geojson
- facade_east.geojson
- facade_west.geojson
- colonnade_front.geojson
Integration targets:
- data/dinh_doc_lap/20_integration/geojson/phase1_base/roof/* (roof*)
- data/dinh_doc_lap/20_integration/geojson/phase2_modules/facade/* (facade* + colonnade*)

## Member 05 - Points & QA Package
Source folder:
- data/dinh_doc_lap/10_member_work/member_05_points_metadata
Files to complete:
- entrance_main_points.geojson
- entrance_side_points.geojson
- poi_monument_points.geojson
- poi_service_points.geojson
- qa_report.md
Integration targets:
- data/dinh_doc_lap/20_integration/geojson/phase2_modules/points/*
QA required in qa_report.md:
- Duplicate ID check across all member deliverables
- Missing required fields check
- Geometry validity check

## Team Lead Merge Order 
1. phase1_base/site
2. phase1_base/building
3. phase1_base/roof
4. phase2_modules/landscape
5. phase2_modules/facade
6. phase2_modules/points
7. Run final visual check in browser
