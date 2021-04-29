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
//--------------------------------------------------------------------------------

// Otra manera de ingresar a las propiedades como arreglo

persona['apellido'];
console.log(persona['apellido']);

// recorrer cada una de las propiedades de nuestro objeto con el for in

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


/********************
 * Creando nuevo objetos con la palabra New
 *********************/

let persona2 = new Object();

persona2.nombre = 'nemecio';
persona2.direccion = 'Saturno 15';
persona2.tel = 04125252;


console.log(persona2.tel);


