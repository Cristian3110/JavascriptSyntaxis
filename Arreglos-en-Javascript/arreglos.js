/***************
 * ARREGLOS
 ***************/

/*****************************************************************************************************
Así se declaraban los arreglos anteriormente, ya no es recomendable, pero para que los tengan presente 

let autos = new Array("chevette","neon","cavaliers","explorer");
*****************************************************************************************************/

const autos = ['chevette','neon','cavaliers','explorer'];

console.log( autos );


// Recorridos los elementos de un arreglo

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);
console.log(autos[3]);

    for (let i = 0; i < autos.length; i++){
        console.log(i + ':' +autos[i]);
    }

    console.log(autos[1]);

/*****************************************
 *  Modificar elementos en los arreglos
 * Método push
 *****************************************/ 

    autos.push('BMW');

    console.log(autos);

    // mostrando el largo o elementos de nuestro arreglo

    console.log(autos.length);

    // agregando un elemento en el arreglo al final del indice

    autos[autos.length] = 'Cadillac';

    console.log(autos);
    console.log(autos.length);

    // agregando en un indice específico, si hay un dato lo sustituye

    autos[5] = 'fuego';
    console.log(autos);

    // En este caso, "cadillac" fue sustituido por "fuego" ya que lo señalamos en el índice del arreglo o array

    

