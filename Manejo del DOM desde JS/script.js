/**************************
 * Modificando Elementos en el DOM
 *************************/


// document.getElementById('elemento').innerHTML = 'Ya está modificado el elemento';

// Colocandolo dentro de una función para que se vea de manera dinámica

function modificar()    {
    document.getElementById('elemento').innerHTML = 'Elemento ya fue modificado';
}

// Si queremos los 2 valores, el anterior y el actual

function viejoNuevo(){
    document.getElementById('elemento').innerHTML += '<br/> Elemento modificado con el Anterior'
}

function cambioImg(){
    document.getElementById('imagen').src = '/Manejo del DOM desde JS/access/html5.png'
}

/****************************************************
 * Cambiando los estilos CSS con JS
 **********************************************/

function cambioColor(){
    document.getElementById('titulo').style.color = '#2a9d8f'
}