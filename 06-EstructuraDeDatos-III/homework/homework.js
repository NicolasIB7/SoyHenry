'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value;
   this.right=null;
   this.left=null;
}
BinarySearchTree.prototype.depthFirstForEach=function(cb, type){
switch(type){
   case "pre-order":
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb,type);
      if(this.right) this.right.depthFirstForEach(cb,type);
      break;
   case "post-order" :
      if(this.left) this.left.depthFirstForEach(cb,type);
      if(this.right) this.right.depthFirstForEach(cb,type);
      cb(this.value);
      break;
   default:
      if(this.left) this.left.depthFirstForEach(cb,type);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb,type);
}
}

BinarySearchTree.prototype.breadthFirstForEach=function(cb, pend){
   if(!pend){
      var pend =[];
   }
   cb(this.value);

   if(this.left) pend.push().breadthFirstForEach(this.left);
   if(this.right) pend.push().breadthFirstForEach(this.right);

   if(pend.length) pend.shift().breadthFirstForEach(cb,pend);

} 


BinarySearchTree.prototype.size=function(){
  let count=0;
  count++;
   if(this.left){
      count+=this.left.size();
   }
   if(this.right){
      count+=this.right.size();
   }
 return count;
 }
 
BinarySearchTree.prototype.insert=function(value){
   if(value<this.value){
      if(this.left){
         this.left.insert(value);
      }else{
         this.left=new BinarySearchTree(value);
      }
   }
   if(value>this.value){
      if(this.right){
         this.right.insert(value);
      }else{
         this.right=new BinarySearchTree(value);
      } 
   }
return null;
}

BinarySearchTree.prototype.contains=function(value){
   if(this.value===value) return true;

   if(value<this.value && this.left){
      if(this.left.contains(value))
      return true;  
   }
   
   if(value>this.value&&this.right){
     if(this.right.contains(value))
     return true;
   }
   return false;
}


let tree=new BinarySearchTree(20);


tree.insert(4);
tree.insert(23);
tree.insert(5);
tree.insert(3);
tree.insert(2);
console.log(tree)
console.log(tree.size());
console.log(tree.contains(6))
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
