function getCount(str) {
  let hasil = 0;

  const arrayStr = str.split("");
  for (let i = 0; i < arrayStr.length; i++)
    if (
      arrayStr[i] === "a" ||
      arrayStr[i] === "i" ||
      arrayStr[i] === "u" ||
      arrayStr[i] === "e" ||
      arrayStr[i] === "o"
    ) {
      hasil++;
    }
  return hasil;
}

console.log(getCount("abracadabra"));

//* Bisa pakai cara ini
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//  }

// Sumber: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
