/******************************************
 * Ejercicio de herencia clase de empleados
 *******************************************/

class Empleados extends Personas{

    static contadorEmpleados = 0;

    constructor(sueldo){

        this._idEmpleado = ++contadorEmpleados;
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
