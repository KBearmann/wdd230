// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});




// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger');
const nav = document.querySelector('nav');


hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
});
