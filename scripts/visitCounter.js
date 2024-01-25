document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("visitCounter") === null) {
        localStorage.setItem("visitCounter", "0");
    }

    // Get thecount from localStorage
    var visitCount = parseInt(localStorage.getItem("visitCounter"));
    visitCount++;
    localStorage.setItem("visitCounter", visitCount.toString());

    // Display
    var visitCounterElement = document.getElementById("visitCounter");
    if (visitCounterElement) {
        visitCounterElement.textContent = visitCount.toString();
    }
});
