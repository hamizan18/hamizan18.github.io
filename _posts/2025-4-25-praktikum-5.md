---
layout: post
title: "Belajar Menambahkan JavaScript pada Website"
---

Penjelasan mengenai Fundamental JavaScript DOM (Document Object Model)


# 📚 Fundamental JavaScript DOM (Document Object Model)

DOM adalah cara JavaScript untuk berinteraksi dengan HTML dan mengubah tampilan halaman secara dinamis.

---

## 🧱 1. Apa itu DOM?

DOM (Document Object Model) adalah representasi struktur HTML dalam bentuk objek yang bisa diakses dan dimanipulasi oleh JavaScript.

Contoh HTML:

html
<p id="teks">Halo Dunia!</p>
````

Dengan JavaScript, kita bisa mengakses `<p>` tersebut dan mengubah isinya.

---

## 🔍 2. Mengakses Elemen HTML

### a. `getElementById()`

```javascript
let elemen = document.getElementById("teks");
```

### b. `getElementsByClassName()`

```javascript
let elemen = document.getElementsByClassName("kelas");
```

### c. `getElementsByTagName()`

```javascript
let elemen = document.getElementsByTagName("p");
```

### d. `querySelector()` (mengambil elemen pertama yang cocok)

```javascript
let elemen = document.querySelector("#teks");
 // pakai CSS selector
```

### e. `querySelectorAll()` (mengambil semua elemen yang cocok)

```javascript
let elemen = document.querySelectorAll("p");
```

---

## ✍️ 3. Mengubah Konten HTML

### a. `innerHTML`

```javascript
document.getElementById("teks").innerHTML = "Teks baru";
```

### b. `textContent` (lebih aman dari script injection)

```javascript
document.getElementById("teks").textContent = "Teks aman";
```

---

## 🎨 4. Mengubah Gaya (CSS)

```javascript
let elemen = document.getElementById("teks");
elemen.style.color = "red";
elemen.style.fontSize = "20px";
```

---

## 🎛️ 5. Mengubah Atribut

```javascript
let link = document.getElementById("mylink");
link.setAttribute("href", "https://google.com");
link.getAttribute("href"); // mengambil nilai atribut
```

---

## ➕ 6. Menambahkan atau Menghapus Elemen

### a. Membuat elemen baru

```javascript
let paragraf = document.createElement("p");
paragraf.textContent = "Ini paragraf baru!";
document.body.appendChild(paragraf);
```

### b. Menghapus elemen

```javascript
let elemen = document.getElementById("hapus");
elemen.remove();
```

---

## 🖱️ 7. Event Listener (klik, hover, dll)

```javascript
let tombol = document.getElementById("klikSaya");
tombol.addEventListener("click", function() {
  alert("Tombol diklik!");
});
```

---

## ✅ Tips Tambahan

* Manipulasi DOM sering digunakan untuk membuat website interaktif.
* Jangan lupa menunggu sampai halaman selesai dimuat (`DOMContentLoaded`):

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // kode JavaScript DOM kamu di sini
});
```

---

## 📌 Kesimpulan

* DOM adalah jembatan antara HTML dan JavaScript.
* Kita bisa ambil elemen, ubah isi, ubah gaya, tambahkan event, dll.
* Sangat penting untuk membuat halaman web jadi interaktif.

\
