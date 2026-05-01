# Member 01 – Site Boundary (Level 3)

## 📁 Danh sách file
- `site_boundary.geojson`: Đa giác ranh giới tổng thể khuôn viên Dinh Độc Lập  
- `perimeter_wall.geojson`: Đa giác tường bao quanh khuôn viên  
- `front_plaza.geojson`: Đa giác khu vực sân trước tòa nhà chính  
- `rear_court.geojson`: Đa giác khu vực sân sau tòa nhà chính  
- `gate_zones.geojson`: Các vùng cổng ra vào (Polygon / MultiPolygon)  
- `campus_gate_buffer.geojson`: Vùng buffer xung quanh các cổng  

## ⚙️ Quy tắc thuộc tính (properties)
- `id`: duy nhất, bắt đầu bằng tiền tố `ST_`  
- `name`: tên mô tả đối tượng  
- `group`: phân loại đối tượng  
   Ví dụ: `site_boundary`, `wall`, `plaza`, `court`, `gate_buffer`  
- `owner`: `member_01`  
- `status`: `review`  
- `source`: `digitized`  
- `phase`: `lab2`  
- `module`: `site_boundary`  

## 📐 Quy tắc hình học
- Tọa độ theo chuẩn GeoJSON: `[longitude, latitude]`  
- Polygon phải **khép kín** (tọa độ đầu = cuối)  
- Không self-intersection  
- Hỗ trợ `Polygon` và `MultiPolygon`  

## ✅ Tiêu chí hoàn thành (Done Criteria)
- `id` duy nhất, đúng quy tắc tiền tố `ST_`  
- Đầy đủ thuộc tính  
- Hình học hợp lệ  
- Đã kiểm tra trên **geojson.io** hoặc **QGIS**  
- Sẵn sàng copy vào `phase1_base/site`  

## 🔍 Hướng dẫn kiểm tra
- Mở file `.geojson` bằng **geojson.io** hoặc **QGIS**  
- Kiểm tra vị trí, hình dạng  
- Kiểm tra `properties` từng feature  

## 📝 Ghi chú
- Mỗi cổng là một feature riêng  
- Có thể dùng `MultiPolygon` nếu cần  
- Kiểm tra lại toàn bộ dữ liệu trước khi nộp  