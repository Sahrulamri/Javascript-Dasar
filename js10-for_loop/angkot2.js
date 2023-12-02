var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var noAngkot;
while (jmlAngkot <= 6) {
    console.log('Angkot No.' + noAngkot + 'beroperasi dengan baik.');
noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; jmlAngkot <= 10; noAngkot++) {
    console.log('Angkot No.' + noAngkot + 'tidak beroperasi.');
}