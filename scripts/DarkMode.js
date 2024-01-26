// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


darkModeToggle.addEventListener('click', () => {
    console.log('Dark Mode Button Clicked!');
    body.classList.toggle('dark-mode');
});




// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger');
const nav = document.querySelector('nav');


hamburgerButton.addEventListener('click', () => {
    console.log('Dark Mode Button Clicked!');
    nav.classList.toggle('show-menu');
});
