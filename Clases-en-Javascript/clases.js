/***********************
 * Clases en Javascript
 ************************/
// Las clases se identifican con mayúsculas al principio
class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    };
}

// Dos objetos creados a partir de la misma clase

let persona1 = new Persona('Angel','Delgado');
console.log(persona1);

let persona2 = new Persona('Mariana','Castillo');
console.log(persona2);

