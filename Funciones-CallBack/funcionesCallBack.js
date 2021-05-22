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





