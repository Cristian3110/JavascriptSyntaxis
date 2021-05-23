/*****************************************************************
 * Palabras async 
 * Ésta palabra lo que indica es que la función va a regresar una promesa
 *******************************************************************/

 let promesa = new Promise((resolve=>{
    
    setTimeout(()=> resolve('Saludos desde Promesa1 y timeout a los 3seg'),3000);
    
}));


async function miFuncionConPromesa(){
    return ('Saludos con Promesa y Async');
}

miFuncionConPromesa().then((valor)=>console.log(valor));


