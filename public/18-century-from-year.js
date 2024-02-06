function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));

// Sumber: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// Fungsi Math.ceil() dalam JavaScript digunakan untuk membulatkan sebuah angka ke atas menjadi bilangan bulat terdekat yang lebih besar atau sama dengan angka tersebut. Ini berarti Math.ceil() akan mengembalikan angka yang lebih besar atau sama dengan angka yang diberikan, tanpa memperdulikan bagian desimalnya.
