window.onload = () => {
    const invitacion = document.querySelector('.invitacion');
    const abrirModal = document.getElementById('abrirModal');
    const cerrarModal = document.getElementById('cerrarModal');
    const modal = document.getElementById('modalConfirmacion');
    const startButton = document.getElementById('startButton');
    const startButtonContainer = document.getElementById('startButtonContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    // Animar invitación automáticamente al cargar (si quieres que espere al botón, puedes quitar esta línea)
    // invitacion.classList.add('animada');
  
    // Al hacer clic en Start
    startButton.addEventListener('click', () => {
      invitacion.classList.add('animada');
      startButtonContainer.style.display = 'none';
  
      backgroundMusic.play().catch(err => console.log('Autoplay bloqueado:', err));
      lanzarConfetti();
    });
  
    // Abrir modal
    abrirModal.addEventListener('click', () => {
      modal.style.display = 'flex';
      posicionarModal();
    });
  
    // Cerrar modal
    cerrarModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Cerrar modal si hacen click fuera
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Función para lanzar confetti
    function lanzarConfetti() {
      const duration = 5 * 1000;
      const end = Date.now() + duration;
  
      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f']
        });
  
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  
    // Función para posicionar el modal más abajo
    function posicionarModal() {
      modal.style.position = 'absolute';
      modal.style.top = `${window.scrollY + 1250}px`;
      modal.style.left = '50%';
      modal.style.transform = 'translateX(-50%)';
    }
  };
  