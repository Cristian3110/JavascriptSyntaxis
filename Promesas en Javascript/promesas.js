/****************************
 * Promesas en Javascript
 ***************************/

//Syntaxis básica

let miPromesa = new Promise((resolve, rejected)=>{

    let expresion = true;
    if( expresion==true)
        resolve('Resolvió correcto');
    else
        rejected('Se produjo un error')
});

// En el caso de then
miPromesa.then(valor => console.log(valor), error=> console.log(error));

//En el caso de CATCH
miPromesa.then(valor =>console.log(valor)).catch(error=>console.log(error));


 //Otro ejemplo:
 
let promesa1 = new Promise((resolve=>{
    console.log('Inicio de la Promesa')
    setTimeout(()=> resolve('Saludos desde Promesa1 y timeout a los 3seg'),3000);
    console.log('Fin de la promesa')
}));

promesa1.then(valor1 => console.log(valor1));
 
