/****************************
 *  Funciones en Javascript
 ****************************/

miFuncion(4,2);


//Declaración de la función
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

// Llamando a la función
miFuncion(5,6);

/**************************************************************************************
 * Hoisting: Significa que se puede hacer el llamado de la función antes o después de la misma.
 ***********************************************************************************/

/**********************************
 * Utilidad de la palabra RETURN
 ***********************************/

function otraFuncion (a,b){
    return a+b;
}

let resultado = otraFuncion(2,5);
console.log(resultado);
// otra manera de imprimir los valores
console.log(otraFuncion(2,2));

// Otra manera de declarar una función
//Declaración de una función de tipo expresión
let x = function (c,d){return c-d};

let resultado1 = x(9,6);
console.log(resultado);

// De otra manera
console.log("La resta de es " + x(5,4));

/***************************************************
 * Funciones de Tipop Self Invoking en Javascript
 *************************************************/

// Función anónima sin asignar a ninguna variable, función llamandose a si misma
// pero no se puede reutilizar solo se llama una vez

(function( a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

/***************************************
 * Funciones como Objetos en Javascript
 ****************************************/

// declarando la función

function tuFuncion(a, b){
    console.log(arguments.length);
    return a * b;
}
// con el método argument puedo saber cuantos argumentos tengo en mi función
let result = tuFuncion(2,5);
console.log(result);


// Metodo para comprobar que la función es texto

const miFuncionTexto = tuFuncion.toString();
console.log(miFuncionTexto);

