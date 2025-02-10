// Código para criar o efeito das estrelas interativas

const starsContainer = document.querySelector('.stars');
const numberOfStars = 100; // Número de estrelas

// Função para criar as estrelas
function createStars() {
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posicionando as estrelas aleatoriamente na tela
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.animationDuration = `${Math.random() * 2 + 2}s`; // Animação com duração aleatória
        star.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório para as animações
        
        starsContainer.appendChild(star);
    }
}

// Função para animar as estrelas
function animateStars() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        star.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Criar as estrelas assim que a página carregar
window.onload = () => {
    createStars();
    setInterval(animateStars, 100);
};
