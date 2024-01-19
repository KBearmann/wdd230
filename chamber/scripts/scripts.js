// script.js

document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = document.lastModified;

    var footer = document.querySelector("footer");
    footer.innerHTML += "<p>Last modified: " + lastModifiedDate + "</p>";
});

