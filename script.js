// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Language Toggle
let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'sk' : 'en';
    const btn = document.getElementById('lang-toggle');
    
    // Update button text to show the other option
    btn.textContent = currentLang === 'en' ? 'SK' : 'EN';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute('data-' + currentLang);
        if (text) {
            el.innerHTML = text;
        }
    });
    
    document.documentElement.lang = currentLang;
}

console.log("Kolarovice Guide Loaded.");
