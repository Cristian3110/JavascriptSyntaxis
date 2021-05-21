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

//Función flecha 
const funcionFecha2 = (c,d) => console.log(`El resultado de la resta es: ${c-d}`);
funcionFecha2(5,3);

const saludar = ()=>{
    return  'Saludos desde saludar';
}
console.log(saludar());

// Para simplificar la estructura de una función flecha puede ser así
const saluddar2 = () => 'Saludos desde saludar2';
console.log(saluddar2());

const regresarObjeto = ()=>({nombre: 'Cristian', apellido:'Carrillo'});
console.log(regresarObjeto());

//Funciones con parámetros
const funcionConParametros = (mensaje)=> console.log(`Tu mensaje introducido fue: ${mensaje}`);
funcionConParametros('Saludos desde la Función con Parámetros');

const funcionParametros1 = (msj)=> `EL mensaje que introdujiste fue: ${msj}`;
console.log(funcionParametros1('Hola'));

const salida = mensaje => `EL mensaje de salida es: ${mensaje}`;
console.log(salida('EXIT'));

const multiplicacion = (num1,num2)=>{
    let resultado = num1 * num2;
    return resultado;
}
console.log(multiplicacion(5,6));




