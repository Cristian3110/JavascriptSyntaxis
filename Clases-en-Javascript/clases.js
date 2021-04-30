/***********************
 * Clases en Javascript
 ************************/
// NO es posible crear objetos antes de la declaración de clases
// No se aplica el concepto de hoisting  
//let persona4 = new Persona('alberto', 'granado');// Cannot access 'Persona' before of initialization

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


/***********************************************************************
 * Hoisting y clases en Javascript
 * NO SE PUEDE CREAR UN NUEVO OBJETO ANTE DE LA DECLARACIÓN DE LA CLASE
 *******************************************************************/

// Ahora si
let persona5 = new Persona('Alejandra','Caraballo');
console.log(persona5);


