/*********************************************************************************************
 * En caso de que queramos colocar el script de JS, se debe colocar después de las etiquetas de HTML
 * para que se puedan evaluar con el script de Javascript
 *************************************************************/

console.log("Saludos desde Javascript");

let cabecero = document.getElementById("cabecero").innerHTML;
console.log(`El valor del cabecero es: ${cabecero}`);

let parrafo = document.getElementById("parrafo").innerHTML;
console.log(`El valor del parrafo es: ${parrafo}`);

// parrafo.innerHTML = 'Nuevo Valor del Parrafo, modificado';
// cabecero.innerHTML = 'Nuevo cabecero';

/**********************************************************
 * Otra manera de recuperar elementos desde JS por grupo
 * Recuperando un grupo de etiquetas en el DOM
 * getElementsByTagName
 *******************************************************/

let parrafos = document.getElementsByTagName("p");
console.log(`N°- párrafos: ${parrafos.length}`);
for (let i = 0; i < parrafos.length; i++) {
  console.log(`${i} - ${parrafos[i].innerHTML}`);
}

let elementos = document.getElementsByClassName("azul");
console.log(`N°- elementos: ${elementos.length}`);
for (let i = 0; i < elementos.length; i++) {
  console.log(`${i} - ${elementos[i].innerHTML}`);
}

console.log("----------------------------");

// Otra manera de recorrer los elementos con el for off
let elementosF = document.getElementsByClassName("azul");
console.log( `N° elementos: ${elementosF.length}`);
for (let elemento of elementosF) {
  console.log(`${elemento.innerHTML}`);
}
// console.log(`N°- elementosF: ${elementosF.length}`);
console.log('--------------------------')

// recuperando los elementos con el método querySelectorAll
let elementosQS = document.querySelectorAll('h1.azul');
console.log( `N° elementos: ${elementosQS.length}`);
for (let elemento of elementosQS) {
  console.log(`${elemento.innerHTML}`);
}


