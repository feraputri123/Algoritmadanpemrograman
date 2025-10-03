function balikkanString() {
  let teks = document.getElementById("inputString").value;
  let hasilBalik = teks.split("").reverse().join("");
  document.getElementById("hasil").innerText = "Hasil: " + hasilBalik;
}
