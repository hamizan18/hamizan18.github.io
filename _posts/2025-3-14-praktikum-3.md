---
layout: post
title: "Praktikum 3 - Belajar Buat Post"
---

Mempelajari cara membuat post dengan bahasa markdown

### Langkah-langkah:
1. Pertama, siapkan folder baru file bernama post.html didalam folder _layouts
2. Lalu, buat folder bernama _posts untuk menampatkan semua file post yang akan dibuat
3. Setelah itu, arahkan kedalam folder _posts
4. Kemudian buat file baru dengan format YYYY-M-DD/tahun-bulan-tanggal
5. Setelah itu, save dengan format file .md
6. Dah jadiiii.

## 📌 Struktur Dasar Markdown

### 1. Judul

Pakai tanda pagar `#` untuk membuat heading.

```markdown
# Judul H1
## Judul H2
### Judul H3
````

---

### 2. Paragraf

Langsung tulis saja. Markdown akan otomatis membaca baris kosong sebagai paragraf baru.

```markdown
Ini adalah paragraf pertama.

Ini paragraf kedua.
```

---

### 3. Menebalkan dan Miringkan Teks

```markdown
**tebal**
*miring*
***tebal dan miring***
```

---

### 4. Daftar (List)

#### a. List tidak berurutan (bullet)

```markdown
- Item 1
- Item 2
  - Sub-item
* Item 3
```

#### b. List berurutan (angka)

```markdown
1. Langkah pertama
2. Langkah kedua
   1. Sub-langkah
```

---

### 5. Link dan Gambar

#### a. Link

```markdown
[HAMIJAN](https://hamizan18.github.io)
```

#### b. Gambar

```markdown
![Alt teks gambar](https://link-gambar.com/gambar.jpg)
```

---

### 6. Code (Kode)

#### a. Inline code

```markdown
Contoh menggunakan `console.log()` di JavaScript.
```

#### b. Code block

Pakai 3 backtick ` ``` ` di atas dan bawah kode.

<pre>
```javascript
function halo() {
  console.log("Halo Dunia!");
}
```
</pre>

---

### 7. Quote (Kutipan)

```markdown
> Ini adalah kalimat kutipan.
```

---

### 8. Garis Pemisah

```markdown
---
```