function fatorial (a){
    num = a
    for (let i = 1; i < a ; i++){
        num *= i
    }
    return console.log(num)
}

fatorial(4)