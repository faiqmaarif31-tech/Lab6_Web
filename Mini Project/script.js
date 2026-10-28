
const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const sesiDipilih = document.getElementById("sesiDipilih");
const pesan = document.getElementById("pesan");

const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

// Menghitung karakter nama saat pengguna mengetik
nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;

    ringkasanNama.textContent = nama.value || "-";
});

// Menampilkan sesi yang dipilih
sesi.addEventListener("change", function () {
    sesiDipilih.textContent = sesi.value
        ? "Sesi dipilih: " + sesi.value
        : "Sesi belum dipilih.";

    ringkasanSesi.textContent = sesi.value || "-";
});

// Memperbarui ringkasan email
email.addEventListener("input", function () {
    ringkasanEmail.textContent = email.value || "-";
});

// Validasi formulir
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaValue.length < 3) {
        pesan.textContent = "Nama minimal 3 karakter.";
        pesan.style.color = "red";
    } else if (!polaEmail.test(emailValue)) {
        pesan.textContent = "Masukkan email yang valid.";
        pesan.style.color = "red";
    } else if (sesi.value === "") {
        pesan.textContent = "Silakan pilih sesi workshop.";
        pesan.style.color = "red";
    } else {
        pesan.textContent = "Pendaftaran workshop berhasil!";
        pesan.style.color = "green";
    }
});

// Mengatur ulang tampilan setelah tombol Reset
form.addEventListener("reset", function () {
    setTimeout(function () {
        jumlahKarakter.textContent = "0";
        sesiDipilih.textContent = "Sesi belum dipilih.";
        pesan.textContent = "";

        ringkasanNama.textContent = "-";
        ringkasanEmail.textContent = "-";
        ringkasanSesi.textContent = "-";
    }, 0);
});

sesi.addEventListener("change", function () {
    const ringkasanSesi = document.getElementById("ringkasanSesi");

    ringkasanSesi.textContent =
        "Sesi yang dipilih: " + sesi.value;
});
const paragrafEksperimen =
    document.getElementById("paragrafEksperimen");

const tombolSembunyi =
    document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
    paragrafEksperimen.classList.toggle("sembunyi");

    if (paragrafEksperimen.classList.contains("sembunyi")) {
        tombolSembunyi.textContent = "Tampilkan Paragraf";
    } else {
        tombolSembunyi.textContent = "Sembunyikan Paragraf";
    }
});
