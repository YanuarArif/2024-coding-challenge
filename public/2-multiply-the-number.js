function multiply(num) {
  // menghitung jumlah digit dari angka
  const digitCount = Math.abs(num).toString().length;

  // mngalikan angka dengan 5 pangkat jumlah digit
  return num * Math.pow(5, digitCount);
}

//* Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
// multiply(3)==15 //? 3 * 5¹
// multiply(10)==250 //? 10 * 5²
// multiply(200)==25000 //? 200 * 5³
// multiply(0)==0 //? 0 * 5¹
// multiply(-3)==-15 //? -3 * 5¹

// Sumber: https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

// Fungsi Math.abs() dalam JavaScript digunakan untuk mengembalikan nilai absolut (nilai positif) dari suatu bilangan

// Fungsi Math.pow() dalam JavaScript digunakan untuk menghitung nilai dari sebuah angka yang ditingkatkan ke suatu pangkat tertentu. Pangkat tersebut ditentukan sebagai parameter kedua.

// Anda bisa saja menggunakan .length tanpa toString(), asalkan Anda memastikan bahwa nilai yang Anda operasikan adalah string.

// Namun, jika Anda ingin menghitung jumlah digit dari suatu angka, Anda perlu memastikan bahwa angka tersebut diinterpretasikan sebagai string agar Anda dapat menggunakan .length. Oleh karena itu, Anda menggunakan toString() untuk mengubah angka menjadi string sehingga Anda bisa menggunakan .length untuk menghitung jumlah digitnya.
