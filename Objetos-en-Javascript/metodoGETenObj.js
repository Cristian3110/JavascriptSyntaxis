/*************************************
 * Método get en objetos de Javascript
 *************************************/

let persona = {
    nombre: 'Maricarmen',
    apellido: 'Carrillo',
    edad: 23,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);