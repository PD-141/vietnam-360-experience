# Vietnam 360 Experience V3

## Trái Đất 3D
Trang chủ dùng Three.js + OrbitControls. Trái Đất tự quay, kéo chuột/cảm ứng để xoay, cuộn/chụm để zoom; sau khi thả sẽ tự quay lại.

## 3DVista
### Upload trực tiếp để preview/lưu trên thiết bị
Quản lý -> Upload Tour 3DVista -> chọn nguyên thư mục **Web Export**. Website lưu toàn bộ file vào IndexedDB và Service Worker phục vụ lại các đường dẫn tương đối để tour chạy trong iframe.

Lưu ý: dữ liệu upload trực tiếp là cục bộ trên trình duyệt đó. Xóa dữ liệu trình duyệt sẽ mất tour.

### Public cho mọi người
3DVista -> Publish -> Web/Mobile. Copy nguyên output vào `tours/ten-tour/`, giữ `index.html`/`index.htm` và toàn bộ assets. Có thể thêm `tour.json`:
`{"name":"Đại Nội Huế","description":"Mô tả"}`
Sau đó chạy `npm run build:tours`, commit và deploy.

## Vercel Environment Variables
- `GEMINI_API_KEY`
- `RESEND_API_KEY`
- `SUPPORT_FROM_EMAIL` (sender/domain đã xác minh, khuyến nghị)

Email hỗ trợ nhận tại `tongduy414@gmail.com`.
