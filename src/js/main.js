//import Typed from 'typed.js';

console.log('--- MAIN.JS VERSION JUNE 4 15:52 PM ---');
// import Typed from 'typed.js'; // MAKE SURE THIS IS COMMENTED/DELETED

document.addEventListener('DOMContentLoaded', () => {
  console.log('Main.js loaded and DOMContentLoaded. Version: JUNE 4 15:52 PM');
  // ... rest of your code
});

document.addEventListener('DOMContentLoaded', () => {
  // Wrap in DOMContentLoaded
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  var themeToggleBtn = document.getElementById('theme-toggle');

  // Your logo button redirect (if this is desired behavior)
  const logoButton1 = document.querySelector('.button1');
  if (logoButton1) {
    logoButton1.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }
  const logoButton2 = document.querySelector('.button2');
  if (logoButton2) {
    logoButton2.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  // Initial icon state based on theme

  if (themeToggleDarkIcon && themeToggleLightIcon) {
    if (document.documentElement.classList.contains('dark')) {
      themeToggleLightIcon.classList.remove('hidden');
      themeToggleDarkIcon.classList.add('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
      themeToggleLightIcon.classList.add('hidden');
    }
  } else {
    console.error('Theme toggle icons not found!');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      // toggle icons inside button
      if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
      }

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }
      } else {
        // if NOT set via local storage previously
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  } else {
    console.error('Theme toggle button not found!');
  }

  // Typed.js initialization
  const typedElement = document.getElementById('typed');
  const typedStringsElement = document.getElementById('typed-strings');
  if (typedElement && typedStringsElement) {
    try {
      var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        backSpeed: 40,
        typeSpeed: 60,
        loop: true, // Optional: if you want it to loop
      });
    } catch (e) {
      console.error('Typed.js initialization failed:', e);
    }
  }
});
