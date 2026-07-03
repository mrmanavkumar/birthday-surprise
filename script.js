document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('gift-box');
    const birthdayTemplate = document.getElementById('birthday-template');
    const bgMusic = document.getElementById('bg-music');

    if (giftBox && birthdayTemplate && bgMusic) {
        giftBox.addEventListener('click', () => {
            // Gift box ko hide karna aur template dikhana
            giftBox.style.display = 'none';
            birthdayTemplate.classList.remove('hidden');
            birthdayTemplate.style.display = 'block';
            
            // Music play karna
            bgMusic.play().catch(error => {
                console.log("Music play karne mein dikkat aayi:", error);
            });
        });
    }
});
