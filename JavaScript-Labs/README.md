# JavaScript Labs

Portfolio và mã nguồn thực hành JavaScript của **Lê Viết Chí Hưng** (MSSV **31241027755**), lớp học phần **26C1INF50902702 - S5**, môn Phát triển ứng dụng thương mại điện tử.

## Mục tiêu và tiến độ

Ba Lab lần lượt thực hành nền tảng ngôn ngữ JavaScript, truy cập DOM và xử lý sự kiện, rồi dùng jQuery cho selectors, thao tác DOM, animation và yêu cầu GET. Trang chủ tóm tắt lộ trình học và dẫn đến **29 Exercise đã hoàn thiện**, mỗi bài có trang chạy độc lập và file mã nguồn riêng.

## Cấu trúc

```text
JavaScript-Labs/
├── index.html                 # Portfolio và trang điều hướng
├── css/
│   ├── style.css              # Giao diện trang chủ
│   └── lab-work.css           # Giao diện dùng chung cho ba Lab
├── js/main.js                 # Điều hướng di động và hiệu ứng vào trang
├── exercises.json             # Danh mục Exercise cho báo cáo/kiểm tra
├── Lab08/
│   ├── index.html
│   ├── Exercise01/ ... Exercise11/
│   ├── images/                # Starter assets
│   └── flags/                 # Starter assets
├── Lab09/
│   ├── index.html
│   ├── Exercise01/ ... Exercise08/
│   ├── images/                # Starter assets
│   └── flags/                 # Starter assets
└── Lab10/
    ├── index.html
    ├── Exercise01/ ... Exercise10/
    ├── images/                # Starter assets
    ├── js/jquery-3.1.1.min.js # jQuery local fallback
    └── data/cities.json       # Dữ liệu dự phòng cho GET demo
```

Mỗi thư mục `ExerciseNN` có `index.html` và `app.js`, nên có thể mở trực tiếp hoặc truy cập qua trang Lab tương ứng. `Lab10` dùng CDN HTTPS trước và bản jQuery kèm repository làm phương án dự phòng. Hai ví dụ GET ghi rõ nguồn dữ liệu và dùng danh sách JSON cục bộ khi dịch vụ ngoài không phản hồi. Exercise 10.9–10.10 cần một máy chủ tĩnh cục bộ hoặc GitHub Pages để trình duyệt cho phép đọc JSON bằng GET.

## Truy cập

- Trang chủ: `index.html`
- Lab 08: `Lab08/index.html`
- Lab 09: `Lab09/index.html`
- Lab 10: `Lab10/index.html`
- Repository môn học: [github.com/hungle-31241027755/phat-trien-ung-dung-tmdt](https://github.com/hungle-31241027755/phat-trien-ung-dung-tmdt)
- GitHub cá nhân: [github.com/hungle-31241027755](https://github.com/hungle-31241027755)
- Lớp học phần: **26C1INF50902702 - S5**
- GitHub Pages: [hungle-31241027755.github.io/phat-trien-ung-dung-tmdt/JavaScript-Labs/](https://hungle-31241027755.github.io/phat-trien-ung-dung-tmdt/JavaScript-Labs/)

## Chạy tại máy

Mở `index.html` trong trình duyệt. Các trang bài tập là HTML/CSS/JavaScript tĩnh. Bài GET 10.9–10.10 hoạt động tốt nhất qua một máy chủ tĩnh cục bộ (ví dụ Live Server), vì trình duyệt có thể chặn `fetch`/XHR từ `file://`.

## Ghi chú cá nhân

Ảnh đại diện hiện là hình tạm từ chữ viết tắt, chờ thay bằng ảnh thật. Phần tự đánh giá trên trang chủ vẫn là bản nháp để Hưng rà lại và bổ sung cảm nhận cá nhân sau khi chạy các Exercise. Kiểm tra tương tác Lab10 bằng Playwright trên Chrome cục bộ: selectors, sự kiện, chèn DOM, hiệu ứng, animation và fallback GET đều hoạt động; lỗi JavaScript runtime không xuất hiện. Lỗi dịch vụ ngoài được mô phỏng để xác nhận danh sách JSON cục bộ thay thế được.
