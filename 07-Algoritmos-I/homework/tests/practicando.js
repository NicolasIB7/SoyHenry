function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    for(let i=0;i<array.length;i++){
      for(let j=0;j<array.length-i-1;j++){
      if(array[j]>array[j+1]){
        let va=array[j]
        array[j]=array[j+1];
        array[j+1]=va;
      }}}
  
   return array;  
  }