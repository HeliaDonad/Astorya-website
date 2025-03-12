document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".highlight");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Verwijder de highlight van alle kaarten
            cards.forEach(c => c.classList.remove("active"));

            // Voeg de highlight toe aan de aangeklikte kaart
            this.classList.add("active");
        });
    });
});
