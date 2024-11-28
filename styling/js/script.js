// Add scroll effect to change navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#f8f8f8';
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = '#fff';
      navbar.style.boxShadow = 'none';
    }
  });

// Navbar

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero Section

document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
  });
  
