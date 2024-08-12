// JavaScript for NutriFit - Fitness & Nutrition

// Mobile Menu Toggle
const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    // Close mobile menu after click (if open)
    if (navMenu.classList.contains('flex') && window.innerWidth < 768) {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex');
    }
  });
});

// Animate Elements on Scroll
const animateElements = document.querySelectorAll('.animate__animated');

function checkVisibility() {
  animateElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      element.classList.add('animate__fadeIn');
    } else {
      element.classList.remove('animate__fadeIn');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Responsive Section Background Adjustment
const homeSection = document.querySelector('#home');
const adjustBackgroundSize = () => {
  if (window.innerWidth < 768) {
    homeSection.style.backgroundPosition = 'center';
  } else {
    homeSection.style.backgroundPosition = 'center';
  }
};

window.addEventListener('resize', adjustBackgroundSize);
window.addEventListener('load', adjustBackgroundSize);

// Social Media Icons Hover Effect
const socialIcons = document.querySelectorAll('ul li a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('hover:text-orange-600');
  });

  icon.addEventListener('mouseout', () => {
    icon.classList.remove('hover:text-orange-600');
  });
});
