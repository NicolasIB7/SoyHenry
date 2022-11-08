# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //asigna un valor solo a esa X
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); //será igual a 10
   console.log(a); //será igual al valor pasado como parametro a la funcion c.
   var f = function (a, b, c) {
      b = a;
      console.log(b); // será igual a 8
      b = c; // será igual a 10
      var x = 5; // dentro de f x valdrá siempre 5
   };
   f(a, b, c);
   console.log(b); // valdrá 9
};
c(8, 9, 10);
console.log(b); // valdrá 10
console.log(x); // valdrá 1
```

```javascript
console.log(bar); // null o undefined
console.log(baz); // null o undefined
foo(); // dirá hola!
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // franco
   }
})();
console.log(instructor); //tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash'; 
   let pm = 'Reverse Flash'; 
   console.log(instructor); // the flash
   console.log(pm); //reverse flash 
}
console.log(instructor);// the flash, porque la variable instructor está declarada con VAR por eso no muere en bloque como LET pm
console.log(pm);//franco
// let nace y muere dentro de un bloque, tiene un alcance de bloque, por eso el let pm de reverse flash solo nace y muere dentro del bloque de IF
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // "6"
4 + 5 + "px" // 9px
"$" + 4 + 5 // 
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0// por que en este 5
0 || 5// por que en este 5
[3]+[3]-[10] //23??
3>2>1// falso porque 3 es mayor que 2, o sea es verdadero y verdadero no es mayor a 1 por eso es falso
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefined primero ya que todavia no declaramos la variable y 2 ya que en este caso al ser una funcion cuando indiquemos que la muestr en pantalla va a ver que valor posee la funcion
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);//el if al no ejecutarse el parmetro snack queda vacio, al retornar snack dentro de la funcion vemos que no encuentra valor, por eso undefined
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//aurelio de rosa

var test = obj.prop.getFullname;

console.log(test()); //undefined ya que a la var test le asignamos el nombre de la funcion(sin parentesis) por eso el this se pierde, si le poniamos parentesis era diferente ya que le estamos diciendo que me devuelva lo que retorna esa funcion.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();//1,4,3,2
```
