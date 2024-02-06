function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));

// Sumber: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//* Bisa menggunakan cara ini
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+':
//           return value1 + value2;
//       case '-':
//           return value1 - value2;
//       case '*':
//           return value1 * value2;
//       case '/':
//           return value1 / value2;
//       default:
//           return 0;
//   }
// }
