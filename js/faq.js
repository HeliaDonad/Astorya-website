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

function copyEmail() {
    const emailText = document.getElementById("email-text").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        // Maak een pop-up element aan
        const popup = document.createElement("div");
        popup.innerText = "Email copied!";
        popup.classList.add("popup-message");

        // Voeg de pop-up toe aan de body
        document.body.appendChild(popup);

        // Laat de pop-up na 2 seconden verdwijnen
        setTimeout(() => {
            popup.remove();
        }, 2000);
    });
}

function redirectToFAQ() {
    window.location.href = "../pagina's/faq.html"; // Redirect naar de FAQ pagina
}

