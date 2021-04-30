/****************************
 * Método constructor en JS
 *****************************/

// funcion constructor de objetos de tipo persona

function persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new persona('Nemecio','Carrillo','carrillo618@yahoo.com');
console.log(padre);

let madre = new persona('Carmen','Cegarra','carmencega@hotmail.com');
console.log(madre);

// modificando algo puntual
padre.email = 'carrillo852@hotmail.com';
console.log(padre);

//mostrando el nombre completo
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

/***************************************************
 * Distintas formas de crear Objetos en Javascript
 * ***********************************************/

let miObjeto = new Object ();
let miObjeto2 = new Object ();

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};



