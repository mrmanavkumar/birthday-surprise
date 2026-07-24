// Letter Text Message (Bhai yahan apna msg change kar sakte ho)
const letterMessage = `Wishing you the happiest birthday Gungun! ✨🎂

May your year be filled with happiness, love, and endless joy. 

You are truly special and deserve all the great things in life. Always keep smiling like this! 💖🎉

Happy Birthday once again! 🎉🎁`;

const giftBox = document.getElementById('gift-box');
const giftScreen = document.getElementById('gift-screen');
const countdownScreen = document.getElementById('countdown-screen');
const countdownTimer = document.getElementById('countdown-timer');
const rocketScreen = document.getElementById('rocket-screen');
const templateScreen = document.getElementById('template-screen');
const letterScreen = document.getElementById('letter-screen');
const typewriterText = document.getElementById('typewriter-text');

const soundCountdown = document.getElementById('sound-countdown');
const soundRocket = document.getElementById('sound-rocket');
const bgMusic = document.getElementById('bg-music');

// Step 1: Gift Click
giftBox.addEventListener('click', () => {
  giftScreen.classList.remove('active');
  countdownScreen.classList.add('active');
  startCountdown();
});

// Step 2: Countdown 3..2..1
function startCountdown() {
  let count = 3;
  soundCountdown.play().catch(e => console.log(e));
  
  let timer = setInterval(() => {
    count--;
    if (count > 0) {
      countdownTimer.innerText = count;
    } else {
      clearInterval(timer);
      countdownScreen.classList.remove('active');
      rocketScreen.classList.add('active');
      launchRockets();
    }
  }, 1000);
}

// Step 3: Rocket Show (10 Seconds)
function launchRockets() {
  soundRocket.play().catch(e => console.log(e));
  
  let rocketCount = 0;
  let interval = setInterval(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: Math.random() * 0.4 + 0.2, x: Math.random() * 0.6 + 0.2 }
    });
    rocketCount++;
    if (rocketCount >= 4) {
      clearInterval(interval);
    }
  }, 2000);

  // 10 second ke baad Next Step (Template)
  setTimeout(() => {
    rocketScreen.classList.remove('active');
    templateScreen.classList.add('active');
    
    // Background Music Fade in
    bgMusic.play().catch(e => console.log(e));
    
    // 15 second ke baad Letter Step
    setTimeout(() => {
      templateScreen.classList.remove('active');
      letterScreen.classList.add('active');
      startTypewriter();
    }, 15000);

  }, 10000);
}

// Step 5: Typewriter Effect
function startTypewriter() {
  let index = 0;
  typewriterText.innerText = "";
  
  let typing = setInterval(() => {
    if (index < letterMessage.length) {
      typewriterText.innerText += letterMessage.charAt(index);
      index++;
      // Auto Scroll
      letterScreen.querySelector('.letter-card').scrollTop = letterScreen.querySelector('.letter-card').scrollHeight;
    } else {
      clearInterval(typing);
    }
  }, 50); // Speed of typing
}
