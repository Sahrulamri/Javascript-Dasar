//Making Object
var mhs = {
    name : "Sandhika galih",
    age : 31,
    ips : [3.00, 4.00, 2.50, 3.50],
    Address :{
        road  : "Road. abc No. 224",
        city : "Bandung",
        province : "West Java"
    } 
};

// var nameMhs = "Sandhika Galih";
// var ageOfMhs = 31;
// var lulus = true;
// var IPSemester = [3.00, 4.00, 2.50, 3.50];

// function IPKumulatif(IPSemester) {
//     var total : 0;
//     for( var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// };

// var mahasiswa = ["Sandhika galih", true, [3.00, 4.00, 2.50, 3.50]];

// function IPKumulatif(IPSemester) {
//     var total : 0;
//     for( var i = 0; i < IPSemester.length; i++) {
//     total += IPSemester[i];
//     }
//     return total/IPSemester.length;
//     };
//     IPKumulatif(mahasiswa[2]);

//ANATOMY OF OBJECT

var people = {
    name : "Sandhika Galih", //Property : Variabel yang ada di dalam object
    age : 31, //Property
    work :Dosen, //Property
    sapa : function() {
        return "Hi, my name is" + this.name + "i am" + this.age + "years old, and i am a " + this.work; //Method : Function yang ada di dalam object.
    }
}