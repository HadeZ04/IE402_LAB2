# GeoJSON Schema (Team Standard)
Required properties for polygon features:
- id: string, unique globally
- name: string
- group: site | landscape | building | roof | facade
- height: number (meters)
- source: osm | digitized | field
- owner: member_01..member_05
- status: draft | review | final

Required properties for point features:
- id, name, group, source, owner, status

Coordinate rules:
- CRS: EPSG:4326
- coordinate order: [longitude, latitude]
- polygon must be closed
