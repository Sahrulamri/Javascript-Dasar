//Membuat Object
//Object Literal
var mhs1 = {
    nama : "Sandhika Galih",
    nrp : "0373826678",
    email : "sandhikagalih@unpas.ac.id",
    jurusan : "Teknik Informatika"
}

var mhs2 = {
    nama : "Doddy",
    nrp : "07383686839",
    email : "doddy@unpas.ac.id",
    jurusan : "Teknik Informatika"
}

//Function Declaration
function makingObjectMhs(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

//Cara manggil fungsinya /cara isi objectnya
//Bikin variabel = namaFunction(isi)

// Contoh :
var mhs3 = makingObjectMhs("erik", "75867698", "email@mhs.id", "Teknik Informatika")



//Constructor
function Mhs(nama,  nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
// Cara manggil Constuctor
// bikin variabel = new namaFunction(isi)

//Contoh :
var mhs4 = new Mhs(nama, nrp, email, jurusan)