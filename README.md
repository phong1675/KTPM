# 🦜 Lingo — Nền tảng học ngôn ngữ trực tuyến

Lingo là một ứng dụng web giúp người dùng học ngoại ngữ thông qua các khóa học tương tác, bài học sinh động và hệ thống theo dõi tiến trình học.  
Dự án được xây dựng với **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Drizzle ORM** và **PostgreSQL**, mang lại hiệu năng cao và trải nghiệm mượt mà.

---

## 🚀 Tính năng nổi bật

- 🔐 **Xác thực người dùng** (Đăng ký, đăng nhập, đăng xuất) qua NextAuth  
- 💳 **Thanh toán khóa học** tích hợp Stripe  
- 📚 **Quản lý khóa học & bài học** trực quan, dễ mở rộng  
- 📈 **Theo dõi tiến trình học tập** theo từng bài  
- 🧩 **Giao diện tái sử dụng** với hệ thống component module hóa  
- ⚙️ **Kết nối cơ sở dữ liệu** qua Drizzle ORM + PostgreSQL  
- 🌙 **UI hiện đại** sử dụng Tailwind CSS + dark mode  
- 🧠 **Quản lý trạng thái toàn cục** với Zustand  

---

## 🏗️ Cấu trúc thư mục

```
lingo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/        # Xử lý xác thực (login, register, logout)
│   │   │   ├── payment/     # API xử lý thanh toán
│   │   │   ├── course/      # Quản lý khóa học
│   │   │   ├── lesson/      # Quản lý bài học
│   │   │   ├── user/        # Lấy, cập nhật thông tin người dùng
│   │   │   └── progress/    # Lưu tiến trình học
│   │   ├── components/      # Component giao diện tái sử dụng
│   │   ├── pages/           # Các trang chính (home, learn, profile,…)
│   │   ├── hooks/           # Custom hooks (useAuth, useFetch,…)
│   │   ├── store/           # Quản lý trạng thái (Zustand)
│   │   ├── utils/           # Hàm tiện ích
│   │   └── lib/             # Kết nối backend (db, auth, stripe,…)
│   ├── assets/              # Hình ảnh, âm thanh, font
│   ├── styles/              # CSS, Tailwind, theme
│   └── types/               # Kiểu dữ liệu TypeScript
├── drizzle/                 # Cấu hình Drizzle ORM & migration
├── public/                  # File tĩnh
├── .env                     # Biến môi trường
├── drizzle.config.ts        # Cấu hình ORM
├── package.json             # Script & dependencies
├── tsconfig.json            # Cấu hình TypeScript
├── README.md                # Tài liệu dự án
└── next.config.js           # Cấu hình Next.js
```

---

## ⚙️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|------------|-----------|
| **Next.js 14** | Framework React hiện đại, hỗ trợ SSR và App Router |
| **TypeScript** | Kiểm tra kiểu tĩnh, tăng độ an toàn cho mã nguồn |
| **Tailwind CSS** | Thiết kế UI nhanh chóng và tùy biến |
| **Drizzle ORM** | ORM cho PostgreSQL, dễ quản lý schema |
| **PostgreSQL** | Cơ sở dữ liệu chính |
| **NextAuth.js** | Xác thực người dùng an toàn |
| **Stripe** | Thanh toán khóa học |
| **Zustand** | Quản lý trạng thái đơn giản và hiệu quả |

---

## 🧩 Cài đặt & Chạy dự án

### 1️⃣ Cài đặt phụ thuộc
```bash
npm install
```

### 2️⃣ Cấu hình môi trường `.env`
Tạo file `.env` ở thư mục gốc và điền các biến sau:

```
DATABASE_URL=postgresql://user:password@localhost:5432/lingo
NEXTAUTH_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXTAUTH_URL=http://localhost:3000
```

### 3️⃣ Khởi tạo cơ sở dữ liệu
```bash
npm run db:push
```

### 4️⃣ Chạy dự án
```bash
npm run dev
```
Truy cập: [http://localhost:3000](http://localhost:3000)

---

## 📦 Các lệnh NPM hữu ích

| Lệnh | Mô tả |
|-------|-------|
| `npm run dev` | Chạy dự án ở chế độ phát triển |
| `npm run build` | Build project cho production |
| `npm run start` | Chạy server sau khi build |
| `npm run db:push` | Đồng bộ schema với database |
| `npm run db:studio` | Mở giao diện Drizzle Studio |

---

## 👨‍🏫 Thành Viên

| Họ và tên | MSSV | 
|------------|-------|
| Nguyễn Hồng Phong | 23010873 |
| Phùng Gia Minh | 23010869 |
| Hoàng Văn Dũng | 23010438 |
| Nguyễn Văn Hiệp | 23010859 |

---

## 🏁 Định hướng phát triển

- Bổ sung học nhiều ngôn ngữ khác nhau  
- Tích hợp chatbot hỗ trợ luyện tập  
- Phát triển ứng dụng di động (React Native)
