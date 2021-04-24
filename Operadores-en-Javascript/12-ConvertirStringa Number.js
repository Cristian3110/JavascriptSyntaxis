/*********************************************
 * Conversión de tipo STRING a un tipo NUMBER
 *********************************************/

let numero = "18";
// console.log(numero);
// console.log(typeof numero);
let edad = Number(numero); // con esto puede convertir de un string a number
console.log(edad);
console.log(typeof edad);
if(edad >= 18){
    console.log("Puede votar");
}else{
    console.log("Es muy joven para votar");
};

// Ahora con operador ternario

    let votante = (edad>=18) ? "Puede votar" : "No puede votar";
    console.log(votante);



/**********************************************
 * Función isNaN en Javascript // Not a Number
 **********************************************/

//Ejemplo:

let miNumero = "18x";

let age = Number(miNumero);
console.log(age);

// cómo corregir este error, ya que no es ni string ni numero
if (isNaN(age)){
    console.log("No es un número")
}else{
    if (age >= 18){
        console.log("mayor de edad");
    }else{
        console.log("menor de edad");
    };
}

// Asi podemos garantizar que estamos trabajando con números