let antrian = [];
let nomor = 0;
let antrianSekarang = "-";

function tambahAntrian() {
  nomor++;
  antrian.push(nomor);
  tampilkanAntrian();
}

function panggilAntrian() {
  if (antrian.length > 0) {
    antrianSekarang = antrian.shift(); // ambil nomor terdepan
  } else {
    antrianSekarang = "-";
    alert("Tidak ada antrian!");
  }
  tampilkanAntrian();
}

function tampilkanAntrian() {
  document.getElementById("antrianSekarang").innerText = antrianSekarang;
  document.getElementById("daftarAntrian").innerText = 
    antrian.length > 0 ? antrian.join(", ") : "Belum ada antrian";
}
