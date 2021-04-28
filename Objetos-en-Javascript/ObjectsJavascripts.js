/*************************
 * Objects in Javascript
 ***************************/

let x = 10; // Los tipos primitivos no tienen atributos o métodos
console.log(x.length);

let persona = {
    nombre: 'Angel',
    apellido: 'Delgado',
    email: 'angeldamiandc@hotmail.com',
    edad: 4,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);
console.log(persona.nombreCompleto());
// ya que es una función se imprime o evalúa como tal ()



