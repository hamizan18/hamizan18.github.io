---
layout: post
title: "Praktikum 2 - Membuat index.html dan jekyll serve"
---

Membuat index.html dan menjalankan jekyll serve

# Menjalankan Jekyll serve

- Setelah membuat sebuah repository dengan nama sendiri yang sesuai dengan yg nama github
- Clone repository tersebut ke local
- Kemudian masuk ke dalam folder repository tersebut dan install melalui terminal Visual studio code dengan perintah berikut: 
    - gem install jekyll bundler 
    - bundle init 
- Kemudian masuk ke folder Gemfile yang muncul dan tambahkan 
    - gem "jekyll" di baris baru 
- Tambahkan file baru dengan nama index.html dan isi dengan kode berikut 
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hellooo Minnaa, nani ga sukii?!</h1>
    </body>
    </html>
```
- Lalu ketik "jekyll build" di terminal agar menghasilkan directory _site
- Dan jalankan "jekyll serve" dan klik url https://localhost:4000 yang muncul.
- Jika web suda berhasil dibuka, edit Gemfile.lock dan tambahkan "x86_64-linux" pada bagian "Platforms"
- Dan ketik perintah berikut untuk push ke repository GitHub:
    - git add .
    - git commit -m "pub: first publish"
    - git push 

