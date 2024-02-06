function countSheeps(arrayOfSheeps) {
  let domba = 0;
  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (Array.isArray(arrayOfSheeps[i])) {
      // perulangan ke array nested lvl-1
      for (let j = 0; j < arrayOfSheeps[i].length; j++) {
        if (arrayOfSheeps[i][j] === true) {
          domba++;
        } else if (arrayOfSheeps[i][j] === false) {
          domba = domba;
        }
      }
    } else if (arrayOfSheeps[i]) {
      domba++;
    }
  }
  return domba;
}

console.log(
  countSheeps([
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined, null, false, true], 1],
    [[undefined, null, false, true, true, false, null, undefined], 2],
    [
      [
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      17,
    ],
  ])
);

// Sumber: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

//* Atau bisa pakai cara ini
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

//* Atau bisa pakai cara ini
// function countSheeps(arrayOfSheep) {
//   let num = 0;

//   for(let i = 0; i < arrayOfSheep.length; i++)
//     if(arrayOfSheep[i] == true)
//       num++;

//   return num;
// }

//! CATATAN!
// Fungsi .filter() dalam JavaScript digunakan untuk membuat sebuah array baru yang berisi elemen-elemen dari array asli yang melewati sebuah tes kondisional tertentu. Dalam .filter(), Anda memberikan sebuah fungsi yang akan menentukan apakah setiap elemen dalam array asli akan dimasukkan ke dalam array baru atau tidak.

// Sintaks dari .filter() adalah sebagai berikut:

// javascript
// Copy code
// array.filter(callback(element, index, array), thisArg)
// callback: Sebuah fungsi yang digunakan untuk menguji setiap elemen dari array. Fungsi ini mengembalikan true untuk elemen yang akan disertakan dalam array baru, dan false untuk elemen yang akan diabaikan. Fungsi ini memiliki tiga parameter:
// element: Elemen saat ini yang sedang diuji.
// index (opsional): Indeks dari elemen saat ini dalam array.
// array (opsional): Array asli yang sedang diproses.
// thisArg (opsional): Objek yang akan menjadi nilai this dalam pemanggilan fungsi callback.
// Contoh penggunaan .filter():

// javascript
// Copy code
// var numbers = [1, 2, 3, 4, 5];
// var evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]
// Dalam contoh ini, numbers.filter() membuat array baru yang hanya berisi angka-angka genap dari array numbers, karena kondisi di dalam fungsi callback adalah number % 2 === 0.

// .filter() sangat berguna ketika Anda perlu menyaring elemen-elemen tertentu dari sebuah array berdasarkan kondisi tertentu, misalnya, ketika Anda ingin menyaring angka-angka yang memenuhi kriteria tertentu, atau ketika Anda ingin menyaring objek-objek dalam array berdasarkan properti-properti mereka.
