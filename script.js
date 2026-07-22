let timeLeft = 5;

// Yahan apna custom message likhein:
const letterMessage = "Happy Birthday! 🎉\n\nI just wanted to wish you happiness, peace, and success in everything you do. Take care always!";

function startSurprise() {
  document.getElementById('start-btn').classList.add('hidden');
  document.getElementById('countdown-box').classList.remove('hidden');

  // Play background music & countdown sound
  const bgMusic = document.getElementById('bgMusic');
  const countdownAudio = document.getElementById('countdownAudio');
  
  bgMusic.play().catch(e => console.log("Audio play error:", e));
  countdownAudio.play().catch(e => console.log("Audio play error:", e));

  let timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `00:00:0${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('countdown-box').classList.add('hidden');
      triggerFireworks();
    }
  }, 1000);
}

function triggerFireworks() {
  // Play Explosion Sound
  const blastAudio = document.getElementById('blastAudio');
  blastAudio.play().catch(e => console.log(e));

  // Trigger Eyes Glow Effect
  const bgEyes = document.getElementById('bg-eyes');
  bgEyes.classList.add('glow');

  // Simple Fireworks Effect on Canvas
  startCanvasAnimation();

  // Show Gift Box after blast
  setTimeout(() => {
    document.getElementById('surprise-section').classList.remove('hidden');
    bgEyes.classList.remove('glow');
  }, 2500);
}

function openGift() {
  document.getElementById('gift-box').classList.add('hidden');
  document.getElementById('card-container').classList.remove('hidden');
  startTypewriter();
}

function startTypewriter() {
  let i = 0;
  const speed = 45; // Typing speed (ms)
  const element = document.getElementById('typewriter-text');
  
  function type() {
    if (i < letterMessage.length) {
      element.textContent += letterMessage.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

/* Canvas Animation for Rocket Burst */
function startCanvasAnimation() {
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const particleCount = 70;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      speedX: (Math.random() - 0.5) * 12,
      speedY: (Math.random() - 0.5) * 12,
      size: Math.random() * 4 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      alpha: 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, index) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha -= 0.015;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (p.alpha <= 0) particles.splice(index, 1);
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

