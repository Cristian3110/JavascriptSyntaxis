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

let empleado1 = new Empleado('Nemecio', 3000);
console.log(empleado1.obtenerDetalles());


let gerente1 = new Gerente('Carmen',1500,'Educación Especial');
console.log(gerente1);

console.log(gerente1.obtenerDetalles());
// No se refleja el detalle en el objeto creado de departamento, entonces realizamos la sobreescritura

