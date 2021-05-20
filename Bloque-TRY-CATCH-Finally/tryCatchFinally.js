/************************************************
 * Manejo de errores con TRY and CATCH
 * 
 * Con este bloque lo que se logra es manejar el error en nuestro programa, nos indica el nombre y la 
 * referencia del error presentado. También sigue el programa ejecutandose, evitando que se detenga de 
 * manera abructa.
 * 
 * También la cláusula THROW la podemos utilizar si queremos o necesitamos programar el mensaje
 * de nuestros propios errores 
 *********************************************/

"use strict"


try{
    let x = 0;
    x = 0;
    //miFuncion();
    throw 'Mi error';

}catch(error){
    
    console.log(error);
}
//Este bloque es opcional, ya depende del dev y el programa si se coloca o no!
finally{
    console.log('Finaliza la revisión de errores');
}
console.log('continuamos...');
