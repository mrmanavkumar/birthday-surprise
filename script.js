function openGift() {

    document.querySelector(".gift-container").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    document.getElementById("music").play();

    var end = Date.now() + 10000;

    var interval = setInterval(function () {

        confetti({
            particleCount: 30,
            spread: 100,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });

        if (Date.now() > end) {
            clearInterval(interval);
        }

    }, 250);

}
