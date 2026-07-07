function openGift() {

document.querySelector(".gift-container").style.display="none";

document.getElementById("surprise").style.display="block";

document.getElementById("music").play();

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
});

}
