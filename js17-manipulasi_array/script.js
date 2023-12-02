// Manipulasi Array

// 1.Menambah Isi Array
/*
var arr = [];
arr [0] = "Sandika";
arr [1] ="Galih";
arr [2] = "Nofa";
arr [6] = "Doddy";

console.log(arr);
*/

// 2. Menghapus Isi Array
/*
var arr = ["Sandhika", "Galih", "Nofa"];
arr [1] = undefined;
console.log(arr);
*/

// 3.Menampilkan Isi Array

/*
var arr = ["Sandhika", "Galih", "Nofa"];

for(var i = 0; i < arr.length; i++) {
    console.log("Mahasiswa ke " + ":" + arr[i]);
}
*/

// Metode Pada Array
// 1. Join (Mengubah Isi Array Menjadi String)
var arr = ["Sandika", "Galih", "Nofa"];

// 2. Push & Pop
// Push : Menambahkan array diakhir
arr.push("Doddy");

// Pop : Menghilangkan Elemen Terakhir pada Array
arr.pop();

console.log(arr.join("-"));

// 3. Unshift & Shift : Bekerja padaelemen pertama pada array
//Unshift : Menambahkan array pada bagianpertama
arr.unshift("Doddy");

console.log(arr.join("-"));
//Shift : Menghilangkan elemen array pada bagian pertama
arr.shift();

console.log(arr.join("-"));

// Slice & Splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(2, 0, "Doddy", "Fitri");
console.log(arr.join("-"));

rr.splice(1, 2, "Doddy", "Fitri");
console.log(arr.join("-"));

// Slice
var arr = ["Sandika", "Galih", "Nofa", "Fitri", "Doddy" ];
var arr2 = arr.slice(1,3);

console.log(arr2.join("-"));

// 6. ForEach
 var angka = [1,2,3,4,5,6,7,8];
 var nama = ["Sandika","Galih","Nofa"];
// for(var i = 0; i < angka.length; i++ ) {
//     console.log(angka[i]);
// }

// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak); // Kalau Bingung enagn function Ekspresion bisa diganti dengan ini

// angka.forEach(function(e) {
//     console.log(e);
// });
nama.forEach(function(e, i) { // e : mengacu pada nama elemen dan i : mengacu pada index
    console.log("Mahasiswa ke-" + (i+1) + "adalah :" + e); //(i+ 1) kalau mau mulai dari 1

});

// 7. Map (mengembalikan Array)
var angka = [1,3,5,4,2,9,7,6,8];
var angka2 = angka.map(function(e) {
    return e * 2;
});
console.log(angka2.join("-"));

// 8. Sort
var angka = [1,3,5,4,2,9,7,6,8];
console.log(angka.join("-")); //belum diurutkan
angka.sort();
console.log(angka.join("-")); //sudah diurutkan

var angka = [1,3,50,40,20,9,7,6,8];
angka.sort(function(a,b) {
    return a - b;
});
console.log(angka.join("-")); 

// 9. Filter : untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
var angka = [1,3,50,40,20,9,7,6,8];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join("-"));

// find : Hanya menemukan 1 nilai dan bukan bernilai array
var angka = [1,3,50,40,20,9,7,6,8];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2);