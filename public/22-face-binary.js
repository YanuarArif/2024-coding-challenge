function fakeBin(x) {
  const array = x.split("");
  const hasil = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      hasil.push(0);
    } else if (array[i] >= 5) {
      hasil.push(1);
    }
  }
  return hasil;
}

console.log(fakeBin("45385593107843568"));

//* Bisa menggunakan code ini
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

// Sumber: https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
