for (i = 10; i >=1; i--) {
    console.log(i);
}

// PENGUBAHAN KE DALAM BENTUK FUNGSI REKRUSIF

function showNumber(n) {
    if(n=== 0) return;
    console.log(n);
    return showNumber(n-1)
}
showNumber(10);

//LOOPING FAKTORIAL

function faktorial(n) {
    var hasil = 1;
    for (var i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
}

//REKRUSIF FAKTORIAL

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}