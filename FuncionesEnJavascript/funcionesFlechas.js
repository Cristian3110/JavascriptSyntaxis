/*************************************
 * Funciones Flechas o Arrow Function
 *************************************/

const sumar = (a, b)=> a + b;
resultado = sumar(5,8);
console.log("La suma es :" + resultado);

/******************************************************
 * Praámetros y Argumentos en funciones de Javascript
 * 
 * Parámetros son las variables donde van los argumentos de nuestra función
 *****************************************************/

let suma = function (c,d){
    // imprimiendo los valores 
    console.log(arguments[0]);
    console.log(arguments[1]);

    return c+d;
}

resultado1 = suma(5,3);
console.log(resultado1);


// tambien podemos colocar o asignarle valores por default en los argumentos

const prueba = function (h=1, j=9){
    return h - j; 
};
console.log(prueba());

// cómo puedo agregar un valor sin estar en los argumentos, recuerden que son arrays

let prueba2 = function ( x=2, y=6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return x + y + arguments[2];
};

resultado2 = prueba2(2,5,3);
console.log(resultado2);

/***********************************************
 * Ejemplo de como Sumar todos los argumentos
 ***********************************************/

let resultado3 = sumarTodo (5, 4, 13, 10, 9, 2);
console.log(resultado3);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma; 
};




