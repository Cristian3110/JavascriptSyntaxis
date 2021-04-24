

//Empezando por lo Básico

var saludo = "Hola Mundo";

console.log(saludo);


/******************************
 * Tipo de Datos en Javascript 
 * ***************************-*/ 

/// Tipo de datos String

var nombre = "Cristian";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato númerico
var numero = 1987;
console.log(numero);

// tipo de dato object
var objeto = {
    nombre: "Nemecio",
    apellido: "Carrillo",
    edad: 62,
    telefono: 04142153535
};
console.log(objeto);
console.log(typeof objeto);


// tipo de dato boolean (true, false)

var bandera = true;  // también puede ser false
console.log(bandera);
console.log(typeof bandera);


// Tipo de datos Function

function miFuncion (){};
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de Datos Symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

// sabemos que las clases en Javascript es una función
console.log(Persona);
console.log(typeof Persona);

// Tipo de datos Undefined

var x;
console.log(x);
console.log(typeof x);

x = undefined;
console.log(x);
console.log(typeof x);


//Debido a que no le hemos asignado el valor de la variable e igual es un tipo de dato


// Tipo de Datos NULL = Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);


// Tipos de Dato Array

var autos = ['neon','blazer','chevette'];
console.log(autos);
console.log(typeof autos);


// valores vacios
var z = '';
console.log(z);
console.log(typeof z);
















