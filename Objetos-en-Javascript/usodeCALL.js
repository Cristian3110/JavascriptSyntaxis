/***************************
 * Uso de CALL en Javascript
 **************************/

let persona1 = {
    nombre: 'Angel',
    apellido: 'Delgado',
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Maricarmen',
    apellido: 'Carrillo'
}

// Uso de call para llamar
// El método persona1.nombreCompleto con los datos del persona2

console.log(persona1.nombreCompleto());

// con este llamado CALL podemos reutilizar la función de un objeto, dado que tenemos el mismo atributo en otro objeto
console.log(persona1.nombreCompleto.call(persona2));

