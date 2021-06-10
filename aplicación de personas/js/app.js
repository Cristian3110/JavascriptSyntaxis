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

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if ((nombre.value == "") || (apellido.value == "")) {
    alert("Por favor introduzca un nombre y un apellido");
  } else {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  }
}
