let intervalo;
let tiempoRestante;


function mostrarAviso() {
  // Reproducir el sonido antes de mostrar la alerta
  const sonido = document.getElementById("sonido");
  sonido.play();

  const fecha = new Date();
  const horaActual = fecha.getHours();
  const minutos = fecha.getMinutes();

  // Ajustamos los minutos para mostrar siempre 0 en caso de ser menor que 10
  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;

  const mensaje = `Han pasado ${horaActual}:${minutosFormateados}. ¡Es hora de descansar la vista!`;

  // Mostrar la alerta personalizada
  const alertaOverlay = document.getElementById("alerta-overlay");
  const alertaMensaje = document.getElementById("alerta-mensaje");
  alertaMensaje.textContent = mensaje;
  alertaOverlay.style.display = "block";
}

function aceptarAlerta() {
  // Detener el sonido y ocultar la alerta personalizada
  const sonido = document.getElementById("sonido");
  sonido.pause();
  const alertaOverlay = document.getElementById("alerta-overlay");
  alertaOverlay.style.display = "none";
}

function iniciarAviso() {
  const minutos = parseInt(document.getElementById("minutos").value, 10);
  tiempoRestante = minutos * 60; // Convertir minutos a segundos

  mostrarTiempoRestante(); // Mostrar tiempo restante al iniciar
  intervalo = setInterval(actualizarTiempo, 1000); // Actualizar cada segundo
}

function pausarAviso() {
  clearInterval(intervalo);
}

function mostrarTiempoRestante() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  document.getElementById("contador").textContent = `${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`;
}

function actualizarTiempo() {
  tiempoRestante--;
  if (tiempoRestante >= 0) {
    mostrarTiempoRestante();
  } else {
    clearInterval(intervalo);
    mostrarAviso();
  }
}
