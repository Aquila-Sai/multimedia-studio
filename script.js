// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme, themeIcon);
        });
    }
}

function updateThemeIcon(theme, iconElement) {
    if (iconElement) {
        iconElement.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    initThemeToggle();
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Planet Age Calculator
function calculatePlanetAges() {
    const earthAge = parseFloat(document.getElementById('earth-age').value);
    
    if (isNaN(earthAge) || earthAge < 0) {
        alert('Please enter a valid age! 🌸');
        return;
    }

    // Orbital periods (Earth years)
    const orbitalPeriods = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 1.0,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    // Calculate ages
    document.getElementById('mercury-age').textContent = (earthAge / orbitalPeriods.mercury).toFixed(1) + ' years';
    document.getElementById('venus-age').textContent = (earthAge / orbitalPeriods.venus).toFixed(1) + ' years';
    document.getElementById('earth-result').textContent = earthAge + ' years';
    document.getElementById('mars-age').textContent = (earthAge / orbitalPeriods.mars).toFixed(1) + ' years';
    document.getElementById('jupiter-age').textContent = (earthAge / orbitalPeriods.jupiter).toFixed(1) + ' years';
    document.getElementById('saturn-age').textContent = (earthAge / orbitalPeriods.saturn).toFixed(1) + ' years';
    document.getElementById('uranus-age').textContent = (earthAge / orbitalPeriods.uranus).toFixed(1) + ' years';
    document.getElementById('neptune-age').textContent = (earthAge / orbitalPeriods.neptune).toFixed(1) + ' years';

    // Add animation effect to results
    const ageItems = document.querySelectorAll('.planet-age-item');
    ageItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('earth-age');
    if (ageInput) {
        ageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculatePlanetAges();
            }
        });
    }
});

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section, .card, .timeline-item, .video-card, .tool-card, .planet-card');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with hidden state
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.section, .card, .timeline-item, .video-card, .tool-card, .planet-card');
    
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Trigger initial reveal
    setTimeout(revealOnScroll, 100);
});

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Add floating animation to decorative elements
document.addEventListener('DOMContentLoaded', function() {
    const floatItems = document.querySelectorAll('.float-item');
    
    floatItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 2}s`;
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .video-card, .tool-card, .planet-card, .spec-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Console easter egg �
console.log('%c � Welcome to Multimedia Studio! � ', 'background: linear-gradient(135deg, #FFEB3B, #FFC107); color: #4A4A4A; font-size: 20px; padding: 10px; border-radius: 10px;');
console.log('%c Created with � by Nathaniell Jeffrey F. Hernandez ', 'color: #FBC02D; font-size: 14px;');
