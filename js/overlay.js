document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("starsCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            brightness: Math.random(), // Start helderheid
            speed: Math.random() * 0.02 + 0.01, // Hoe snel ze pulseren
            direction: Math.random() > 0.5 ? 1 : -1 // Willekeurige richting voor pulsatie
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        stars.forEach(star => {
            // Pas helderheid aan
            star.brightness += star.speed * star.direction;
            if (star.brightness > 1 || star.brightness < 0.3) {
                star.direction *= -1; // Keer de richting om
            }

            // Ster tekenen met variabele helderheid
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * star.brightness, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
        });

        requestAnimationFrame(drawStars);
    }

    drawStars();
});
