/***********************************
 * Agregar y eliminar objetos en Js
 ***********************************/


let persona = {
    nombre: 'Cristian',
    apellido: 'Carrillo',
    email: 'cristian@hotmail.com',
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Agregando una propiedad al objeto
persona.tel = '02125255566';
// verificando
console.log(persona);

//Eliminado una propiedad en el objeto
delete persona.tel;

console.log(persona);

