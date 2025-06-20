---
layout: post
title: 'Praktikum 8 - Menggunakan PHP untuk membuat form'
---

Pada praktikum ini, akan membuat form
Berikut langkah-langkahnya: 

1. Pertama, masuk ke folder xampp/laragon/lamp stack yang kamu gunakan di device mu.

2. Kemudian, buat sebuah folder dengan nama "latihan"

3. Lalu buatlah file php dengan dengan nama "koneksi.php" dan isi file tersebut.
Jika sudah berhasil maka lanjut ke langkah 4

4. Kemudian masuk ke terminal/cmd yg kamu gunakan dan masuk ke folder mysql mu dengan cara: 

    - mysql -uroot -p

5. Setelah berhasil masuk ke mysql, buat form dengan nama "latian" dengan cara: 

    - CREATE DATABASE latian;

6. Kemudian ketik:

    - use latian; (untuk masuk ke dalam form latian)

7. Kemudian buat table siswa dengan cara berikut:

    - CREATE TABLE siswa(
    - id int auto_increment primary key,
    - nama varchar(100)
    - alamat varchar(200),
    - jenis_kelamin tinyint(1),
    - agama varchar(20),
    - sekolah_asal varchar(50));

8. Selanjutnya, buat file baru dengan nama "create.php" dan isi.

9. Lanjutkan lagi dengan membuat file baru dengan nama "delete.php", lalu isi lagi.

10. Dilanjut dengan file bernama "form-daftar.php" dan isikan.

11. Kemudian buat file baru lagi dengan nama "form-delete.php" dan isi.

12. Lanjutkan dengan file bernama "form-edit.php" dan isi.

13. Buat lagi file bernama "index.php" dan isi.

14. Dan buat file dengan nama "list-siswa.php" dan isi.

15. Dan menambahkan file baru lagi dengan nama "update.php" lalu isi.