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

    constructor(nombre, apellido, edad, sueldo){
        
        super(nombre, apellido, edad);
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
    
    constructor(nombre, apellido, edad, fechaRegistro){  

        super(nombre, apellido, edad);
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
        return this._fechaRegitro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }

}


let persona1 = new Personas('cristian','carrillo',33);
console.log(persona1.toString());

let persona2 = new Personas('Carmen', 'Cegarra', 61);
console.log(persona2.toString());

let empleado1 = new Empleados('Nemecio', 'Carrillo', 65, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleados('Maricarmen', 'Carrillo', 23, 7000);
console.log(empleado2.toString());

// Verificar el detalle de la fecha convirtiendola con una librería
let cliente1 = new Clientes('Angel', 'Delgado', 4, new Date());
console.log(cliente1.toString());

let cliente2 = new Clientes ('Alejandra', 'Peñalosa', 25, new Date());
console.log(cliente2.toString());