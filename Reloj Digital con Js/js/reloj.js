const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());

  document.getElementById("hora").innerHTML = `${hr}: ${min}: ${seg}`;

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

  document.getElementById("fecha").innerHTML = fechaTexto;
};

// configurando los digitos en el formato
const formatoHora = (hora) => {
  if (hora < 10) hora = "0" + hora;
  return hora;
};

// configurando el tiempo de carga del reloj
setInterval(mostrarReloj, 1000);
