/*
 jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var noAngkot;

for (noAngkot = angkotBeroperasi + 1; jmlAngkot <= 10; noAngkot++) {
    

    if (noAngkot <= 6) {
        console.log('Angkot No.' + noAngkot + 'Beroperasi dengan baik.');
    } else if () {
        console.log('Angkot No.' + noAngkot + 'Sedang Tidak Beroperasi');
    }
}
*/

var angka = prompt('Masukkan Angka');
if (angka % 2 === 0) {
    alert(angka + 'adalah bilangan GENAP');
} else if (angak % 2 === 1 ) {
    alert(angak + 'adalah bialngan GANJIL');
} else {
    alert('yang anda masukkan bukan angka!');
}