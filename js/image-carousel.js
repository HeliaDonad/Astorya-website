// Haal de referenties naar de knoppen op
const previewBtn = document.getElementById('preview-btn');
const nextBtn = document.getElementById('next-btn');

// Haal de referenties naar de artikelen op
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');

// Functie om naar het volgende artikel te navigeren
function nextArticle() {
    if (article1.classList.contains('active')) {
        article1.classList.remove('active');
        article2.classList.add('active');
    } else if (article2.classList.contains('active')) {
        article2.classList.remove('active');
        article3.classList.add('active');
    } else if (article3.classList.contains('active')) {
        article3.classList.remove('active');
        article1.classList.add('active');
    }
}

// Functie om naar het vorige artikel te navigeren
function previewArticle() {
    if (article1.classList.contains('active')) {
        article1.classList.remove('active');
        article3.classList.add('active');
    } else if (article2.classList.contains('active')) {
        article2.classList.remove('active');
        article1.classList.add('active');
    } else if (article3.classList.contains('active')) {
        article3.classList.remove('active');
        article2.classList.add('active');
    }
}

// Voeg event listeners toe aan de knoppen
nextBtn.addEventListener('click', nextArticle);
previewBtn.addEventListener('click', previewArticle);

