/*****************************
 * Precedencia de Operadores
 *****************************/

let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);


// Operador de Asignación

let g = 1;

g += 3; // a = a + 3
console.log(g);

g -= 2; // a = a - 2
console.log(g);

/***************************
 *=
/=
%=
**=

*****************/

g *= 2;
console.log(g);

g /= 2;
console.log(g);

g = 3;

g %= 2;
console.log(g);

g = 5;

g**=2;
console.log(g);




