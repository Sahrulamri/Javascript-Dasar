/*
var volumeA;
var volumeB;
var hasil;
var a = 3;
var b = 8;

volumeA = a * a * a;
volumeB = b * b * b;

hasil = volumeA + volumeB;

console.log(hasil);
*/

function jumlahKubus (a, b) { //parameter
    var hasil;
        
    volumeA = a * a * a;
    volumeB = b * b * b;
    var volumeA;
    var volumeB;

    hasil = volumeA + volumeB;

    return hasil;
}

console.log(jumlahKubus (3, 8)); // Argument

function tambah(a, b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba);

//REFACTORING : METODE PENULISAN KODE UNTUK LEBIH EFISIEN

function jumlahKubus (a, b) { //parameter
    
    return  a * a * a + b * b * b;
}

alert(jumlahKubus (3, 8)); // Argument