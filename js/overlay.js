document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("starsCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", () => {
        resizeCanvas();
        initStars(); // Sterren opnieuw initialiseren bij herladen
    });

    resizeCanvas();

    let stars = [];
    const numStars = 200;

    function initStars() {
        stars = []; // Reset de array
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                brightness: Math.random() * 0.7 + 0.3, // Voorkom te lage helderheid
                speed: Math.random() * 0.02 + 0.005, // Lagere puls snelheid
                direction: Math.random() > 0.5 ? 1 : -1 // Willekeurige puls richting
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.brightness += star.speed * star.direction;
            if (star.brightness > 1) {
                star.brightness = 1;
                star.direction = -1;
            } else if (star.brightness < 0.3) {
                star.brightness = 0.3;
                star.direction = 1;
            }

            // Ster tekenen met pulsatie
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * star.brightness, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
        });

        requestAnimationFrame(drawStars);
    }

    initStars(); // Initialiseer sterren
    drawStars(); // Start de animatie
});
