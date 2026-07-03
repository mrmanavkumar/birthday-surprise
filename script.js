function openGift() {
    const giftContainer = document.querySelector('.gift-container');
    if (giftContainer) {
        giftContainer.style.display = 'none';
    }

    const surpriseSection = document.getElementById('surprise');
    if (surpriseSection) {
        surpriseSection.style.display = 'block';
    }

    const music = document.getElementById('music');
    if (music) {
        music.play().catch(error => {
            console.log("Music play hone mein dikkat aayi:", error);
        });
    }
}
