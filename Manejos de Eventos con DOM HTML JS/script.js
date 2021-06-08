/********************************************************************   
 * Realizando la función que ejecutará el método para cambiar el texto
 ********************************************************************/

function cambiarTexto(titulo) {
  console.log(titulo);
  console.log(titulo.innerHTML);
  titulo.innerHTML = "EL Nuevo Título desde JS";
  console.log(titulo.innerHTML);
}

