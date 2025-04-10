function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const btn = document.querySelector('.toggle-btn');
    btn.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
}
