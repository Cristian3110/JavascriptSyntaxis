/***************************
 * Concatenación de Cadenas
 ****************************/

var nombre = 'Cristian';
var apellido= 'Carrillo';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
 
var nombreCompleto2 = 'Nemecio' + ' ' + 'Carrillo';
console.log(nombreCompleto2);


// Se evalúan de izquiuerda a derecha y los toma como una cadena
var x = nombre + 1987 + 10;
console.log(x);
// por ende no se realiza la suma sino que se toma como cadena

// toma como prioridad la suma por los parentensis
x = nombre + (2 + 4);
console.log(x);

// como se lee de izquierda a derecha, primero se toma la suma y después la cadena
//contexto string o contexto de cadena

x= 2 + 4 + nombre;
console.log(x);







