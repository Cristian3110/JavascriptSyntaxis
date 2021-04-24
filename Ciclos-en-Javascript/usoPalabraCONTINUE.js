/******************************
 * Uso de la palabra continue
 ******************************/

for ( contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;// ir a la siguiente iteración siempre que se cumpla la condición
    }else{
        console.log(contador);
    }
}

