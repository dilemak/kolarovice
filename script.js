// Handle navigation and smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Language toggle
let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'sk' : 'en';
    const btn = document.getElementById('lang-toggle');
    btn.textContent = currentLang === 'en' ? 'SK' : 'EN';
    btn.classList.toggle('active', currentLang === 'sk');
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
    document.documentElement.lang = currentLang;
}

console.log("Kolarovice Guide Loaded.");
