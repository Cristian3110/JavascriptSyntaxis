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
  document.getElementById("valores").innerHTML = texto;
}

// Accediendo a los elementos del Formulario  de Manera Individual con JS

function mostrarValoresIndividuales() {
  let formulario1 = document.forms["formulario"];
  let texto1 = "";
  let nombre = formulario1['nombre'];
  let apellido = formulario1['apellido'];
  texto1 = nombre.value + '<br/>' + apellido.value;
  document.getElementById('valorIndividual').innerHTML = texto1;
}
