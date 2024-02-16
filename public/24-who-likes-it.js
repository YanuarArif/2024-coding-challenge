function likes(names) {
  let hasil = "";

  for (let i = 0; i <= names.length; i++) {
    if (i === 0) {
      hasil = "no one likes this";
    } else if (i === 1) {
      hasil = `${names[0]} likes this`;
    } else if (i === 2) {
      hasil = `${names[0]} and ${names[1]} like this`;
    } else if (i === 3) {
      hasil = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      hasil = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    }
  }
  return hasil;
}

console.log(likes(["aku", "kamu", "dia", "itu"]));

//* Bisa pakai cara ini!

// function likes(names) {
//   return names.length === 0
//     ? "no one likes this"
//     : names.length === 1
//     ? `${names[0]} likes this`
//     : names.length === 2
//     ? `${names[0]} and ${names[1]} like this`
//     : names.length === 3
//     ? `${names[0]}, ${names[1]} and ${names[2]} like this`
//     : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }

// console.log(likes(["aku", "kamu", "dia", "itu"]));
