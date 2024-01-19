// script.js
function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    console.log("Nav display toggled");
}


document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = document.lastModified;

    var footer = document.querySelector("footer");
    footer.innerHTML += "<p>Last modified: " + lastModifiedDate + "</p>";
});

