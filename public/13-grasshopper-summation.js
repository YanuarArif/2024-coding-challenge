const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));

// Sumber: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//? const summation = n => n * (n + 1) / 2;
