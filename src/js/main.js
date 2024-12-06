import '../css/style.css';
import Typed from 'typed.js';

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 60,
});

document
  .getElementById('toggle-menu-button')
  .addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.top === '0px') {
      menu.style.top = '-100%';
    } else {
      menu.style.top = '0px';
    }
  });
const toggleMenuButton = document.getElementById('toggle-menu-button');
const menu = document.getElementById('menu');

toggleMenuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Carousel
let currentSlide = 0;
const carouselInner = document.getElementById('carouselInner');
const totalSlides = carouselInner.children.length;

function moveCarousel(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}
