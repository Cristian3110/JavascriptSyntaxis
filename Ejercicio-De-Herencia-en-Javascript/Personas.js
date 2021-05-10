/*************************************************
 * Ejercicio de Herencia, creando clase Personas
 *********************************************/


class Personas {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){


        this._idPersona = ++Personas.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad = edad;
    }
    
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}

/******************************************
 * Ejercicio de herencia clase de empleados
 *******************************************/

 class Empleados extends Personas{

    static contadorEmpleados = 0;

    constructor(sueldo){
        
        
        this._idEmpleado = ++Empleados.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }

}


/****************************************
 * Ejercicio de Herencia clase Clientes
 *****************************************/

 class Clientes extends Personas{

    static contadorClientes = 0;
    
    constructor(fechaRegistro){  

        let fechaIngreso = new Date();

        this._idCliente = ++Clientes.contadorClientes;
        this._fechaRegitro = fechaRegistro;

    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){

        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        return this._fechaRegitro =fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fecha}`;
    }

}



