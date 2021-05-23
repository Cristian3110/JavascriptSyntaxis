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

