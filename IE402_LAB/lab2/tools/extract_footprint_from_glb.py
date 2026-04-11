import argparse
import json
from pathlib import Path

import numpy as np
import trimesh
from shapely.geometry import MultiPoint, mapping


def load_vertices_xy(glb_path: Path) -> np.ndarray:
    scene_or_mesh = trimesh.load(glb_path, force="scene")

    vertices = []
    if isinstance(scene_or_mesh, trimesh.Scene):
        for geom in scene_or_mesh.geometry.values():
            if not isinstance(geom, trimesh.Trimesh):
                continue
            if geom.vertices is None or len(geom.vertices) == 0:
                continue
            vertices.append(np.asarray(geom.vertices))
    elif isinstance(scene_or_mesh, trimesh.Trimesh):
        vertices.append(np.asarray(scene_or_mesh.vertices))

    if not vertices:
        raise RuntimeError("No mesh vertices found in GLB")

    all_vertices = np.vstack(vertices)
    return all_vertices[:, :2]


def to_geojson_polygon(xy: np.ndarray, simplify_tolerance: float) -> dict:
    points = [tuple(p) for p in xy]
    hull = MultiPoint(points).convex_hull
    if simplify_tolerance > 0:
        hull = hull.simplify(simplify_tolerance, preserve_topology=True)

    if hull.geom_type != "Polygon":
        raise RuntimeError(f"Hull is not a polygon: {hull.geom_type}")

    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "id": "GLB_FOOTPRINT_01",
                    "name": "Extracted footprint (local coords)",
                    "group": "building",
                    "height": 10,
                    "source": "trimesh_from_glb",
                    "owner": "tool",
                    "status": "draft",
                    "note": "Coordinates are local XY from GLB, not lon/lat. Georeference in QGIS."
                },
                "geometry": mapping(hull)
            }
        ]
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract a rough footprint polygon from a GLB file.")
    parser.add_argument("--input", required=True, help="Path to input GLB")
    parser.add_argument("--output", required=True, help="Path to output GeoJSON")
    parser.add_argument(
        "--simplify",
        type=float,
        default=0.0,
        help="Simplify tolerance in local GLB units (default: 0)",
    )
    args = parser.parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    xy = load_vertices_xy(input_path)
    geojson = to_geojson_polygon(xy, args.simplify)

    with output_path.open("w", encoding="utf-8") as f:
        json.dump(geojson, f, ensure_ascii=False, indent=2)

    min_xy = xy.min(axis=0)
    max_xy = xy.max(axis=0)
    size_xy = max_xy - min_xy

    print(f"Input: {input_path}")
    print(f"Output: {output_path}")
    print(f"Vertices: {xy.shape[0]}")
    print(f"BBox min XY: {min_xy.tolist()}")
    print(f"BBox max XY: {max_xy.tolist()}")
    print(f"BBox size XY: {size_xy.tolist()}")


if __name__ == "__main__":
    main()
