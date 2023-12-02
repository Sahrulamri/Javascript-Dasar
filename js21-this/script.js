//This
// var a = 10;
// console.log(window.a);

// Cara 1 - Menggunakan declaration
function halo() {
    console.log(this);
    console.log("halo");
}
this.halo();
// This mengembalikan object Global

// Cara 2 - Object Literal
var obj = {a : 10, nama : "Sandhika"};
obj.halo =  function() {
    console.log(this);
    console.log("halo");
}
obj.halo();
// This mengembalikan object yang bersangkuatan

// Cara 3 - Constructor
function Halo() {
    console.log(this);
    console.log("Hallo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// This mengembalikan object yang baru (new) dibuat






// Membuat Object

//Cara 1
//menggunakan function declaration
function halo() {
    console.log(halo);
}
//cara manggil
// namaFunction();

//Cara 2
// Dengan Object Literal
//1. Bikin variabel
var obj = {};
//2. var name.method = function() {
//    console.log(method)
// }
obj.halo = function() {
    console.log("halo");
}
//Cara manggil
//3. nama variabel/object.methode();
obj.halo();

//Cara 3
// Dengan Construction Function
// function namaFunction() {
//   console.log(namaFuntion)
// }
// Contoh  :
    function Halo() {
        console.log("Halo")
    }
//Cara manggilnya
// new namaFunction();
//Contoh
new Halo();