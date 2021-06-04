/*********************************************************************************************
 * En caso de que queramos colocar el script de JS, se debe colocar después de las etiquetas de HTML
 * para que se puedan evaluar con el script de Javascript
 *************************************************************/

console.log('Saludos desde Javascript');

let cabecero = document.getElementById('cabecero').innerHTML;
console.log(`El valor del cabecero es: ${cabecero}`);

let parrafo = document.getElementById('parrafo').innerHTML;
console.log(`El valor del parrafo es: ${parrafo}`);

// parrafo.innerHTML = 'Nuevo Valor del Parrafo, modificado';
// cabecero.innerHTML = 'Nuevo cabecero';
