/********************************************************
 * Etiquetas LABELS
 * Aunque no es recomendable, hay que saberlas por si acaso
 *********************************************************/

inicio:

 for ( contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;// ir a la siguiente iteración siempre que se cumpla la condición
    }else{
        console.log(contador);
    }
}


// Lo que hace la etiqueta es especificar hacia donde quiere ir después del continue

inicio2:

for (let contador = 0; contador <= 10; contador++){
    if ( contador % 2 == 0){
        console.log(contador);
        break inicio2;// se rompe el bucle y solo se muestra el primer ciclo y no prosigue
    }
}
console.log("Fin del ciclo for");


// no es recomendada porque trabaja como el GO TO, pero por si se encuentra en cualquier código!
