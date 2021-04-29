/*************************************
 * Método get en objetos de Javascript
 *************************************/

let persona = {
    nombre: 'Maricarmen',
    apellido: 'Carrillo',
    edad: 23,
    idioma: 'es',
    get lang(){
        // recuperando el valor y lo convertimos en mayúsculas
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang){
        // modificando la información de la propiedad
        this.idioma = lang.toLocaleUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = 'us';

console.log(persona.lang);
