# Member 03 - Building Mass (Level 3)

Files:
- floor0_core.geojson 
<!-- Nhìn từ đường Nam Kỳ Khởi Nghĩa -> Điểm 1 (góc trên trái) -> Điểm 2 (góc trên phải) -> Điểm 3 (gấp khúc đầu tiên bên phải) -> Điểm 4 (gấp khúc thứ hai bên phải) -> Điểm 5 (kéo dài hết đến đường Nam Kỳ Khởi Nghĩa) -> Điểm 6 (kéo ngang qua trái) -> Điểm 7 (kéo dài đến điểm gấp khúc đầu tiên bên trái) -> Điểm 8 (gấp khúc thứ hai bên trái) -> Điểm 9 (trở về điểm 1 góc trên trái) -->

- floor0_wing_east.geojson
<!-- Nhin từ đường Nam Kỳ Khởi nghĩa -> Điểm 1 (trùng với điểm 6 của floor0_core) -> Điểm 2 (góc dưới cùng bên trái) -> Điểm 3 (Kéo thẳng lên gấp khúc thứ nhất) -> Điểm 4 (kéo qua phải gấp khúc thứ 2) -> Điểm 5 (kéo xuống dưới gấp khúc thứ 3) -> Điểm 6 (kéo qua phải gấp khúc thứ 4) -> Điểm 7 (trở về điểm 1 trùng với điểm 6 của floor0_core) -->

- floor0_wing_west.geojson
<!-- Nhìn từ đường Nam Kỳ Khởi Nghĩa -> Điểm 1 (trùng với điểm 5 của floor0_core) -> Điểm 2 (góc dưới cùng bên phải) -> Điểm 3 (kéo thẳng lên gấp khúc thứ nhất) -> Điểm 4 (kéo qua trái gấp khúc thứ 2) -> Điểm 5 (kéo xuống dưới gấp khúc thứ 3) -> Điểm 6 (kéo qua trái gấp khúc thứ 4) -> Điểm 7 (trở về điểm 1 trùng với điểm 5 của floor0_core) -->

- floor1_core.geojson
- floor1_wing_east.geojson
- floor1_wing_west.geojson
- floor2_core.geojson
- floor2_wing_east.geojson
- floor2_wing_west.geojson
- stair_blocks.geojson

Required group values:
- building

Done criteria:
1. Base footprint cac tang can khop nhau.
2. Height hop ly theo tang.
3. id unique (prefix MB_).
4. owner = member_03, status = review.
5. Ready to copy into phase1_base/building.
