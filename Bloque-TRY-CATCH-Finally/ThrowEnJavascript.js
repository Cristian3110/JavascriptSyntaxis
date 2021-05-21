/*************************************
 * Realizando las pruebas con Throw
 ************************************/
'use strict'
let resultado = -2;

try{
    //x = 10;
    if(isNaN (resultado)) throw 'No es un número';
    else if(resultado === '') throw 'Escadena vacía';
    else if(resultado >= 0) throw 'El valor es positivo';
    else if(resultado < 0) throw 'El valor es negativo';
}
catch(error){

    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina revisión de errores');
}

