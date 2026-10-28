# Praktikum 6: JavaScript DOM dan Event Handling

## A. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan ID, class, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan dengan benar.

## B. Struktur File

```text
Lab6Web/
├── index.html
├── style.css
├── script.js
├── README.md


## C. Teknologi yang Digunakan

* HTML
* CSS
* JavaScript
* Browser modern
* Visual Studio Code

## D. Cara Menjalankan

1. Buat folder proyek dengan nama `Lab6Web`.
2. Buat file `index.html`, `style.css`, dan `script.js`.
3. Hubungkan file CSS dan JavaScript ke dalam HTML.
4. Buka `index.html` menggunakan browser.
5. Aktifkan Developer Tools atau Console untuk memeriksa kesalahan.
6. Jalankan dan uji setiap latihan.
7. Ambil screenshot hasil setiap latihan.
8. Simpan seluruh file dan dokumentasi ke repository GitHub.

## E. Langkah Kerja Praktikum

### Latihan 1 — Mengubah Teks dengan DOM

Memilih elemen HTML berdasarkan ID menggunakan `getElementById()`, kemudian mengubah judul dan paragraf menggunakan `textContent`.

**Hasil:** https://github.com/faiqmaarif31-tech/Lab6_Web/blob/52bf0f7a24e89b3dada7261a451b921ac16eb19f/Screenshots/Latihan1.png
### Latihan 2 — Event Click

Menggunakan `addEventListener()` untuk menjalankan fungsi ketika tombol diklik. Program menampilkan pesan beserta waktu saat tombol ditekan.

**Hasil:** Pesan dan waktu diperbarui setiap kali tombol diklik.

### Latihan 3 — Mengubah Kelas dan Gaya CSS

Menggunakan `classList.toggle()` untuk menambahkan atau menghapus kelas CSS pada paragraf.

**Hasil:** Teks berubah warna menjadi biru, memiliki latar belakang biru muda, garis biru di sebelah kiri, dan ukuran huruf lebih besar.

### Latihan 4 — Event Input dan Penghitung Karakter

Membuat input teks dan penghitung karakter menggunakan event `input`.

**Hasil:** Jumlah karakter bertambah atau berkurang secara langsung saat pengguna mengetik, menghapus, atau menempelkan teks.

### Latihan 5 — Validasi Form Pendaftaran

Membuat form pendaftaran yang berisi nama lengkap, email, dan usia. Validasi dilakukan untuk memastikan nama diisi, email valid, serta usia berupa bilangan bulat antara 17 dan 100.

**Hasil:** Program menampilkan pesan kesalahan jika input tidak sesuai dan pesan keberhasilan jika semua input valid.

### Latihan 6 — Daftar Tugas Sederhana (To-do List)

Membuat aplikasi daftar tugas dengan fitur menambahkan tugas dan menandai tugas sebagai selesai.

**Hasil:** Pengguna dapat menambahkan tugas, menandai tugas selesai, dan membatalkan status selesai.

## F. Mini Project — Form Pendaftaran Workshop

Mengembangkan halaman pendaftaran workshop dengan minimal tiga fungsi interaktif, yaitu:

1. Validasi nama, email, dan pilihan sesi.
2. Penghitung karakter atau ringkasan input secara langsung.
3. Pesan kesalahan dan pesan sukses.
4. Tombol reset atau hapus input.

Kode program dipisahkan ke dalam file HTML, CSS, dan JavaScript agar lebih terstruktur.

## G. Pengujian

Pengujian dilakukan dengan cara:

1. Memastikan teks dan judul berubah sesuai instruksi.
2. Memastikan tombol menjalankan fungsi ketika diklik.
3. Memastikan perubahan gaya CSS berfungsi.
4. Memastikan penghitung karakter diperbarui secara langsung.
5. Menguji validasi form dengan input kosong, email tidak valid, usia di bawah 17, dan input yang valid.
6. Memastikan fitur To-do List dapat menambahkan dan menandai tugas selesai.
7. Mengambil screenshot setiap latihan, termasuk kondisi valid dan tidak valid pada form.

## H. Kesimpulan

Praktikum ini mempelajari penggunaan JavaScript DOM dan event handling untuk membuat halaman web interaktif. Melalui latihan yang dilakukan, mahasiswa dapat memilih dan memanipulasi elemen HTML, menangani event pengguna, mengubah gaya CSS, menghitung karakter, memvalidasi form, serta membuat aplikasi daftar tugas sederhana.

## I. Referensi

1. MDN Web Docs — Introduction to the DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
2. MDN Web Docs — Event reference: https://developer.mozilla.org/en-US/docs/Web/Events
3. MDN Web Docs — Client-side form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
4.
