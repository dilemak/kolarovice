
<!-- ================= script.js ================= -->
// original smooth scroll kept

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WORKING language switch (simple but real)
function setLang(lang) {
    document.getElementById('htmlRoot').setAttribute('lang', lang);

    const subtitle = document.getElementById('subtitle');

    if (lang === 'sk') {
        subtitle.textContent = 'Oddych v slovenskej prírode';
    } else {
        subtitle.textContent = 'Nature escape in the Slovak hills';
    }
}

console.log("Kolarovice Guide Loaded.");
