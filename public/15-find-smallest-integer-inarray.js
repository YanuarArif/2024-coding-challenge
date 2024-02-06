class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const int = new SmallestIntegerFinder();

console.log(int.findSmallestInt([78, 56, 232, 12, 8]));

// Sumber: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

//* Cara lain menggunakan arrow function didalam class
// class SmallestIntegerFinder {
//   findSmallestInt = args => Math.min(...args);
// }
