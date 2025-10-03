function binarySearch(kamus, kata) {
  let low = 0;
  let high = kamus.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (kamus[mid] === kata) {
      return "Kata '" + kata + "' ditemukan pada indeks " + mid;
    } else if (kamus[mid] < kata) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "Kata '" + kata + "' tidak ditemukan dalam kamus.";
}

function cariKata() {
  const kamus = ["apel", "bahasa", "buku", "data", "kamus", "manusia", "pemrograman", "sekolah", "zebra"];
  const kataInput = document.getElementById("kataInput").value;
  const hasil = binarySearch(kamus, kataInput);
  document.getElementById("hasil").innerText = hasil;
}
