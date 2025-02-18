document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    nextBtn.addEventListener("click", function () {
        if (index < 3) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = 3;
        }
        updateCarousel();
    });

    function updateCarousel() {
        slide.style.transform = `translateX(-${index * 100}%)`;
    }
});
