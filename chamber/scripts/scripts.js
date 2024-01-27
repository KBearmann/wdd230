// script.js

// Dark Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    console.log('Dark Mode Button Clicked!');
    body.classList.toggle('dark-mode');
});

// Hamburger Toggle
const hamburgerButton = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    console.log('Hamburger Button Clicked!');
    nav.classList.toggle('show-menu');
});

// Sidebar
document.addEventListener("DOMContentLoaded", function () {
    var lastVisitDate = localStorage.getItem("lastVisitDate");
    var currentDate = Date.now();

    if (!lastVisitDate) {
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        var daysDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            displayMessage("Back so soon! Awesome!");
        } else {
            var message = "You last visited " + daysDifference + (daysDifference === 1 ? " day" : " days") + " ago.";
            displayMessage(message);
        }
    }

    localStorage.setItem("lastVisitDate", currentDate.toString());
});

function displayMessage(message) {
  
    var sidebar = document.querySelector(".discover-sidebar");
    sidebar.innerHTML += "<p>" + message + "</p>";
    var paragraph = document.createElement("p");
    paragraph.textContent = message;
    sidebar.appendChild(paragraph);
}
