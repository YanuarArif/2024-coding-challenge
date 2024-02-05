function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2]));

// Sumber: https://www.codewars.com/kata/515e271a311df0350d00000f

// For example, for [1, 2, 2] it should return 9 because

// 3^2 itu artinya 3x3 ya? berarti kalau 3^5 itu 3x3x3x3x3?
//? Yes, benar sekali!

//* "Square" biasanya merujuk pada operasi kuadrat, yaitu mengalikan sebuah angka dengan dirinya sendiri. Jadi, dalam konteks fungsi square(n), itu berarti mengkuadratkan nilai n.

//? Bisa menggunakan cara ini
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

//! Penjelasan!
/* 

Metode reduce() digunakan untuk mengurangi (reduce) elemen-elemen dalam sebuah array menjadi satu nilai tunggal. Ini sangat berguna ketika Anda ingin menjumlahkan semua elemen dalam array, mengalikannya, atau melakukan operasi lainnya yang melibatkan akumulasi data.

const numbers = [1, 2, 3, 4, 5];

/ Menggunakan reduce untuk menjumlahkan semua elemen dalam array

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

Di sini, kita memiliki array numbers yang berisi beberapa angka. Kemudian, kita menggunakan metode reduce() pada array tersebut.

Metode reduce() menerima dua argumen:

* Fungsi callback: Ini adalah fungsi yang akan dijalankan untuk setiap elemen dalam array. Fungsi ini menerima dua argumen:

? accumulator: Nilai yang terakumulasi dari iterasi sebelumnya.
? currentValue: Nilai dari elemen saat ini dalam iterasi.

* Fungsi callback ini harus mengembalikan nilai yang akan menjadi accumulator pada iterasi berikutnya.

Nilai awal akumulator: Ini adalah nilai awal untuk accumulator. Jika tidak disediakan, nilai awalnya akan menjadi nilai pertama dalam array, dan iterasi akan dimulai dari elemen kedua.

Dalam contoh di atas, kita memulai dengan 0 sebagai nilai awal akumulator. Selama setiap iterasi, nilai dari elemen saat ini dalam array [semua nilai di dalam array] (currentValue) ditambahkan ke akumulator (accumulator). Akhirnya, hasil akumulator adalah jumlah dari semua elemen dalam array.

*/
