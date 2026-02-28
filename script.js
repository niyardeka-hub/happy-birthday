function createConfettiPiece() {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.animationDuration = `${Math.random() * 3 + 3}s`;
    piece.style.opacity = Math.random() * 0.5 + 0.5;
    document.getElementById('confetti').appendChild(piece);

    setTimeout(() => piece.remove(), 8000);
}

setInterval(createConfettiPiece, 200);

// balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
    document.getElementById('balloons').appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);
}
setInterval(createBalloon, 500);

// slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 4000);

// optional: click to toggle music
const audio = document.getElementById('birthday-audio');

window.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});