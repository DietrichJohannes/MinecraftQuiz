const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let gravity = 0.9;
let dinoBottom = 0;
let cactusLeft = 600;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!isJumping) {
            jump();
        }
    }
});

function jump() {
    isJumping = true;
    let upTimerId = setInterval(() => {
        if (dinoBottom >= 150) {
            clearInterval(upTimerId);
            let downTimerId = setInterval(() => {
                if (dinoBottom <= 0) {
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                dinoBottom -= 5;
                dino.style.bottom = dinoBottom + 'px';
            }, 20);
        }
        dinoBottom += 30;
        dino.style.bottom = dinoBottom + 'px';
    }, 20);
}

function generateCactus() {
    cactus.style.left = cactusLeft + 'px';
    let cactusTimerId = setInterval(() => {
        if (cactusLeft <= 0) {
            cactusLeft = 600;
        }
        cactusLeft -= 5;
        cactus.style.left = cactusLeft + 'px';
        if (cactusLeft > 0 && cactusLeft < 60 && dinoBottom <= 40) {
            alert('Game Over');
            clearInterval(cactusTimerId);
        }
    }, 20);
}

generateCactus();
