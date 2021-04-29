/***********************************
 * Agregar y eliminar objetos en Js
 ***********************************/


let persona = {
    nombre: 'Cristian',
    apellido: 'Carrillo',
    email: 'cristian@hotmail.com',
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Agregando una propiedad al objeto
persona.tel = '02125255566';
// verificando
console.log(persona);

//Eliminado una propiedad en el objeto
delete persona.tel;

console.log(persona);

// Distintas formas de imprimir un object en Js

// Concatenar cada valor  de cada propiedad
console.log(persona.nombre + ',' + persona.apellido);

// for in

for ( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// imprimiendo recorriendo el array personaArray

let personaArray = Object.values(persona);
 console.log(personaArray);

// imprimiendo transformandolo en un string

 let personaString = JSON.stringify(persona);
 console.log(personaString);
