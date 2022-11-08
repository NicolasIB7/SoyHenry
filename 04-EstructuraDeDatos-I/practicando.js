//                                        EJERCICIOS EXTRA RECURSIVIDAD QUE DIÓ LA PROFESORA


//Escribí una función llamada power que reciba dos parámetros: base y exponente. La función deberá retornar la potenciación correspondiente - es decir, la base elevada al exponente.
//Nota: recuerden contemplar el caso de las potenciaciones con exponente 0 

function power(base, exponent){
    if(exponent===0){
        return 1;
    }
    if(exponent===1){
        return base;
    }

    return base * power(base,(exponent-1));
}

/////////////////////////////////////////////////////////////////////////////////////

// Escribí una función llamada productOfArray que reciba un arreglo de números y retorne el producto de todos ellos.

function productOfArray(arr){
    if(arr.length===1){
        return arr[0];
    }

    return arr.pop() * productOfArray(arr)
}


// Ejemplos:
// productOfArray([1,2,3]) debería retornar 6
// productOfArray([1,2,3,10]) debería retornar 60

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Escribí una función llamada recursiveRange que reciba como único argumento un número, y retorne la suma de todos los números enteros desde 0 hasta dicho número.



function recursiveRange(num){
    if(num===0){
        return 0;
    }
    return num + recursiveRange(num-1);
}


// Ejemplos: 
// recursiveRange(6) debería retornar 21
// recursiveRange(10) debería retornar 55


