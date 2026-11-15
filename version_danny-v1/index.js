
// Top UI scroll effect
const topUI = document.querySelector('.top-ui');
const menuBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.menu-sidebar');
const siteWrap = document.querySelector('.site-wrap');

window.addEventListener('scroll', () => {
  topUI.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu toggle
if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    siteWrap.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
  });
}

// Close menu when clicking outside or on links
document.addEventListener('click', (e) => {
  if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove('open');
    siteWrap.classList.remove('menu-open');
    document.body.classList.remove('no-scroll');
  }
});

// Preloader
const preloader = document.getElementById('preloader');
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 800);
    }, 1200);
  });
}

// Product interactions
document.querySelectorAll('.product-item').forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('active'));
  item.addEventListener('mouseleave', () => item.classList.remove('active'));
});

console.log('SeamX danny-v1 ready');
