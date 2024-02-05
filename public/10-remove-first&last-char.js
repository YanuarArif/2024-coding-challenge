function removeChar(str) {
  return str.substring(1, str.length - 1);
}

console.log(removeChar("country"));

// Sumber: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// Fungsi .substring() dalam JavaScript digunakan untuk mengekstrak sebagian dari sebuah string berdasarkan indeks karakter awal dan indeks karakter akhir yang ditentukan. Indeks karakter awal dimasukkan sebagai parameter pertama, sedangkan indeks karakter akhir dimasukkan sebagai parameter kedua (opsional).

//* Bisa memakai cara return str.slice(1, -1);

// Fungsi .slice() dalam JavaScript mirip dengan .substring(), tetapi memiliki beberapa perbedaan. .slice() juga digunakan untuk mengekstrak sebagian dari sebuah string, tetapi dapat menerima nilai negatif sebagai indeks, yang akan menghitung indeks dari belakang string. Ini juga tidak mengubah string asli, tetapi mengembalikan potongan string yang baru.
