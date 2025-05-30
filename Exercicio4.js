function inverteString(str){
    let palavrfa = ""
   for (let i = str.lenght -1; i >= 0; i--){
    palavrfa += str[i]
   }
   return palavrfa
   }

console.log(inverteString('Thiago'))