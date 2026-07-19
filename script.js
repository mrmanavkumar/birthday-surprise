document.addEventListener("DOMContentLoaded", () => {
    // MAIN CORE DOM ELEMENTS
    const giftSection = document.getElementById("giftSection");
    const giftBox = document.getElementById("giftBox");
    const countdownScreen = document.getElementById("countdownScreen");
    const countdownNumber = document.getElementById("countdownNumber");
    const bdayGreetingScreen = document.getElementById("bdayGreetingScreen");
    const templateSection = document.getElementById("templateSection");
    const messageSection = document.getElementById("messageSection");
    
    // CAKE DOM ELEMENTS
    const cakeSection = document.getElementById("cakeSection");
    const cake3D = document.getElementById("cake3D");
    const candleFlame = document.getElementById("candleFlame");
    const cakeInstruction = document.getElementById("cakeInstruction");

    // AUDIO SYSTEMS
    const bgMusic = document.getElementById("bgMusic");
    const countdownAudio = document.getElementById("countdownAudio");
    const rainContainer = document.getElementById("rainContainer");
    const effectCanvas = document.getElementById("effectCanvas");

    // STEP 2 & 3: Gift Box Engine (Shake, Extreme Zoom Pop, Real-time Physics Blast)
    if (giftBox) {
        giftBox.addEventListener("click", () => {
            // Pre-unlock audio layer to bypass mobile restrictions
            if (bgMusic) {
                bgMusic.play().then(() => {
                    bgMusic.pause(); 
                    bgMusic.currentTime = 0; 
                }).catch(err => console.log("Audio node activated securely.", err));
            }

            giftBox.classList.add("shake-active");

            // STEP 4: 1.5 Seconds Shake Over -> Sudden Burst & Poppers fly away!
            setTimeout(() => {
                giftBox.classList.remove("shake-active");
                
                // Sudden scale explosion effect
                giftBox.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
                giftBox.style.transform = "scale(2.5)";
                giftBox.style.opacity = "0";

                // Instant Party Popper Burst outward from center screen coordinates
                for (let i = 0; i < 50; i++) {
                    const popper = document.createElement('div');
                    popper.style.position = 'fixed';
                    popper.style.left = '50vw';
                    popper.style.top = '50vh';
                    popper.style.zIndex = '999';
                    popper.style.pointerEvents = 'none';
                    popper.innerHTML = ['🎉', '💥', '✨', '🥳', '⭐', '🎈'][Math.floor(Math.random() * 6)];
                    popper.style.fontSize = (Math.random() * 30 + 20) + 'px';
                    
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = Math.random() * 250 + 100;
                    const xDist = Math.cos(angle) * velocity;
                    const yDist = Math.sin(angle) * velocity - 150; 

                    popper.style.transform = 'translate(-50%, -50%) scale(0.5)';
                    popper.style.transition = 'transform 0.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.8s ease-out';
                    
                    document.body.appendChild(popper);

                    requestAnimationFrame(() => {
                        popper.style.transform = `translate(calc(-50% + ${xDist}px), calc(-50% + ${yDist}px)) scale(1.2) rotate(${Math.random() * 360}deg)`;
                    });

                    setTimeout(() => {
                        popper.style.opacity = '0';
                        setTimeout(() => popper.remove(), 800);
                    }, 600);
                }

                // Smooth jump to step 5 countdown
                setTimeout(() => {
                    if (giftSection) giftSection.classList.add("hidden");
                    if (countdownScreen) {
                        countdownScreen.classList.remove("hidden");
                        startCountdownTimer(); 
                    } else {
                        showBirthdayGreeting();
                    }
                }, 300);

            }, 1500); 
        });
    }

    // STEP 5: Countdown Audio System (3, 2, 1)
    function startCountdownTimer() {
        if (countdownAudio) {
            countdownAudio.play().catch(err => console.log("Audio block bypass active:", err));
        }

        let count = 3;
        if (countdownNumber) countdownNumber.textContent = count;

        const timer = setInterval(() => {
            count--;
            if (count > 0) {
                if (countdownNumber) countdownNumber.textContent = count;
            } else {
                clearInterval(timer);
                if (countdownScreen) countdownScreen.classList.add("hidden");
                showBirthdayGreeting(); 
            }
        }, 1000);
    }

    // STEP 6: Happy Birthday Screen Loader & Main Background Song Trigger
    function showBirthdayGreeting() {
        if (bdayGreetingScreen) bdayGreetingScreen.classList.remove("hidden");

        if (bgMusic) {
            bgMusic.play().catch(err => console.log("Main music payload track error:", err));
        }

        initConfetti();
        startMagicalRain();

        // 3 Seconds flash title delay, then jump into Step 7 (Memory Frame)
        setTimeout(() => {
            if (bdayGreetingScreen) bdayGreetingScreen.classList.add("hidden");
            
            if (templateSection) {
                templateSection.classList.remove("hidden");
                setTimeout(() => { templateSection.classList.add("active"); }, 100);
                
                // STEP 7: Retain memory screen for exactly 15 seconds, then move to Cake
                setTimeout(() => {
                    templateSection.classList.remove("active");
                    
                    setTimeout(() => {
                        templateSection.classList.add("hidden");
                        showCakeScreen(); // New Interactive Flow
                    }, 2000); 
                }, 15000); 
                
            } else {
                showCakeScreen();
            }
        }, 3000);
    }

    // NEW INTERACTIVE FEATURE: 3D Cake Candle Blowing & Slice Cutting Engine
    function showCakeScreen() {
        if (cakeSection) {
            cakeSection.classList.remove("hidden");
        }

        let isCandleBlown = false;

        if (cake3D) {
            cake3D.addEventListener("click", () => {
                if (!isCandleBlown) {
                    // Stage 1: Blow candle flame away
                    if (candleFlame) candleFlame.style.display = "none";
                    if (cakeInstruction) cakeInstruction.innerHTML = "Candle Off! Now Tap to Cut the Cake! 🔪";
                    isCandleBlown = true;
                } else {
                    // Stage 2: Slice and cut cake object
                    cake3D.classList.add("cut-slice-effect");
                    if (cakeInstruction) cakeInstruction.innerHTML = "Wish Sent to Universe! ✨";

                    // Dynamic slice blast particles explosion
                    for (let i = 0; i < 35; i++) {
                        const burstNode = document.createElement('div');
                        burstNode.classList.add('rain-item');
                        burstNode.innerHTML = ['✨', '🎂', '🩺', '❤️', '🎉'][Math.floor(Math.random() * 5)];
                        burstNode.style.left = '50vw'; 
                        burstNode.style.top = '50vh';
                        burstNode.style.fontSize = (Math.random() * 15 + 20) + 'px';
                        burstNode.style.transform = `translate(${(Math.random() - 0.5) * 260}px, ${(Math.random() - 0.5) * 260}px) scale(1.2)`;
                        burstNode.style.transition = 'all 0.8s cubic-bezier(0.1, 0.8, 0.3, 1)';
                        document.body.appendChild(burstNode);
                        setTimeout(() => burstNode.remove(), 800);
                    }

                    // Shift smoothly into Notebook Letter system after 1.5s delay
                    setTimeout(() => {
                        if (cakeSection) cakeSection.classList.add("hidden");
                        showLetterPage();
                    }, 1500);
                }
            });
        }
    }

    // STEP 8: Final Scrapbook Notebook Interface
    function showLetterPage() {
        if (messageSection) {
            messageSection.classList.remove("hidden");
            setTimeout(() => {
                messageSection.classList.add("active");
                typeWriterEffect();
            }, 100);
        }
    }

    // Floating Backdrop Rain Particles Loop (With Nurse Emojis Integrated)
    function startMagicalRain() {
        const items = ['🌸', '❤️', '🌹', '💕', '✨', '💝', '🩺'];
        setInterval(() => {
            const element = document.createElement('div');
            element.classList.add('rain-item');
            element.innerHTML = items[Math.floor(Math.random() * items.length)];
            element.style.left = Math.random() * 100 + 'vw';
            const size = Math.random() * 18 + 12; 
            element.style.fontSize = size + 'px';
            const fallDuration = Math.random() * 5 + 4; 
            element.style.animationDuration = fallDuration + 's';
            
            if (rainContainer) rainContainer.appendChild(element);
            setTimeout(() => { element.remove(); }, fallDuration * 1000);
        }, 250); 
    }

    // Typewriter Rendering System (With custom nurse line & MANAV Signature)
    async function typeWriterEffect() {
        const targetDiv = document.getElementById("typewriterText");
        const scrollBox = document.getElementById("messageSection");
        if (!targetDiv) return;

        const letterData = [
            { type: 'h3', text: 'HAPPY BIRTHDAY ❤️' },
            { type: 'p', text: 'Gungun, main bas yehi dua karta hu ki tum hamesha khush raho. Tumhare chehre ki smile kabhi kam na ho, kyuki tum sach me har ek happiness deserve karti ho.' },
            { type: 'p', text: 'Hamesha aise hi muskurati rehna, apne saare sapne poora karna aur life me aage badhte rehna. 🩺✨🩺' },
            { type: 'p', text: 'Aur ek baat... tum hamesha mere liye bahut special aur important rahogi. ❤️' },
            { type: 'p', text: 'Once again, Happy Birthday Gungun! 🥳🎂', className: 'highlight-bday' },
            { type: 'p', text: 'Take care of yourself. ✨', className: 'signature' },
            { type: 'p', text: 'MANAV', className: 'signature' }
        ];

        targetDiv.innerHTML = ""; 

        for (const data of letterData) {
            const element = document.createElement(data.type);
            if (data.className) element.classList.add(data.className);
            targetDiv.appendChild(element);

            let rawText = data.text;
            for (let i = 0; i < rawText.length; i++) {
                const oldCursor = element.querySelector('.heart-cursor');
                if (oldCursor) oldCursor.remove();

                element.innerHTML += rawText.charAt(i);
                element.innerHTML += '<span class="heart-cursor">❤️</span>';

                if (scrollBox) scrollBox.scrollTop = scrollBox.scrollHeight;
                await new Promise(res => setTimeout(res, 50)); 
            }
            const finalCursor = element.querySelector('.heart-cursor');
            if (finalCursor) finalCursor.remove();
            await new Promise(res => setTimeout(res, 400));
        }
    }

    // HTML5 Confetti Engine
    function initConfetti() {
        if (!effectCanvas) return;
        const ctx = effectCanvas.getContext("2d");
        let width = (effectCanvas.width = window.innerWidth);
        let height = (effectCanvas.height = window.innerHeight);
        const particles = [];
        const colors = ["#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#fff"];

        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height - height,
                r: Math.random() * 4 + 2,
                d: Math.random() * 50 + 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 5,
                tiltAngleIncremental: Math.random() * 0.07 + 0.02,
                tiltAngle: 0
            });
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p, idx) => {
                p.tiltAngle += p.tiltAngleIncremental;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.x += Math.sin(p.tiltAngle);
                p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
                ctx.beginPath();
                ctx.lineWidth = p.r;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                ctx.stroke();
            });
            particles.forEach((p) => { if (p.y > height) { p.y = -20; p.x = Math.random() * width; } });
            requestAnimationFrame(draw);
        }
        draw();
    }
});
                    
