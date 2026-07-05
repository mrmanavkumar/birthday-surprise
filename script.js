function openGift() {

    // Hide Gift
    document.querySelector(".gift-container").style.display = "none";

    // Show Surprise
    document.getElementById("surprise").style.display = "block";

    // Play Music
    document.getElementById("music").play();

    // Party Poppers for 10 Seconds
    var duration = 10000;
    var animationEnd = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }

    })();
}
