/****************************
 * Método constructor en JS
 *****************************/

// funcion constructor de objetos de tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Nemecio','Carrillo','carrillo618@yahoo.com');
console.log(padre);

let madre = new Persona('Carmen','Cegarra','carmencega@hotmail.com');
console.log(madre);
