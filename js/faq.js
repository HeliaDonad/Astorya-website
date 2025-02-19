document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function () {
            // Sluit alle andere geopende FAQ-items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.display = "none";
                }
            });

            // Toggle de huidige
            item.classList.toggle("active");
            const answer = item.querySelector(".faq-answer");
            if (item.classList.contains("active")) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});
