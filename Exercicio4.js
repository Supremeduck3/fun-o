function inverteString(str){
    let palavrfa =""
   for (let i = str.length -1; i >= 0; i--){
    palavrfa += str[i]
   }
   return palavrfa
   }

console.log(inverteString('Thiago'))