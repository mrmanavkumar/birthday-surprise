function openGift() {

    const gift = document.querySelector(".gift-box");

    // Gift Shake
    gift.classList.add("shake");

    setTimeout(() => {

        // Gift Hide
        document.querySelector(".gift-container").style.display = "none";

        // Show Surprise
        document.getElementById("surprise").style.display = "flex";

        // Play Music
        const music = document.getElementById("music");
        music.currentTime = 0;
        music.play().catch(err => {
            console.log("Music play failed:", err);
        });

        // Confetti for 45 Seconds
        const end = Date.now() + 45000;

        (function frame() {

            confetti({
    particleCount: 2,
    angle: 60,
    spread: 50,
    origin: { x: 0 },
    startVelocity: 20
});

confetti({
    particleCount: 2,
    angle: 120,
    spread: 50,
    origin: { x: 1 },
    startVelocity: 20
});

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }

        })();

    }, 800);

}
