document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; 
    let navLinks = document.querySelectorAll(".subnav a");

    let isActiveSet = false;

    navLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
            isActiveSet = true;
        }
    });

    if (!isActiveSet) {
        let homeLink = document.querySelector(".subnav a[href='index.html']");
        if (homeLink) {
            homeLink.classList.add("active");
        }
    }
});
