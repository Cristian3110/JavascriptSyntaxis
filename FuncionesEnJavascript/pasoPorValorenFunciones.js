/********************************************************************
 * Paso por valor y paso por referencia en funciones de Javascript
 *****************************************************************/
// Tipos primitivos 
let x = 10;

function cambiarValor(a){
    return a=20;
}

//Paso por valor
cambiarValor(x); //10
console.log(x);
//console.log(a); esto es debido a que se destruye el valor A


/*************************************************  
 * Paso por referencia en Funciones de Javascript
 *************************************************/

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Cristian';
    p1.apellido = 'Carrillo'
}
// Paso por referencia
cambiarValorObjeto(persona);

console.log(persona);




