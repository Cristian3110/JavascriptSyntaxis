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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    /*****************************************
     * Sobreescribiendo el método toString()
     * Sobreescribiendo el metodo de la clase Padre (object)
     ****************************************/
    toString(){
        // Se aplica polimorfismo en este código (multiples formas en tiempo de ejecución)
        // el método que se ejecuta depende del tipo de referencia de clase Padre o Hija
        return this.nombreCompleto();
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
        // Sobreescritura en Javascript
        // Debe ser el mismo nombre que el q está en la clase padre
        nombreCompleto(){
            //return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
            // Se coloca la instancia Super con el método instanciado en la clase padre
            return super.nombreCompleto() + ' ' + this._departamento;
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
empleado1.nombre = 'Alejandro';
console.log(empleado1.nombre);

//Accediendo al nombre completo que es una función
// 
console.log(empleado1.nombreCompleto());

/************************************************************************************
 * Clase Object, Metodo toString.
 * Sobreescritura y Polimorfismo en Javascript
 ***********************************************************************/

// Este método se llama como Polimorfismo
// Se hace un llamado a una instancia de la clase hija
console.log(empleado1.toString());

// Se hace un llamado a una instancia de la clase padre
console.log(persona1.toString());
