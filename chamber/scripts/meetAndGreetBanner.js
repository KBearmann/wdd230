
// Function to check if the current day 
function isMeetAndGreetDay() {
    var today = new Date();
    var dayOfWeek = today.getDay(); 
    return dayOfWeek >= 1 && dayOfWeek <= 3; 
}

// Function to show or hide the meet and greet banner 
function toggleMeetAndGreetBanner() {
    var banner = document.getElementById('meetAndGreetBanner');
    if (isMeetAndGreetDay()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Call the function 
window.onload = toggleMeetAndGreetBanner;
