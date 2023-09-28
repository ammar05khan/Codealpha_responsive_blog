
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
darkModeToggleBtn.addEventListener('click', toggleDarkMode);
