document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let counter = 0;
    const imageWidth = images[0].clientWidth;

    nextBtn.addEventListener("click", () => {
        if (counter >= images.length - 1) {
            counter = -1;
        }
        counter++;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) {
            counter = images.length;
        }
        counter--;
        slide.style.transform = `translateX(${-imageWidth * counter}px)`;
    });
});
