function abbrevName(name) {
  const newArr = name.split(" ");
  const hurufPertama = newArr.map((word) => word.charAt(0));
  return hurufPertama.join(".").toUpperCase();
}

console.log(abbrevName("Sam Harris"));

// Sumber: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//* Atau bisa pakai cara ini
// function abbrevName(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
//* Atau bisa pakai cara ini
// function abbrevName(name){
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
//* Atau bisa pakai cara ini
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// Metode .map() dalam JavaScript digunakan untuk membuat array baru dengan menerapkan fungsi tertentu pada setiap elemen array yang ada. Ini berarti .map() akan menghasilkan array baru yang memiliki panjang yang sama dengan array asli, di mana setiap elemen baru dalam array baru tersebut dihasilkan dengan menerapkan fungsi callback pada elemen yang sesuai dalam array asli.
