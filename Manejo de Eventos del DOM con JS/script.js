// Definiendo la función

function convertir() {
  let nombre = document.getElementById("nombre");
  nombre.value = nombre.value.toUpperCase();
}

function convertir2(apellidoInput) {
  apellidoInput.value = apellidoInput.value.toUpperCase();
}

function purpura(subtitulo) {
  subtitulo.style.color = "#560bad";
}
function blue(subtitulo) {
  subtitulo.style.color = "#4895ef";
}

function azulO(subtitulo) {
  subtitulo.style.color = "#03045e";
}
function naranjaO(subtitulo) {
  subtitulo.style.color = "#e85d04";
}

function verde(titulo) {
  titulo.style.color = "#14746f";
}

function cambiar(elementoInput) {
  elementoInput.style.background = "#023e8a";
}

function regresar(elementoInput) {
  elementoInput.style.background = "white";
}

// Cambio en los elementos email
document.getElementById("email").addEventListener("focus", cambiar);
document.getElementById("email").addEventListener("blur", devolver);

//cambios en el elemento pais
document.getElementById("pais").addEventListener("focus", cambiar);
document.getElementById("pais").addEventListener("blur", devolver);

function cambiar(evento) {
  let componente = evento.target;
  componente.style.background = "#023e8a";
}

function devolver(evento) {
  let componente = evento.target;
  componente.style.background = "white";
}

// Realizando la misma operación pero implementando función flecha o arrow function
// La desventaja es que ésta función no se puede reutilizar para otras etiquetas por ejemplo

document
  .getElementById("estado")
  .addEventListener(
    "focus",
    (evento) => (evento.target.style.background = "red")
  );

document
  .getElementById("estado")
  .addEventListener(
    "blur",
    (evento) => (evento.target.style.background = "white")
  );
