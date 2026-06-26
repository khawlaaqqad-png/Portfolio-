//Theme change function
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    const img = document.getElementById('profileImg');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = '<i class="fas fa-sun"></i> light';
        img.src = './static/pexels-danny-meneses-340146-943096.jpg';   //  changes image when the theme changes.
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
        img.src = './static/pexels-elletakesphotos-5155218.jpg';  
        localStorage.setItem('theme', 'light');
    }
}

//Save function on results
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('themeBtn');
    const img = document.getElementById('profileImg');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btn.innerHTML = '<i class="fas fa-sun"></i> light';
        img.src = './static/pexels-danny-meneses-340146-943096.jpg';
    } else {
        document.body.classList.remove('dark-mode');
        btn.innerHTML = '<i class="fas fa-moon"></i> Dark';
        img.src = './static/pexels-elletakesphotos-5155218.jpg';
    }
};