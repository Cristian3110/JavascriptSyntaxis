/****************************
 * Método constructor en JS
 *****************************/

// funcion constructor de objetos de tipo persona

function persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new persona('Nemecio','Carrillo','carrillo618@yahoo.com');
console.log(padre);

let madre = new persona('Carmen','Cegarra','carmencega@hotmail.com');
console.log(madre);

// modificando algo puntual
padre.email = 'carrillo852@hotmail.com';
console.log(padre);

//mostrando el nombre completo
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

