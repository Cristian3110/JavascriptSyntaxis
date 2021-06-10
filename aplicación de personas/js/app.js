const personas = [
  new Persona("Nemecio", "Carrillo"),
  new Persona("Carmen", "Cegarra"),
  new Persona("Maricarmen", "Carrillo"),
];

function mostrarPersonas() {
  console.log("Ejecutando el método mostrar persona");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}
