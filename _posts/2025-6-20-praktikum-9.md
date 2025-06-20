---
layout: post
title: 'Praktikum 9 - Menggunakan Github Classroom untuk mengumpulkan tugas'
author: Hamijaannn
---

Pada praktikum ini, akan menggunakan Github Classroom untuk mengupload tugas program


### Langkah-langkahnya:

1. Pertama, pastikan akun github sudah login
2. Kemudian klik link yang dikirimkan oleh dosen
3. Ketika sudah masuk ke dalam link tersebut, klik "Authorize"
4. Kemudian akan muncul halaman baru, lalu klik "Accept this assignment"
5. Ketika muncul tulisan "You're ready to go!" maka sudah berhasil, dan repository baru sudah ada
6. Setelah itu, pada repository baru tersebut klik bagian "Code" lalu copy SSH nya
7. Kemudian, masuk ke folder local di pc dan buka terminal dari folder tersebut dan ketik 
```bash 
git clone git@github.com:JTIK-PNL/php-crud-hamizan18.git 
lalu klik enter
```
8. Lalu, masuk dalam folder tersebut dan paste semua file yang sudah dibuat pada praktikum-praktikum sebelumnya
9. Jika sudah maka ketik
```bash
git add .
git commit -m "update folder"
git push
```
10. Dan semua folder sudah di push kedalam repository baru tersebut.