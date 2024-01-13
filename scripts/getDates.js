// getDates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;


document.querySelector('footer #currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
