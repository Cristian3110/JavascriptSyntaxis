/*************************************************************************************
 * Funciones callback en Javascript
 * 
 * Éstas funciones lo que hacen es llamar a otras funciones, a través de los parámetros.
 * Debemos saber que las funciones se ejecutan de manera secuencial, por consiguiente, las funciones callback
 * nos ayudan a ejecutar funciones de manera personalizada, ya que son llamadas cuando se encesitan a 
 * través de los parámetros
 ***************************************************************************************/

function miFuncion1 (){
    console.log('Mi función 1');
}
//Haciendo el llamado
miFuncion1();

function miFuncion2 (){
    return 'Mi función 2';
}
console.log(miFuncion2());

// Declarando una función tipo CallBack

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado es: ${res}`);
}

sumar(5,3,imprimir);

/**
 * Llamadas asíncronas con el uso de setTimeout
 * Con ésta función podemos hacer variantes en el tiempo en la ejecución de funciones.
 * 
 */

function funcionTipoCallback (){
    console.log('Saludo asíncrono después de 3 seg');
}

setTimeout(funcionTipoCallback,3000); //Después de 3 segundos

setTimeout(function(){console.log('Saludo 2 con 5 segundos')},5000);

setTimeout(() => {
   console.log('Una función setTimeout a los 8 seg'); 
}, 8000);

setTimeout(() => console.log('Ahora asíncrono con 10 seg'), 10000);




