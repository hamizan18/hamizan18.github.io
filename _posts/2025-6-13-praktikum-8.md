---
layout: post
title: "Praktikum 8 - Menggunakan PHP untuk membuat form"
author: Hamijaannn
---

Praktikum kali ini akan membuat sebuah form pendaftaran menggunakan bahasa PHP

### Berikut langkah-langkahnya:

1. Pertama, masuk ke folder xampp/laragon/lamp stack yang kamu gunakan di device mu.

2. Kemudian, buat sebuah folder dengan nama "latihan"

3. Lalu buatlah file php dengan dengan nama "koneksi.php" dan isi file tersebut.
   Jika sudah berhasil maka lanjut ke langkah 4

4. Kemudian masuk ke terminal/cmd yg kamu gunakan dan masuk ke folder mysql mu dengan cara:

```bash
mysql -uroot -p
```

5. Setelah berhasil masuk ke mysql, buat form dengan nama "latian" dengan cara:

```bash
CREATE DATABASE latian;
```

6. Kemudian ketik:

```bash
- use latian; (untuk masuk ke dalam form latian)
```

7. Kemudian buat table siswa dengan cara berikut:

```bash
CREATE TABLE siswa(
id int auto_increment primary key,
nama varchar(100)
alamat varchar(200),
jenis_kelamin tinyint(1),
agama varchar(20),
sekolah_asal varchar(50));
```

8. Selanjutnya, buat file baru dengan nama "create.php" dan isi kode berikut:

```bash
<?php

include "koneksi.php";

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "INSERT INTO siswa (nama, alamat, jenis_kelamin, agama, sekolah_asal)
        VALUES ('$nama', '$alamat', '$jenis_kelamin', '$agama', '$sekolah_asal')";

if (mysqli_query($koneksi, $sql)) {
    header("location: list-siswa.php");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($koneksi);
}

?>
```

9. Lanjutkan lagi dengan membuat file baru dengan nama "delete.php", lalu isi lagi:

```bash
<?php

include "koneksi.php";

$id = $_POST['id'];

$sql = "DELETE FROM siswa WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    header("location:list-siswa.php");
} else {
    echo "Error deleting record: " . mysqli_error($koneksi);
}
```

10. Dilanjut dengan file bernama "form-daftar.php" dan isikan.

```bash
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pendaftaran Siswa Baru | Digital Talent</title>
</head>

<body>
    <h2>Formulir Pendaftaran Siswa Baru</h2>
    <form action="create.php" method="POST">
        <table>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td><input type="text" name="nama"></td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>:</td>
                <td>
                    <input type="radio" name="jenis_kelamin" value="1"> Laki-laki
                    <input type="radio" name="jenis_kelamin" value="0"> Perempuan
                </td>
            </tr>
            <tr>
                <td>Agama</td>
                <td>:</td>
                <td>
                    <select name="agama">
                        <option>--Pilih Agama--</option>
                        <option>Islam</option>
                        <option>Kristen</option>
                        <option>Hindu</option>
                        <option>Buddha</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Sekolah Asal</td>
                <td>:</td>
                <td><input type="text" name="sekolah_asal"><br/></td>
            </tr>
            <tr>
                <td colspan="2">
                </td>
                <td>
                    <button type="submit">Daftar</button>
                    <a href="index.php">Batal</a>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
```

11. Kemudian buat file baru lagi dengan nama "form-delete.php" dan isi.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Hapus Siswa</title>
</head>
<body>

    <?php
    include "koneksi.php";
    $id = $_GET['id'];
    $sql = "SELECT * FROM siswa WHERE id=$id";
    $result = mysqli_query($koneksi, $sql);
    $row = mysqli_fetch_assoc($result);
    ?>

    <h2>Apakah Anda yakin akan menghapus data berikut?</h2>
    <form action="delete.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
        Nama : <?php echo $row['nama'] ?> <br/>
        Jenis Kelamin :
        <?php
        if ($row['jenis_kelamin'] == 1) {
            echo "Laki-laki";
        } else {
            echo 'Perempuan';
        }
        ?>
        Agama : <?php echo $row['agama'] ?> <br/>
        Sekolah Asal : <?php echo $row['sekolah_asal'] ?> <br/>
        <button type="submit">Ya</button>
        <a href="list-siswa.php">Tidak</a>
    </form>
</body>
</html>
```

12. Lanjutkan dengan file bernama "form-edit.php" dan isi:

```bash
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Edit Siswa</title>
</head>

<body>

    <?php
    include "koneksi.php";
    $id = $_GET['id'];
    $sql = "SELECT * FROM siswa WHERE id=$id";
    $result = mysqli_query($koneksi, $sql);
    $row = mysqli_fetch_assoc($result);
    ?>

    <h2>Formulir Edit Siswa</h2>
    <form action="update.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
        Nama :
        <input type="text" name="nama" value="<?php echo $row['id'] ?>"> <br />
        Alamat :
        <textarea name="alamat">
        <?php echo $row['alamat'] ?>
    </textarea> <br/>
        Jenis Kelamin :
        <input type="radio" name="jenis_kelamin" value="1" <?php if ($row['jenis_kelamin'] == 1) echo "checked" ?>>
        Laki-laki
        <input type="radio" name="jenis_kelamin" value="0" <?php if ($row['jenis_kelamin'] == 0) echo "checked" ?>>
        Perempuan <br/>
        Agama :
        <select name="agama">
            <option>--Pilih Agama</option>
            <option value="Islam"></option>
            <option value="Kristen"></option>
            <option value="Hindu"></option>
            <option value="Buddha"></option>
        </select> <br/>
        Sekolah asal :
        <input type="text" name="sekolah_asal" value="<?php echo $row['sekolah_asal'] ?>">
    <br/>
        <button type="submit">Update</button>
        <a href="list-siswa.php">Batal</a>
    </form>
</body>
</html>
```

13. Buat lagi file bernama "index.php" dan isi:

```bash
<?php

echo "<h2> Pendaftaran Siswa Baru</h2>

    <h1>Digital Talent</h1>

    <h3>Menu</h3>

    <li><a href='form-daftar.php'>Daftar Baru</a></li>
    <li><a href='list-siswa.php'>Pendaftaran</a></li>
    </ul>";

?>
```

14. Dan buat file dengan nama "list-siswa.php" dan isi:

```bash
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Siswa</title>
</head>

<body>
    <h2>Siswa yang sudah mendaftar</h2>

    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="form-daftar.php">[+] Tambah Baru</a></li>
    </ul>

    <?php
    include "koneksi.php";

    $sql = "SELECT * FROM siswa";
    $result = mysqli_query($koneksi, $sql);
    ?>
    <table border="1">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Sekolah Asal</th>
                <th>Tindakan</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $no = 1;
            while ($row = mysqli_fetch_assoc($result)) {
                ?>
                <tr>
                    <td><?php echo $no++; ?></td>
                    <td><?php echo $row['nama']; ?></td>
                    <td><?php echo $row['alamat']; ?></td>
                    <td>
                    <?php
                        if ($row['jenis_kelamin'] == 1) {
                            echo "Laki-laki";
                        } else {
                            echo "Perempuan";
                        }
                        ?>
                    </td>
                    <td><?php echo $row['agama']; ?></td>
                    <td><?php echo $row['sekolah_asal']; ?></td>
                    <td>
                        <a href="form-edit.php?id=<?php echo $row['id']; ?>">Edit</a>
                        <a href="form-delete.php?id=<?php echo $row['id']; ?>">Delete</a>
                    </td>
                </tr>
                <?php
            }
        ?>
        </tbody>
    </table>
```

15. Dan menambahkan file baru lagi dengan nama "update.php" lalu isi:

```bash
<?php

include "koneksi.php";

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "UPDATE siswa SET nama='$nama', alamat='$alamat', jenis_kelamin='$jenis_kelamin', agama='$agama', sekolah_asal='$sekolah_asal' WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    header("location:list-siswa.php");
} else {
    echo "Error updating record: " . mysqli_error($koneksi);
}

?>
```

16. File yang wajib ada adalah file bernama "koneksi.php", dengan code berikut:

```bash
<?php

$host = 'localhost';
$username = 'root';
$password = '000';
$db_name = 'latian';

$koneksi = mysqli_connect($host, $username, $password, $db_name);

if (!$koneksi){
    die("koneksi gagal: " . mysqli_connect_error());
}

?>
```