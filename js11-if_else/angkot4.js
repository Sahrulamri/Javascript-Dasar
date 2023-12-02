/*
var angka = prompt('Masukkan Angka');
if (angka % 2 === 0) {
    alert(angka + 'adalah bilangan GENAP');
} else if (angak % 2 === 1 ) {
    alert(angak + 'adalah bialngan GANJIL');
} else {
    alert('yang anda masukkan bukan angka!');
}
*/

var jmlAngkot = 18;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 6) {
        console.log("Angkot No." + noAngkot + "beroperasi dengan baik.");

    } else if (noAngkot === 8 && noAngkot === 10) {
        console.log("Angkot No." + noAngkot + "sedang lembur.");
    }  else {
        console.log ("Angkot No. " + noAngkot + "sedang tidak beroperasi.");
    }
}
    