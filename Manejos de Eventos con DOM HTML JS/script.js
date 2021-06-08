/********************************************************************
 * Realizando la función que ejecutará el método para cambiar el texto
 ********************************************************************/

function cambiarTexto(titulo) {
  console.log(titulo);
  console.log(titulo.innerHTML);
  titulo.innerHTML = "EL Nuevo Título desde JS";
  console.log(titulo.innerHTML);
}

// Asociar eventos a elementos HTML DOM con JS
// Sólo pasando la referencia a esta función, no necesita paréntesis
document.getElementById("titulo1").onclick = cambiandoTexto;

function cambiandoTexto() {
  document.getElementById("titulo1").innerHTML = "El nuevo cambio de título";
}

// Ahora realizando lo mismo para agregar nuevo contenido

document.getElementById("nuevoContenido").onclick = nuevoContenido;

function nuevoContenido() {
  document.getElementById("mostrarContenido").innerHTML =
    "Nuevo Contenido de la Página";
}

// éstas son funciones de estilo CallBack