'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n===0 || n===1){
      return 1;
   }
   if(n<0){
      return "No existe factorial";
   }
   
   return n * nFactorial(n-1);

}

// EJERCICIO 2
function nFibonacci(n) {
if(n<=1){
   return n}
else {
   return (nFibonacci(n-1)+ nFibonacci(n-2)) }
}
console.log(nFibonacci(4))

// EJERCICIO 3
function Queue() {
   this.array=[];
}

Queue.prototype.dequeue=function(){
   return this.array.shift();
}

Queue.prototype.enqueue=function(elemento){
   return this.array.push(elemento);
}

Queue.prototype.size=function(){
   return this.array.length;
}

const queue= new Queue();


console.log(queue.size())
queue.enqueue(3);
console.log(queue)



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
