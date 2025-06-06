// Haal de referenties naar de knoppen op
const previewBtn = document.getElementById('preview-btn');
const nextBtn = document.getElementById('next-btn');

// Haal de referenties naar de artikelen op
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');
const article4 = document.getElementById('article4');
const article5 = document.getElementById('article5');
const article6 = document.getElementById('article6');

const articles = [article1, article2, article3, article4, article5, article6];

// Functie om naar het volgende artikel te navigeren
function nextArticle() {
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].classList.contains('active')) {
            articles[i].classList.remove('active');
            const nextIndex = (i + 1) % articles.length; // Circulair naar het volgende artikel
            articles[nextIndex].classList.add('active');
            break;
        }
    }
}

// Functie om naar het vorige artikel te navigeren
function previewArticle() {
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].classList.contains('active')) {
            articles[i].classList.remove('active');
            const prevIndex = (i - 1 + articles.length) % articles.length; // Circulair naar het vorige artikel
            articles[prevIndex].classList.add('active');
            break;
        }
    }
}

// Voeg event listeners toe aan de knoppen
nextBtn.addEventListener('click', nextArticle);
previewBtn.addEventListener('click', previewArticle);
