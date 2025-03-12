document.addEventListener("DOMContentLoaded", function () {
    const infoIcons = document.querySelectorAll(".info-icon");
    
    infoIcons.forEach(icon => {
        icon.addEventListener("click", function (event) {
            const infoText = this.nextElementSibling;
            
            if (infoText.classList.contains("visible")) {
                infoText.classList.remove("visible");
            } else {
                // Verberg alle andere geopende info-text velden
                document.querySelectorAll(".info-text").forEach(text => {
                    text.classList.remove("visible");
                });
                infoText.classList.add("visible");
            }
        });
    });
});