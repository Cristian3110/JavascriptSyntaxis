// Definiendo la función

function convertir(){
    let nombre = document.getElementById('nombre');
    nombre.value = nombre.value.toUpperCase();
}

function convertir2(apellidoInput){
    apellidoInput.value = apellidoInput.value.toUpperCase();
}

function purpura(subtitulo){
    subtitulo.style.color = '#560bad';
}
function blue(subtitulo){
    subtitulo.style.color = "#4895ef"
}

function azulO(subtitulo){
    subtitulo.style.color = '#03045e';
}
function naranjaO(subtitulo){
    subtitulo.style.color = "#e85d04"
}

function verde(titulo){
    titulo.style.color = '#14746f'
}

function cambiar(elementoInput){
    elementoInput.style.background = "#023e8a";
}

function regresar(elementoInput){
    elementoInput.style.background = "white";
}
