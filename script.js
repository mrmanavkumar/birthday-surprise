function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const giftContainer = document.querySelector('.gift-container');
    const surpriseSection = document.getElementById('surprise');
    const music = document.getElementById('music');

    // Box mein dhamakedar animation shuru karo
    if (giftBox) {
        giftBox.classList.add('open-animation');
    }

    // 0.4 second ke dhamake ke baad sab khulega
    setTimeout(() => {
        if (giftContainer) giftContainer.style.display = 'none';
        if (surpriseSection) surpriseSection.style.display = 'block';

        // 🎉 RANG-BIRANGE PARTY POPPERS (DHAMAKA EFFECT) 🎉
        if (typeof confetti === 'function') {
            // 1. Beech se pehle bada dhamaka
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#ff0055', '#00ffcc', '#ffcc00', '#22ff00', '#9900ff']
            });
            
            // 2. Left side se poppers
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 60,
                origin: { x: 0, y: 0.8 },
                colors: ['#ff0055', '#00ffcc', '#ffcc00']
            });
            
            // 3. Right side se poppers
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 60,
                origin: { x: 1, y: 0.8 },
                colors: ['#ffcc00', '#22ff00', '#9900ff']
            });
        }

        // Gaana bajao
        if (music) {
            music.play().catch(e => console.log("Music error:", e));
        }
    }, 400);
}
