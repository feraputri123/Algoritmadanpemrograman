let antrian = [];
let riwayat = [];
let nomor = 0;

// Tambah antrian baru
function tambahAntrian() {
  nomor++;
  antrian.push("A" + nomor);
  document.getElementById("nomorBaru").innerText = "Nomor Antrian Anda: A" + nomor;
  tampilkanAntrian();
}

// Panggil antrian
function panggilAntrian() {
  if (antrian.length === 0) {
    alert("Tidak ada antrian yang menunggu.");
    return;
  }
  let dipanggil = antrian.shift(); // ambil antrian paling depan
  riwayat.push(dipanggil);
  alert("Memanggil nomor: " + dipanggil);
  tampilkanAntrian();
  tampilkanRiwayat();
}

// Tampilkan antrian menunggu
function tampilkanAntrian() {
  let daftar = document.getElementById("daftarAntrian");
  daftar.innerHTML = "";
  antrian.forEach(no => {
    let li = document.createElement("li");
    li.textContent = no;
    daftar.appendChild(li);
  });
}

// Tampilkan riwayat
function tampilkanRiwayat() {
  let daftar = document.getElementById("riwayatAntrian");
  daftar.innerHTML = "";
  riwayat.forEach(no => {
    let li = document.createElement("li");
    li.textContent = no;
    daftar.appendChild(li);
  });
}
