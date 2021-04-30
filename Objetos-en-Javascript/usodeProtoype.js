/********************************
 * Uso de Prototype en Javascript
 *********************************/

function persona(nombre, apellido, email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
};

// con este método podemos agregar valores a los distintos objetos
persona.prototype.telefono = '02123635454';

let padre = new persona('Nemecio', 'Carrillo', 'carrillo515@hotmail.com');
console.log(padre);
padre.telefono = '04128545588'; // con este cambio solo modifica el valor del padre
console.log(padre.telefono);


let madre = new persona('Carmen', 'Cegarra', 'aurora33@hotmail.com');
console.log(madre);
console.log(madre.telefono);
