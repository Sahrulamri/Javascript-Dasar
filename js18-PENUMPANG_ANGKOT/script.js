//passenger = jumlah penumpang / index array/ nomor kursi
//nameofpassenger = nama index array
//nomor kursi = (jumlah penumpang - 1)
var passenger = [];
var addPassenger = function(nameOfPassenger, passenger) {
// Jika Angkot Kosong
    if (passenger.length === 0) {
    //Tambah penumpang di awal array
    passenger.push (nameOfPassenger);
    //Kembalikan isi array & keluar  dari function
    return passenger;
    }
// Else if
    //Telusuri seluruh kursi dari awal
    for(var i = 0; i < passenger.length; i++) {
         //Jika ad kursi kosong
         if (passenger [i] === undefined) {
         //tambah Penumpang di kursi tersebut
            passenger [i] == nameOfPassenger
         //Kembalikan isi array & keluar dari function
         return passenger;
         }
    }
    //Jika sudah ada nama yang sama
        if (passenger[i] == nameOfPassenger) {
    //Tampilkan pesan kesalahannya
        console.log(nameOfPassenger + "sudah berada di dalam angkot");
    //Kembalikan isi array  & keluar dari function
    return passenger;
    }
    // Jika seluruh kursi terisi
    else if (i == passenger.length - 1) {
    //Tambah penumpang di akhir array
    passenger.push(nameOfPassenger);
    //Kembalikan isi array & keluar dari function
    return passenger;
    }
}


// REMOVE PASSENGER
var passenger = [];
var removePassenger = function(nameOfPassenger, passenger) {
    //If urban transportation is empty
    if (passenger.length == 0) {
        //Show the message that urban transportation is empty
        console.log("no one passenger there");
        //there is no possibility of any passengers getting off
        //Return value of array & get out from the function
        return passenger;
    } else { // Else If
        
        for (var i = 0; i < passenger.length; i++) {
            //if the passenger name has matches
            if (passenger[i] == nameOfPassenger) {
            //Remove passenger with changing the name //Become undefined
                passenger[i] = undefined;
                //Return the value of array & Get out from the function
                return passenger;
            } else if ( i == passenger.length - 1) {
                console.log(nameOfPassenger + "is not in there ");
                return passenger;
            }
        }
    }
}   















