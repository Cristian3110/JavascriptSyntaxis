/****************************
 * Uso de la palabra BREAK
 ****************************/

for (let contador = 0; contador <= 10; contador++){
    if ( contador % 2 == 0){
        console.log(contador);
        break;// se rompe el bucle y solo se muestra el primer ciclo y no prosigue
    }
}
console.log("Fin del ciclo for");
