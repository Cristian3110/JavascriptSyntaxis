
/**********************
 * Operadores Lógicos
 **********************/

// Operador lógico AND (&&), regresa verdadero si los 2 son verdaderos
let a = 11, valMin = 0, valMax=10;

if (a >= valMin && a <= valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
};


// Operador Lógico OR (||), regresa true si cualquiera es true

let vacaciones= false, diaDescanso = false;
if(vacaciones|| diaDescanso){
    console.log("El padre puede asistir al juego del hijo");
}else{
    console.log("El padre está ocupado");
};





