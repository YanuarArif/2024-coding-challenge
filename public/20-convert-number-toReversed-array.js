function digitize(n) {
  const balikAngka = n.toString().split("").reverse();
  const array = balikAngka.map(Number);
  return array;
}

console.log(digitize(35231));

// Sumber: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//* Bisa pakai cara ini
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
