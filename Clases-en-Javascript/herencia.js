/*************************
 * Herencia en Javascript
 **************************/

class Persona {

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
}

// Heredando con la palabra EXTENDS en javascript
class Empleado extends Persona{

    // declaramos en el contructor los parámetros de la clase padre
        constructor(nombre, apellido, departamento){
            // hacer un llamado al constructor de la clase padre
            super(nombre, apellido);
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
}

// Creando un objeto en Persona
let persona1 = new Persona('José','Carrillo');
console.log(persona1); // get persona

// Creando el objeto de tipo empleado, con los atributos heredados de la clase padre
let empleado1 = new Empleado('Mariana','Alcalá','Sistemas');
console.log(empleado1);

// ejecutando el GET para traer el valor de nombre
console.log(empleado1.nombre);

// ejecutando el SET para modificar el nombre original por el asignado
empleado1.nombre = 'alejandro';
console.log(empleado1.nombre);
