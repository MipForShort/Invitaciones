window.onload = () => { // Al cargar pagina
  document.querySelector('.invitacion').classList.add('animada'); // Seleccionamos clase invitacion

  const startButton = document.getElementById('startButton'); // Boton de inicio
  const startButtonContainer = document.getElementById('startButtonContainer'); // Contenedor de boton de inicio
  const invitacion = document.getElementById('invitacion'); // Elemento para invitacion
  const backgroundMusic = document.getElementById('backgroundMusic'); // Elemento para musica

  // Llamamos al startButton para que al hacer click reproduzca musica
  startButton.addEventListener('click', () => {
    backgroundMusic.play(); // Reproducir música
    startButtonContainer.style.display = 'none'; // Ocultar el botón
    invitacion.style.display = 'block'; // Mostrar la invitación
    setTimeout(() => {
      invitacion.classList.add('animada'); // Animación de aparición
    }, 50); // Pequeña pausa para que el display:block se aplique antes de animar
  });

  // Variables para cuenta regresiva
  const fechaEvento = new Date('2025-10-15T00:00:00').getTime();
  const diasEl = document.getElementById('dias');
  const horasEl = document.getElementById('horas');
  const minutosEl = document.getElementById('minutos');
  const segundosEl = document.getElementById('segundos');

  // Apartado que actualiza el contador y se le toma diferencia
  const actualizarContador = () => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // Si hay diferencia se limpia el intervalo
    if (diferencia <= 0) {
      document.getElementById('contador').innerHTML = "¡Hoy es el gran día!";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Variable para dias
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Variable para horas
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)); // Variable para minutos
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000); // Variable para segundos

    // Cambiar texto al tiempo en forma de string
    diasEl.innerText = String(dias).padStart(2, '0');
    horasEl.innerText = String(horas).padStart(2, '0');
    minutosEl.innerText = String(minutos).padStart(2, '0');
    segundosEl.innerText = String(segundos).padStart(2, '0');
  };

  const intervalo = setInterval(actualizarContador, 1000); // Se actualiza el intervalo cada segundo que pasa
  actualizarContador();

  // Bloque para modal de confirmacion de asistencia
  const abrirModal = document.getElementById('abrirModal'); // Para abrir modal
  const cerrarModal = document.getElementById('cerrarModal'); // Para cerrar modal
  const modal = document.getElementById('modalConfirmacion'); // Modal para confirmar

  // Evento para al hacer click abrir modal
  abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Evento para al hacer click cerrar modal
  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // También puedes cerrar el modal si el usuario hace click fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Apartado para crear destellos en la pantalla
  modal.style.position = 'absolute';
  modal.style.top = `${window.scrollY + 1250}px`; // 100px debajo del top del scroll
  modal.style.left = '50%';
  modal.style.transform = 'translateX(-50%)';
  
  // Esto crea los destellos de la invitacion
  function crearDestello() {
    const destello = document.createElement('div'); // Cada destello crea un div
    destello.classList.add('destello'); // Se agrega clase destello

    // Definiciones del ancho y alto de pantalla
    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    // Esto nos da lugares random para que el destello aparezca
    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    // Acomoda destello segun el par de valores anteriores
    destello.style.left = `${x}px`;
    destello.style.top = `${y}px`;

    // Se adiciona el destello
    document.body.appendChild(destello);

    setTimeout(() => {
      destello.remove();
    }, 2000); // Duración de la animación
  }
  
  setInterval(crearDestello, 400); // Cada 0.4 segundos se crea uno nuevo
};
