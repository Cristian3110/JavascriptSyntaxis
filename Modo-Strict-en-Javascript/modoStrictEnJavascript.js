/******************************
 * Modo estricto en Javascript
 ******************************/

"use strict"

const f = 25;

console.log(f);


// También se pueden visualizar en las funciones

miFunction();
// declarandola en el scope global
var y;

function miFunction(){
    // "use strict" por ejemplo y obligaría a declarar la variable en el scope local
   return y = 15;
}

console.log(miFunction());


/***************************************************************************************************
 * cabe destacar que el uso de la palabra "use strict" obliga a declarar las variables y no las toma 
 * de manera automática. Es un comportamiento como Typescript
 * Se puede utilizar al inicio de una función o al inicio de nuestro programa
 **************************************************************************************************/