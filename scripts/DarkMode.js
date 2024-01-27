// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


darkModeToggle.addEventListener('click', () => {
    console.log('Dark Mode Button Clicked!');
    body.classList.toggle('dark-mode');
});


// Hamburger Menu Toggle
const hamburgerButton = document.getElementById('hamburger');
const closeMenuButton = document.getElementById('closeMenu');
const nav = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    console.log('Hamburger Button Clicked!');
    nav.classList.toggle('show-menu');
    toggleButtons(); 
});

closeMenuButton.addEventListener('click', () => {
    console.log('Close Menu Button Clicked!');
    nav.classList.remove('show-menu');
    toggleButtons();
});

function toggleButtons() {
    hamburgerButton.style.display = nav.classList.contains('show-menu') ? 'none' : 'block';
    closeMenuButton.style.display = nav.classList.contains('show-menu') ? 'block' : 'none';
}

