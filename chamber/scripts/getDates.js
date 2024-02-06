// getDates.js

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Storage !== "undefined") {
        // Get the last visit date
        var lastVisit = localStorage.getItem("lastVisit");

        if (lastVisit) {
            //  time difference
            var currentDate = new Date();
            var daysDifference = Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

            // Display message 
            if (daysDifference === 0) {
                document.getElementById('sidebar-message').textContent = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                document.getElementById('sidebar-message').textContent = "You last visited 1 day ago.";
            } else {
                document.getElementById('sidebar-message').textContent = `You last visited ${daysDifference} days ago.`;
            }
        } else {
            // First visit
            document.getElementById('sidebar-message').textContent = "Welcome! Let us know if you have any questions.";
        }

        // Update
        localStorage.setItem("lastVisit", new Date());
    } else {
        console.error("LocalStorage is not supported on this browser.");
    }

    // Get the current year
    const currentYear = new Date().getFullYear();
});
