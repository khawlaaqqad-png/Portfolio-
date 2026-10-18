// Theme change function
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = '<i class="fas fa-sun"></i> Light';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
        localStorage.setItem('theme', 'light');
    }
}


// Save theme
window.onload = function() {

    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('themeBtn');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btn.innerHTML = '<i class="fas fa-sun"></i> Light';
    } else {
        document.body.classList.remove('dark-mode');
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
    }
};