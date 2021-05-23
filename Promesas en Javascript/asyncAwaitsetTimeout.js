/*********************************************
 * Promesas, Async, await, setTimeout en Javascript
 * ****************************************/

async function funcionPromesaAwaitTimeout(){
    console.log('inicio de la promesa');
    let miPromesa = new Promise(resolve =>{
        setTimeout(()=>resolve('Promesa con Await y Timeout'),3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la promesa');
}


funcionPromesaAwaitTimeout();

/**
 * La palabra await solo se puede utilizar cuando se coloca la palabra async en una función
 * para específicar que esa función retorna una promesa, para esperar una ejecución determinada
 */


