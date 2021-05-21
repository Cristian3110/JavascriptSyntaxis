/**
 * Funciones flechas o arroy function
 */

function miFuncion(){
    console.log('LLamada desde mi función');
}

miFuncion();


//Tambien se puede colocar definida en una variable
let miFuncion1 = function(){
    console.log('Llamada a una función asignada a una variable');
}

miFuncion1();

// Estructura de una función flecha
let miFuncionFecha = () => {
    console.log('Llamada desde mi función flecha');
}
miFuncionFecha();


//Ejemplo1
const adicion = (a,b)=>{
    return a+b;
}
console.log(`El resultado de la suma es: ${adicion(1,9)}`);





