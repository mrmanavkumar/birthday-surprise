function openGift() {

    const gift = document.querySelector(".gift-box");

    // Gift Shake
    gift.classList.add("shake");

    setTimeout(() => {

        // Gift Hide
        document.querySelector(".gift-container").style.display = "none";

        // Countdown Audio
        const countdown = document.getElementById("countdown");
        countdown.currentTime = 0;

        countdown.play().catch(err => {
            console.log("Countdown play failed:", err);
        });
        
        document.getElementById("countdownScreen").style.display = "flex";

const countdownText = document.getElementById("countdownText");

countdownText.innerText = "3";

setTimeout(() => {
    countdownText.innerText = "2";
}, 1000);

setTimeout(() => {
    countdownText.innerText = "1";
}, 2000);
    setTimeout(() => {
    countdownText.innerHTML = "<span style='font-size:40px;'>🎉 Happy Birthday 🎉</span>";
}, 3000);    
        // Countdown khatam hone ke baad
        countdown.onended = () => {
document.getElementById("countdownScreen").style.display = "none";
            // Show Surprise
            const surprise = document.getElementById("surprise");

surprise.classList.add("show");

            // Play Music
            const music = document.getElementById("music");
            music.currentTime = 0;
            music.play().catch(err => {
                console.log("Music play failed:", err);
            });
            
    

music.onended = () => {
    surprise.style.opacity = "0";

    setTimeout(() => {
        surprise.style.visibility = "hidden";
        document.getElementById("finalMessage").classList.add("show");
    }, 2000);
};
            
                

        

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
