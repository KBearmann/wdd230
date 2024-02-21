document.addEventListener("DOMContentLoaded", function() {
    toggleMeetAndGreetBanner();
});

function toggleMeetAndGreetBanner() {
    var banner = document.getElementById('meetAndGreetBanner');
    if (isMeetAndGreetDay()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}
