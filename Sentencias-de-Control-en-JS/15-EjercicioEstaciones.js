/**************************************
 * Ejercicio de las estaciones del año
 *************************************/

/**
 * Primavera = enero, febrero, marzo
 * verano = abril, mayo, junio
 * otoño = julio, agosto, septiembre
 * invierno = octubre, noviembre, diciembre
 */


 let mes =1;
 if(mes >=1 && mes <= 3){
     console.log("Estamos en Primavera");
 }
 else if (mes >3 && mes <= 6){
     console.log("Estamos en Verano");
 }
 else if (mes >6 && mes <= 9){
     console.log("Estamos en Otoño");
 }
 else if (mes >9 && mes <= 12){
     console.log("Estamos en Invierno")
 }else{
     console.log("Introduzca un mes correcto")
 };


/*************************************************************
 * Realizando el ejercicio de otra manera mejor y más exacta
 *************************************************************/

let MES = 1;
let estacion;

if(MES == 1 || MES == 2 || MES == 12){
    estacion = "Invierno";
}
else if ( MES == 3 || MES == 4 || MES == 5){ 
    estacion = "Primavera";
}
else if(MES == 6 || MES == 7 || MES == 8){
    estacion = "Verano";
}
else if (MES == 9 || MES == 10 || MES == 11){
    estacion = "Otoño";
}else{
    estacion = "Valor Incorrecto";
}

console.log(estacion);