function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const giftContainer = document.querySelector('.gift-container');
    const surpriseSection = document.getElementById('surprise');
    const music = document.getElementById('music');

    // 1. Box ko animation do (Dhamaka effect)
    if (giftBox) {
        giftBox.classList.add('open-animation');
    }

    // 2. Animation khatam hote hi (0.5 second baad) box ko chhupa kar surprise dikhao
    setTimeout(() => {
        if (giftContainer) {
            giftContainer.style.display = 'none';
        }
        
        if (surpriseSection) {
            surpriseSection.style.display = 'block';
        }

        // 3. 🎉 Celebration Effect (Confetti ke patakhe)
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }

        // 4. Music bajao
        if (music) {
            music.play().catch(e => console.log("Music play hone mein dikkat aayi:", e));
        }
    }, 500); // 0.5 second ka wait jab tak box zoom hokar gayab ho
}
