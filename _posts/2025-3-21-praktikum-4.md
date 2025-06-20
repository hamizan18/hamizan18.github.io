---
layout: post
title: "Praktikum 4 - HTML Link dan List"
author: Hamijaannn
---

Penjelasan Tentang Link dan List pada HTML

![HTML link dan List](/assets/images/html.png)

Source:  Hamizan and ChatGPT
    
# HTML: Link dan List

## 📌 Link (Tautan) di HTML
Di HTML, link atau tautan dibuat menggunakan elemen `<a>`.  
Format dasar:  
```html
<a href="https://www.example.com">Kunjungi Example</a>
```
- `href` → Menentukan URL tujuan.
- Bisa berupa **absolute URL** (misalnya `https://`) atau **relative URL** (`/halaman.html`).

🔹 **Contoh tambahan:**
```html
<a href="https://google.com" target="_blank">Buka Google di tab baru</a>
<a href="apaaja.html">Link ke halaman lokal</a>
<a href="mijan@gmail.com">Kirim Email</a>
```
- `target="_blank"` → Buka link di tab baru.

---

## 📋 List (Daftar) di HTML
Ada dua jenis list utama di HTML:  
### 1️⃣ **Ordered List (Daftar Berurutan)**
Menggunakan `<ol>` dengan item `<li>`, secara default diberi nomor.  
```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

🔹 **Bentuk lain (angka romawi, alfabet, dsb.):**
```html
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```
- `type="1"` → Angka (default).
- `type="A"` → Huruf kapital.
- `type="a"` → Huruf kecil.
- `type="I"` → Angka Romawi besar.
- `type="i"` → Angka Romawi kecil.

---

### 2️⃣ **Unordered List (Daftar Tidak Berurutan)**
Menggunakan `<ul>` dengan item `<li>`, ditandai dengan bullet (•).  
```html
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Mangga</li>
</ul>
```

🔹 **Custom Bullet List dengan CSS:**
```html
<ul style="list-style-type: square;">
  <li>Python</li>
  <li>Java</li>
</ul>
```
- `list-style-type: disc;` → Default (bulat).
- `list-style-type: square;` → Kotak.
- `list-style-type: circle;` → Lingkaran kosong.
- `list-style-type: none;` → Tanpa bullet.

---

## 🔗 Link di dalam List
Bisa menggabungkan `<a>` ke dalam `<li>`:
```html
<ul>
  <li><a href="https://github.com">GitHub</a></li>
  <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
</ul>
```

---

## 🎯 Kesimpulan
- **Link (`<a>`)** digunakan untuk membuat tautan ke halaman lain.
- **Ordered List (`<ol>`)** digunakan untuk daftar bernomor.
- **Unordered List (`<ul>`)** digunakan untuk daftar dengan bullet.
- Bisa dikombinasikan dengan **CSS** untuk tampilan lebih menarik.

---