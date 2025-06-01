function filtarPares(...number){
    for (let i = 0; i <= number.length-1; i++) {
        if (number[i] % 2 == 0){
        console.log(number[i]);
    }
}
}

filtarPares(1,2,3,4,5,6,7,8,9)