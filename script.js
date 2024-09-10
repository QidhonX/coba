const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(function() {
    // Get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // Get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 100) {
        alert("Game Over!");
    }
}, 10);
