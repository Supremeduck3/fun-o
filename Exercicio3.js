function maiorDetres (a,b,c){
    let i = 0
    let lst = [a,b,c]
    let maior = lst[0]
    while (i < lst.length ){
        if(lst[i] > maior){
            maior = lst[i]
        }
        i++
    }
    console.log(maior)
}

maiorDetres(2,73,1)
maiorDetres(2455,71,21)
maiorDetres(25,-3,1)
