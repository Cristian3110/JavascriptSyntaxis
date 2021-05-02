/******************************************************************
 * Palabra STATIC en javascript, utilizandolas en bas de las clases
 ******************************************************************/


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
   
    toString(){
        
        return this.nombreCompleto();
    }
   
    static saludar(){
        console.log('Saludos desde método stactic');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{

        constructor(nombre, apellido, departamento){
            super(nombre, apellido);
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){
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

// No se puede llamar a un método stactic desde un objeto
// persona1.saludar();

Persona.saludar();

Persona.saludar2(persona1);

// llamando el método desde la clase empleado
Empleado.saludar();
Empleado.saludar2(empleado1);
// Se reflejan desde nuestras clases y no desde los objetos

