/**
 * Kolarovice Guest Guide - Main Logic
 * 1. Smooth Navigation Scroll
 * 2. Language Toggle (EN <-> SK)
 */

// --- 1. SMOOTH SCROLL FOR NAVIGATION ---
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Only trigger if the link is to a section on the same page
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

// --- 2. LANGUAGE TOGGLE LOGIC ---
let currentLang = 'en';

function toggleLang() {
    // Switch between English and Slovak
    currentLang = currentLang === 'en' ? 'sk' : 'en';
    
    // A. Update the Language Button Text
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        // If we just switched to 'en', the button should offer 'SK' next
        btn.textContent = currentLang === 'en' ? 'SK' : 'EN';
    }
    
    // B. Update all elements with [data-en] attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const newText = el.getAttribute('data-' + currentLang);
        if (newText) {
            // Using innerHTML so it can handle the <span> for "Homemade" tags
            el.innerHTML = newText;
        }
    });

    // C. Update the document language for SEO/Screen readers
    document.documentElement.lang = currentLang;

    // Optional: Save to console for testing
    console.log("Language switched to: " + currentLang.toUpperCase());
}

// Ensure the button starts with the correct label on page load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'en' ? 'SK' : 'EN';
    }
    console.log("Kolarovice Guide Loaded.");
});
