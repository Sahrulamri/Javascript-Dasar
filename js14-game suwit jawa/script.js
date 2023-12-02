var tanya = true
while ( tanya ) {
    // Menangkap pilihan Player
var p = prompt("pilih : batu, gunting, kertas");
//Menangkap Pilihan Komputer

// Membangkitkan bilangan random
var comp = Math.random();

    if (comp < 0.34) {
        comp = "kertas";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "batu";
    } else {
        comp = "gunting";
    }

var hasil = "";
//Menentukan rules
if (p == comp) {
    hasil = "SERI";
} else if (p == batu) {
    /*if (comp == "gunting") {
        hasil = "MENANG!";
    } else {
        hasil = "KALAH!";
    } */
    hasil = (comp == "gunting") ? "MENANG" : "KALAH";
} else if (p == "gunting") {
    /*if (comp == "kertas") {
        hasil == "MENANG!";
    } else {
        hasil == "KALAH!";
    }
    */
        hasil (comp == "kertas") ? "MENANG" : "KALAH";
} else if ( p == "kertas") {
        hasil == ( comp == "gunting") ? "KALAH!" : "MENANG!";
} else {
    hasil = "Input Anda Tidak Valid";
}

//Tampilkan Hasil
alert("Kamu memilih :" + p + "dan komputer memilih : " + comp + "\nMaka hasilnya : Kamu " + hasil);
tanya = confirm("Anda ingin mencoba lagi?");
}
alert("Terima Kasih Sudah bermain");