# Member 01 - Site Boundary (Level 3)

Files:
- site_boundary.geojson: polygon ranh khuon vien tong
- perimeter_wall.geojson: tuong bao quanh
- front_plaza.geojson: san truoc
- rear_court.geojson: san sau
- gate_zones.geojson: vung cong ra vao

Required group values:
- site

Done criteria:
1. Polygon closed and no self-intersection.
2. id unique (prefix ST_).
3. owner = member_01, status = review.
4. Ready to copy into phase1_base/site.
