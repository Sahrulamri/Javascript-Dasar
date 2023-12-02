//Alert

alert("Hello World!");
alert('nama');
alert('saya');
alert('Sahrul Amri'); 

//Prompt

// prompt('Masukkan Nama Anda:');
var nama = prompt('Masukkan Nama Anda');
alert(nama);


//confirm
confirm('Apakah Anda yakin akan Melanjutkan penelusuran Ini??');
var test = confirm('Apakah Anda yakin akan Melanjutkan penelusuran Ini??');
//alert(test);
/*
if (test === true ) {
    alert('User menekan tombol OK!');
} else {
    alert('User menekan CANCEL!');
}
*/

alert('Selamat Datang');
var lagi = true;


while(lagi === true) {
    var nama = prompt('Masukkan Nama Anda :');
    alert('halo ' +  nama);

    lagi = confirm("coba lagi?");
}

alert("terima kasih");