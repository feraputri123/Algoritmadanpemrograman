function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // tukar posisi
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// contoh data
let data = [5, 3, 8, 4, 2];

document.getElementById("sebelum").textContent = data.join(", ");
let hasil = bubbleSort([...data]); // pakai spread agar array asli tidak berubah
document.getElementById("sesudah").textContent = hasil.join(", ");
