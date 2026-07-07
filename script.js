function openGift() {

    // Gift box shake
    document.querySelector(".gift-box").classList.add("shake");

    setTimeout(function () {

        // Gift hide
        document.querySelector(".gift-container").style.display = "none";

        // Surprise show
        document.getElementById("surprise").style.display = "block";

        // Music play
        const music = document.getElementById("music");
        music.currentTime = 0;
        music.play();

        // Confetti for 45 seconds
        var duration = 45000;
        var animationEnd = Date.now() + duration;

        (function frame() {

            confetti({
                particleCount: 8,
                angle: 60,
                spread: 90,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 8,
                angle: 120,
                spread: 90,
                origin: { x: 1 }
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }

        })();

    }, 800);

}
