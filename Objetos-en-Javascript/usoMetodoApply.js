/**********************
 * Uso de método Apply
 ***********************/


 let persona = {
    nombre: 'Nemecio',
    apellido: 'Carrillo',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona1 = {
    nombre: 'Alfredo',
    apellido: 'Rodriguez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}


let persona2 = {
    nombre: 'Cristian',
    apellido: 'Cegarra'
}

console.log(persona.nombreCompleto('ingeniero',2123635454));

// Funciona exactamente igual que con el método CALL
console.log(persona1.nombreCompleto.apply(persona2));

//Ahora veamos la diferencia agregandole los valores en los parámetros
// La diferencia es la forma en que se pasan los valores de los argumentos
let arreglo = ['ingeniero', 3635456895];
console.log(persona.nombreCompleto.apply(persona2,arreglo));

console.log(persona.nombreCompleto.apply(persona2,['Licenciado, 2126368954']));

