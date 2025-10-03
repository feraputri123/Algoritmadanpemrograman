function binarySearch() {
  let inputArr = document.getElementById("inputArray").value;
  let target = parseInt(document.getElementById("inputCari").value);
  let hasil = document.getElementById("hasil");

  if (!inputArr || isNaN(target)) {
    hasil.innerHTML = "Mohon masukkan array dan angka yang dicari!";
    return;
  }

  let array = inputArr.split(",").map(Number);
  let low = 0;
  let high = array.length - 1;
  let langkah = "";

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    langkah += `Periksa indeks ${mid} (nilai = ${array[mid]})<br>`;

    if (array[mid] === target) {
      langkah += `<b>Data ${target} ditemukan pada indeks ${mid}</b>`;
      hasil.innerHTML = langkah;
      return;
    } else if (array[mid] > target) {
      langkah += `→ Nilai lebih besar, geser ke kiri<br>`;
      high = mid - 1;
    } else {
      langkah += `→ Nilai lebih kecil, geser ke kanan<br>`;
      low = mid + 1;
    }
  }

  langkah += `<b>Data ${target} tidak ditemukan</b>`;
  hasil.innerHTML = langkah;
}
