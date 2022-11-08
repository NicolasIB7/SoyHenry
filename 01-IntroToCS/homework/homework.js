'use strict';

function BinarioADecimal(num) {
   var invertida=num.split("").reverse();
  var sum = 0;
   for (let i=0;i<invertida.length;i++){
      sum=sum + invertida[i] * 2 ** i;
   }
   return sum ;
}

function DecimalABinario(num) {
   let binario=[];
   while(num!==0){
    let residuo=parseInt(num%2);
    num=Math.floor(num/2);
    binario.push(residuo);
   }return binario.reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
