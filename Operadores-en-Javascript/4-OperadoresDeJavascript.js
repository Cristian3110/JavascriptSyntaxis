/*********************************
 * Operadores en Javascript
 *********************************/

let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma es: " + z);

z = a - b;
console.log("El resultado de la resta es: " + z);

z = a * b;
console.log("El resultado de la multiplicación es: " + z);

z = a/b;
console.log("El resultado de la división es: " + z);

z = a%b;
console.log("El resultado del módulo o residuo es: " +  z);

z = a**b;
console.log("El resultado del operador exponente es: " + z);



/******************************************************
 * Operador de Incremento y Operradores de Decremento
 * ****************************************************/


let c = 3, d = 2;
let x = c + d;

// Incremento
//Pre-incremento (el operador ++ antes de la variable)
console.log(c);
x = ++c;
console.log(x);
console.log(c);

//Post-incremento (el operador ++ después de la variable)
x = d++;
console.log(d);
console.log(x);

//Decremento
//Pre-decremento
x = --c;
console.log(c);
console.log(x);

//Post-decremento
x = d--;
console.log(d);
console.log(x);


