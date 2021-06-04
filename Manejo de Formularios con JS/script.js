/**
 * Manejando el formulario desde JS
 */

function mostrarValores() {
  let formulario = document.forms["formulario"];
  let texto = "";
  for (let elemento of formulario) {
    texto += elemento.value + "</br>";
  }
  console.log(texto);
  document.getElementById('valores').innerHTML = texto; 
}
