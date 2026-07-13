const giftSection = document.getElementById("giftSection");
const countdownSection = document.getElementById("countdownSection");
const birthdaySection = document.getElementById("birthdaySection");

const giftBox = document.getElementById("giftBox");
const countdown = document.getElementById("countdown");

const countdownMusic = document.getElementById("countdownMusic");
const birthdayMusic = document.getElementById("birthdayMusic");

giftBox.addEventListener("click", startSurprise);

function startSurprise() {

    giftSection.classList.add("hidden");
    countdownSection.classList.remove("hidden");

    countdownMusic.play();

    let number = 3;
    countdown.innerText = number;

    const timer = setInterval(() => {

        number--;

        if (number > 0) {
            countdown.innerText = number;
        } else {

            clearInterval(timer);

            countdownSection.classList.add("hidden");
            birthdaySection.classList.remove("hidden");

            countdownMusic.pause();
            countdownMusic.currentTime = 0;

            birthdayMusic.play();

        }

    }, 1000);

}
