window.onload = () => {
  document.querySelector('.invitacion').classList.add('animada');

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
  modal.style.top = `${window.scrollY + 1250}px`; // 100px debajo del top del scroll
  modal.style.left = '50%';
  modal.style.transform = 'translateX(-50%)';
  
  function crearDestello() {
    const destello = document.createElement('div');
    destello.classList.add('destello');

    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    destello.style.left = `${x}px`;
    destello.style.top = `${y}px`;

    document.body.appendChild(destello);

    setTimeout(() => {
      destello.remove();
    }, 2000); // Duración de la animación
  }

  setInterval(crearDestello, 400); // Cada 0.8 segundos se crea uno nuevo
};
