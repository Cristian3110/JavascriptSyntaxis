/*************************************************
 * Ejercicio de Herencia, creando clase Personas
 *********************************************/


class Personas {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){


        this._idPersona = ++contadorPersonas;
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



