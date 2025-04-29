const startButton = document.getElementById('startButton');
const startButtonContainer = document.getElementById('startButtonContainer');

// Al hacer clic en el botón
startButton.addEventListener('click', () => {
    document.querySelector('.invitacion').classList.add('animada');
    startButtonContainer.style.display = 'none';
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(err => console.log('Autoplay bloqueado:', err));
    lanzarConfetti();
});

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
