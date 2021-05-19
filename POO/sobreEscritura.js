/********************************
 * Sobreescritura en Javascript
 ******************************/

class Empleado {

    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado{

    constructor(nombre, sueldo, departamento){

        super(nombre,sueldo);
        this.departamento = departamento;
    }
    // Agregando la sobreescritura desde la clase hija para q la clase padre la refleje
    //Y agregamos también el detalle de la clase padre
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Dpto: ${this.departamento}`;
    }
}

/** ***********************************************************************************************************
 * Polimorfismo: Con el siguiente método vamos a poder realizar con un solo método, realizar multiples formas
 * o multiples acciones, ya ses para llamar algún método de la clase padre o hija.
*****************************************************************************************/

function imprimir(tipo){
    // Depende del tipo va a imprimri el detalle de la clase padre o hija
    console.log(tipo.obtenerDetalles());
}

let empleado1 = new Empleado('Nemecio', 3000);
let gerente1 = new Gerente('Carmen',1500,'Educación Especial');

//console.log(gerente1.obtenerDetalles());
// No se refleja el detalle en el objeto creado de departamento, entonces realizamos la sobreescritura

imprimir(empleado1);
imprimir(gerente1);
