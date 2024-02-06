function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("  8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd  "));

// Sumber: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//* Bisa memakai ini
// const noSpace = x => x.split(" ").join("");

//* Atau ini
// function noSpace(x){
//   return x.replace(/\s/g, '');
// }

// Fungsi .split() dalam JavaScript digunakan untuk memecah sebuah string menjadi array berdasarkan sebuah pemisah yang ditentukan.

// Fungsi .join() dalam JavaScript digunakan untuk menggabungkan semua elemen dalam sebuah array menjadi sebuah string.

// Fungsi .replace() dalam JavaScript digunakan untuk mengganti bagian dari sebuah string dengan sebuah string lain atau dengan hasil dari sebuah fungsi pengganti (callback function). Berikut adalah sintaks dari .replace():

//* string.replace(searchValue, newValue)
