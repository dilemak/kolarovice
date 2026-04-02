// Handle navigation and smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Only prevent default if it's an internal link
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Language toggle logic
let currentLang = 'en';

function toggleLang() {
    // 1. Toggle the language variable
    currentLang = currentLang === 'en' ? 'sk' : 'en';
    
    // 2. Update the button appearance
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        // If current is EN, button shows "SK" (the option to switch)
        btn.textContent = currentLang === 'en' ? 'SK' : 'EN';
        btn.classList.toggle('active', currentLang === 'sk');
    }
    
    // 3. Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const newText = el.getAttribute('data-' + currentLang);
        if (newText) {
            // Use innerHTML instead of textContent if you have 
            // <span> tags (like "Homemade") inside your text attributes.
            el.innerHTML = newText;
        }
    });
    
    // 4. Update the HTML document language for SEO
    document.documentElement.lang = currentLang;
}

console.log("Kolarovice Guide Loaded. Nature first! 🌲");
