/********************
 * Ejercicio de las estaciones del año con la estructura switch año
 **********************/


let mes = 5;
let estacion = "Estación Desconocida";

switch ( mes ){

    case 1: case 2: case 12:
        estacion = "Invierno";
        break;

    case 3: case 4: case 5:
        estacion = "Primavera";
        break;

    case 6: case 7: case 8:
        estacion = "verano";
        break;

    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default: 
        estacion = "Introduzca un valor correcto";
}

console.log(estacion);

/********************************************************************************************
 * Aqui es importante que se revise los datos numericos, ya que se evalua comparación estricta
 * No ejecuta en las variables datos String por ejempli mes = "10"
 **********************************************************************************************/