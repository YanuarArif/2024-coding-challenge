function solution(str) {
  let balikKata = str.split("").reverse().join("");
  return balikKata;
}

console.log(solution("Hallo"));

// Sumber: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Fungsi .split() dalam JavaScript digunakan untuk memecah sebuah string menjadi array berdasarkan sebuah pemisah yang ditentukan.

// Fungsi .reverse() dalam JavaScript digunakan untuk membalikkan urutan elemen dalam sebuah array. //! HANYA UNTUK ARRAY!

// Fungsi .join() dalam JavaScript digunakan untuk menggabungkan semua elemen dalam sebuah array menjadi sebuah string.
