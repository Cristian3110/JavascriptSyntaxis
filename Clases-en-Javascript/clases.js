/***********************
 * Clases en Javascript
 ************************/
// Las clases se identifican con mayúsculas al principio

class Persona{
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    };
    
    // colocando los métodos GET y SET 
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

// Dos objetos creados a partir de la misma clase

let persona1 = new Persona('Angel','Delgado');
console.log(persona1);

let persona2 = new Persona('Mariana','Castillo');
console.log(persona2);

// mostrando el resultado del método GET
let persona3 = new Persona('Oscar','Dominguez');
console.log(persona3.nombre);
 
// mostrando el resultado de la modificación del método SET
persona3.nombre = 'Alvaro'; // SET nombre
console.log(persona3.nombre); // GET nombre


