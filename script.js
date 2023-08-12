// script.js
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body
    });
});
