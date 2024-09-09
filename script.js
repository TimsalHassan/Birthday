// Fireworks Animation
document.addEventListener('DOMContentLoaded', () => {
    const fireworks = document.getElementById('fireworks');
    
    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        fireworks.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function triggerFireworks() {
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight / 2);
            createFirework(x, y);
        }
    }

    setInterval(triggerFireworks, 2000);

    // Confetti Effect
    const confetti = document.querySelector('.confetti');
    
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
            confettiPiece.style.top = `${Math.random() * window.innerHeight}px`;
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.appendChild(confettiPiece);

            setTimeout(() => {
                confettiPiece.remove();
            }, 3000);
        }
    }

    createConfetti();
    setInterval(createConfetti, 5000);
});
