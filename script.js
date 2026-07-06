function openGift() {

    const gift = document.querySelector(".gift-box");

    gift.classList.add("shake");

    setTimeout(function () {

        document.querySelector(".gift-container").style.display = "none";
        document.getElementById("surprise").style.display = "block";

        document.getElementById("music").play();

        // Fireworks yahan rahenge (baad me add karenge)

    }, 800);

}
