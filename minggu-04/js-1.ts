// Array judul buku (tidak terurut)
let buku = ["Algoritma", "Basis Data", "Pemrograman", "Jaringan Komputer", "Sistem Operasi"];

function cariBuku() {
  let judulDicari = document.getElementById("inputJudul").value;
  let ditemukan = false;

  for (let i = 0; i < buku.length; i++) {
    if (buku[i].toLowerCase() === judulDicari.toLowerCase()) {
      document.getElementById("hasil").innerText = 
        "Judul \"" + judulDicari + "\" ditemukan di posisi ke-" + (i+1);
      ditemukan = true;
      break;
    }
  }

  if (!ditemukan) {
    document.getElementById("hasil").innerText = 
      "Judul \"" + judulDicari + "\" tidak ditemukan dalam daftar.";
  }
}
