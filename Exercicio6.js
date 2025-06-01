function inverteString(str){
    let resultado = str.toLowerCase().trim();
    let palavrfa ="";
   for (let i = resultado.length -1; i >= 0; i--){
    palavrfa += resultado[i];
   }
   if (palavrfa === resultado){
    console.log(true);
   }else{
    console.log(false);
   }
   }

   inverteString("Arara");
   

