document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    let isDarkMode = false;

    darkModeToggle.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        body.classList.toggle("custom-dark-mode", isDarkMode);
        body.classList.toggle("custom-light-mode", !isDarkMode);
        darkModeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    });
});
