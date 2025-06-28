# Basic Laravel 12 - Employee Management System

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## 📋 เกี่ยวกับโปรเจ็กต์

ระบบจัดการข้อมูลพนักงานพื้นฐานที่พัฒนาด้วย Laravel 12 สำหรับใช้เป็นแนวทางในการเรียนรู้และพัฒนาเว็บแอปพลิเคชัน Full Stack

### ✨ ฟีเจอร์หลัก

- 👥 **ระบบจัดการพนักงาน (Employee Management)**
  - เพิ่ม/แก้ไข/ลบข้อมูลพนักงาน
  - แสดงรายการพนักงานทั้งหมด
  - ค้นหาและกรองข้อมูล

- 🏠 **หน้าเว็บต่าง ๆ**
  - หน้าแรก (Home)
  - เกี่ยวกับเรา (About)
  - ติดต่อเรา (Contact)
  - แดชบอร์ด (Dashboard)
  - โปรไฟล์ (Profile)
  - รายงาน (Report)
  - การตั้งค่า (Settings)
  - สต็อก (Stock)
  - การสั่งซื้อ (Order)

- 🔐 **ระบบการยืนยันตัวตน**
  - ลงทะเบียน/เข้าสู่ระบบ
  - จัดการข้อมูลผู้ใช้

## 🛠️ เทคโนโลยีที่ใช้

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend:** Blade Templates, Vite
- **Database:** SQLite/MySQL
- **CSS Framework:** Bootstrap/Tailwind CSS

## 📁 โครงสร้างโปรเจ็กต์

```
basic-laravel12/
├── app/
│   ├── Http/Controllers/
│   │   ├── HomeController.php
│   │   ├── EmployeeController.php
│   │   └── AuthController.php
│   └── Models/
│       ├── Employee.php
│       └── User.php
├── resources/views/
│   ├── employees.blade.php
│   ├── create_employee.blade.php
│   ├── dashboard.blade.php
│   └── layouts/
├── database/
│   ├── migrations/
│   │   └── create_employees_table.php
│   └── seeders/
│       └── EmployeesSeeder.php
└── routes/
    └── web.php
```

## 🚀 การติดตั้งและการใช้งาน

### ความต้องการระบบ

- PHP >= 8.2
- Composer
- Node.js & NPM
- SQLite หรือ MySQL

### การติดตั้ง

1. **Clone โปรเจ็กต์**
   ```bash
   git clone <repository-url>
   cd basic-laravel12
   ```

2. **ติดตั้ง Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **ตั้งค่าไฟล์ Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **ตั้งค่าฐานข้อมูล**
   - แก้ไขไฟล์ `.env` ตามการตั้งค่าฐานข้อมูลของคุณ
   ```env
   DB_CONNECTION=sqlite
   # หรือ
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

5. **รัน Migration และ Seeder**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **สร้าง Storage Link**
   ```bash
   php artisan storage:link
   ```

7. **Build Assets**
   ```bash
   npm run build
   ```

8. **รันแอปพลิเคชัน**
   ```bash
   php artisan serve
   ```

   เข้าใช้งานที่: `http://localhost:8000`

## 🌐 การ Deploy บน Shared Hosting

โปรเจ็กต์นี้ได้ปรับแต่งสำหรับ Shared Hosting แล้ว:

1. **อัปโหลดไฟล์ทั้งหมดไปยัง public_html**
2. **ตรวจสอบไฟล์ `public/index.php`** - ได้ปรับเส้นทางสำหรับ Share Hosting แล้ว
3. **ตั้งค่า Environment** - สร้างไฟล์ `.env` บนเซิร์ฟเวอร์
4. **รันคำสั่ง Optimization**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

## 📚 การใช้งาน

### หน้าจัดการพนักงาน
- เข้าใช้งานที่: `/employees`
- เพิ่มพนักงานใหม่: `/employees/create`

### หน้าต่าง ๆ ในระบบ
- หน้าแรก: `/`
- แดชบอร์ด: `/dashboard`
- โปรไฟล์: `/profile`
- รายงาน: `/report`
- การตั้งค่า: `/settings`

## 🔧 การพัฒนา

### การรันในโหมด Development
```bash
# รัน Laravel Server
php artisan serve

# รัน Vite Development Server
npm run dev
```

### การทดสอบ
```bash
php artisan test
```

### การ Debug
- ตั้งค่า `APP_DEBUG=true` ในไฟล์ `.env`
- ตรวจสอบ Log ที่ `storage/logs/laravel.log`

## 🤝 การมีส่วนร่วม

หากต้องการมีส่วนร่วมในการพัฒนา:

1. Fork โปรเจ็กต์
2. สร้าง Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

โปรเจ็กต์นี้เป็น Open Source ภายใต้ [MIT License](https://opensource.org/licenses/MIT)

## 📧 ติดต่อ

หากมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อผ่าน:
- Email: your-email@example.com
- GitHub Issues: [Create New Issue](../../issues)

---

**หมายเหตุ:** โปรเจ็กต์นี้พัฒนาขึ้นเพื่อการศึกษาและฝึกปฏิบัติ Laravel Framework
