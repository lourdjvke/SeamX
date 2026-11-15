
// Top UI scroll effect
const topUI = document.querySelector('.top-ui');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const preloader = document.getElementById('preloader');

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.remove('active');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }, 1500);
});

// Scroll effect for top UI
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        topUI.classList.add('scrolled');
    } else {
        topUI.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Simple product hover / interaction placeholders
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

console.log('SeamX version_danny-v1 loaded');
