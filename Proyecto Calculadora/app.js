/**
 * Parte lógica de la aplicación
 */

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  // Conviertiendo los valores a enteros con ParseInt
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if(isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  // Conviertiendo los valores a enteros con ParseInt
  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
  if(isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  // Conviertiendo los valores a enteros con ParseInt
  let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
  if(isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}


function dividir(){
    const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  // Conviertiendo los valores a enteros con ParseInt
  let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
  if(isNaN(resultado)) {
    resultado = "La operación no incluye números";
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

