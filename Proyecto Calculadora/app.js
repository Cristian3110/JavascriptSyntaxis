/**
 * Parte lógica de la aplicación
 */

function sumar() {
  const forma = document.getElementById("forma");
  let operandoA = forma["operandoA"];
  let operandoB = forma["operandoB"];
  // Conviertiendo los valores a enteros con ParseInt
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
