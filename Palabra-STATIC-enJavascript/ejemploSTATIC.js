/******************************************************************
 * Ejemplo de la palabra STATIC
 ******************************************************************/


 class Persona {

    // Atributo estático
    static contadorPersona = 0; // atributos de nuestra clase

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
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
console.log(persona1.toString());

// Creando el objeto de tipo empleado, con los atributos heredados de la clase padre
let empleado1 = new Empleado('Mariana','Alcalá','Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona('Nemecio', 'Carrillo');
console.log(persona2.toString());

