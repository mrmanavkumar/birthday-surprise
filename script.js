function openGift() {

    const gift = document.querySelector(".gift-box");

    gift.classList.add("shake");

    setTimeout(function () {

        // Gift Box hide
        document.querySelector(".gift-container").style.display = "none";

        // Surprise show
        document.getElementById("surprise").style.display = "block";

        // Music play
        document.getElementById("music").play();

        // Confetti
        var duration = 10000;
        var animationEnd = Date.now() + duration;

        (function frame() {

            confetti({
                particleCount: 6,
                angle: 60,
                spread: 80,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 6,
                angle: 120,
                spread: 80,
                origin: { x: 1 }
            });

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }

        })();

    }, 800);

}
