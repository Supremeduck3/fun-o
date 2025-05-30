function inverteString(str){
    let divisão = str.split('');
    let invt = '';
   for (let i = divisão.lenght -1; i >= 0; i--){
    invt += divisão[i]
   }
   return divisão
   }

console.log(inverteString('Thiago'))