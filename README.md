# Vietnam 360 Experience

Website tham quan panorama 360, quản lý địa điểm, kho ảnh, ChatAI Gemini và gửi hỗ trợ.

## Chạy local
Mở bằng local web server (ví dụ VS Code Live Server). Viewer dùng Pannellum qua CDN.

## Deploy GitHub Pages
Push toàn bộ project lên GitHub và bật Pages. Các trang tĩnh + panorama IndexedDB hoạt động. `/api/chat` KHÔNG hoạt động trên GitHub Pages vì Pages không có serverless backend.

## Deploy Vercel (khuyến nghị để ChatAI hoạt động)
1. Import repository GitHub vào Vercel.
2. Project Settings > Environment Variables.
3. Tạo biến `GEMINI_API_KEY` và dán Gemini API key của bạn.
4. Redeploy.
5. Không đưa API key vào `js/app.js`, HTML hoặc commit lên GitHub.

## Lưu dữ liệu
Địa điểm/ảnh upload từ trang quản lý dùng IndexedDB, nên chỉ tồn tại trong trình duyệt/thiết bị đã upload. Thư mục `assets/panoramas/` dành cho ảnh được commit cố định.

Để dữ liệu upload dùng chung giữa mọi người và lưu thật trên server, cần bổ sung backend/storage như Firebase Storage + Firestore, Supabase Storage hoặc Cloudinary + database.
