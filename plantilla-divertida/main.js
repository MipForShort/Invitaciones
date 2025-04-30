window.onload = () => {
  document.querySelector('.invitacion').classList.add('animada');

  const startButton = document.getElementById('startButton');
  const startButtonContainer = document.getElementById('startButtonContainer');
  const invitacion = document.getElementById('invitacion');
  const backgroundMusic = document.getElementById('backgroundMusic');

  startButton.addEventListener('click', () => {
    backgroundMusic.play(); // Reproducir música
    startButtonContainer.style.display = 'none'; // Ocultar el botón
    invitacion.style.display = 'block'; // Mostrar la invitación
    setTimeout(() => {
      invitacion.classList.add('animada'); // Animación de aparición (ya lo tienes en CSS)
    }, 50); // Pequeña pausa para que el display:block se aplique antes de animar
  });

  const abrirModal = document.getElementById('abrirModal');
  const cerrarModal = document.getElementById('cerrarModal');
  const modal = document.getElementById('modalConfirmacion');

  abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // También puedes cerrar el modal si el usuario hace click fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  modal.style.position = 'absolute';
  modal.style.top = `${window.scrollY + 1150}px`; // 100px debajo del top del scroll
  modal.style.left = '50%';
  modal.style.transform = 'translateX(-50%)';

};
