---
layout: post
title: 'Praktikum 10 - Belajar Menggunakan Laravel'
author: Hamijaannn
---

Laravel adalah framework PHP sumber terbuka yang populer, dirancang untuk mempermudah dan mempercepat pengembangan aplikasi web. Laravel menggunakan pola arsitektur Model-View-Controller (MVC) untuk mengatur kode dan memisahkan logika aplikasi, tampilan, dan pengelolaan data. 

#### Langkah - langkah instalasi laravel dan penggunaannya
1. Cara instalasi laravel
- Untuk linux, ketik pada terminal:
```bash
sudo pacman -S composer
```

- Untuk windows search di browser 
```bash
composer download
```
    Lalu di download, dan install pencet next-next aja kek biasa install

2. Setelah melakukan instalasi, buka terminal lagi lalu ketik:
```bash
composer create-project --prefer-dist laravel/laravel laratih
```

3. Maka akan ada folder baru dengan nama "laratih", dan masuk ke dalam foldernya dengan mengetik:
```bash
cd laratih
```

4. Setelah masuk ke folder laratih, ketik:
```bash
    php artisan serve
```

5. Lalu secara otomatis akan muncul:
```bash
  INFO  Server running on [http://127.0.0.1:8000].  
  Press Ctrl+C to stop the server
  2025-07-04 10:14:21 / ..................................... ~ 1.09ms
  2025-07-04 10:14:22 /favicon.ico .......................... ~ 0.22ms
```

6. ketika sudah muncul, klik link yang muncul, contoh:
```bash
    [http://127.0.0.1:8000]
```

7. Kemudan masuk kembali ke dalam folder laratih untuk menginstall, dengan mengetik:
```bash
composer require laravel/breeze
```

8. Kemudian jalankan perintah untuk menginstall npm dengan cara mengetik:
```bash
php artisan breeze:install
Blade with Alpine
Yes
Pest
```

9. Setelah selesai, jalankan lagi perintah:
```bash
npm install
npm run dev
```

10. Untuk membuat file controller untuk siswa ketik:
```bash
php artisan make:model Siswa
```

11. Kemudian ketik di terminal:
```bash
php artisan make:migration create_siswa_table
```

12. Ketika muncul file baru lanjutkan dengan mengetik:
```bash
    public function up(): void
    {
        Schema::create('siswa', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 100);
            $table->text('alamat');
            $table->string('agama');
            $table->boolean('jenis_kelamin'); // 1 untuk laki-laki, 0 untuk perempuan
            $table->string('asal_sekolah');
            $table->timestamps();
        });
    }
```

13. pastikan koneksi ke database sudah benar di file .env. Contoh:
```bash
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=latihan
DB_USERNAME=root
DB_PASSWORD=
```

14. Kemudian membuat otomatis tabel dengan mengetik:
```bash
php artisan migrate
```

15. Jalankan perintah untuk membuat user melalui seeder dengan cara:
```bash
php artisan db:seed
```
<!-- composer config --global process-timeout 900 -->
