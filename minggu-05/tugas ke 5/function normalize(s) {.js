function normalize(s) {
  return s.trim().toLowerCase();
}

function prepareArray() {
  const text = document.getElementById("kamus").value;
  const items = text.split("\n").map(s => s.trim()).filter(s => s.length > 0);
  items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return items;
}

function doSearch() {
  const arr = prepareArray();
  const kata = document.getElementById("kata").value.trim();
  const logEl = document.getElementById("log");
  const resultEl = document.getElementById("result");

  logEl.textContent = "";
  resultEl.textContent = "Mencari...";

  if (!kata) {
    resultEl.textContent = "Masukkan kata terlebih dahulu.";
    return;
  }

  let left = 0;
  let right = arr.length - 1;
  const target = normalize(kata);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midWord = normalize(arr[mid]);

    logEl.textContent += `Bandingkan '${target}' dengan indeks ${mid}: '${midWord}'\n`;

    if (midWord === target) {
      resultEl.textContent = `Kata '${kata}' ditemukan di indeks ${mid} (kata: '${arr[mid]}').`;
      return;
    } else if (midWord < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  resultEl.textContent = `Kata '${kata}' temukan .`;
}

// pasang event listener
document.getElementById("btnCari").addEventListener("click", doSearch);
