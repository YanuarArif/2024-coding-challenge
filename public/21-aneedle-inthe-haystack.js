function findNeedle(haystack) {
  let hasil = "";
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      hasil += `found the needle at position ${i}`;
    }
  }
  return hasil;
}

//* Bisa pakai cara ini
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// Metode .indexOf() dalam JavaScript digunakan untuk mencari indeks pertama dari sebuah elemen dalam sebuah array atau string. Ini mengembalikan indeks pertama di mana elemen tersebut ditemukan, atau -1 jika elemen tidak ditemukan.

// Sintaks dari .indexOf() adalah sebagai berikut:

// array.indexOf(searchElement, fromIndex)

//* searchElement: Elemen yang akan dicari dalam array.
//* fromIndex (opsional): Indeks mulai pencarian. Pencarian dimulai dari indeks ini, dan jika tidak disediakan, pencarian dimulai dari indeks 0.

// Sumber: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
