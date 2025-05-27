document.addEventListener('DOMContentLoaded', function () {
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Fix button click - use relative path
  const button1 = document.querySelector('.button1');
  if (button1) {
    button1.addEventListener('click', function () {
      window.location.href = './'; // Change from '/' to './'
    });
  }

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    if (themeToggleLightIcon) {
      themeToggleLightIcon.classList.remove('hidden');
    }
    document.documentElement.classList.add('dark');
  } else {
    if (themeToggleDarkIcon) {
      themeToggleDarkIcon.classList.remove('hidden');
    }
    document.documentElement.classList.remove('dark');
  }

  var themeToggleBtn = document.getElementById('theme-toggle');
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
  }

  // Initialize Typed.js only if elements exist
  const typedElement = document.getElementById('typed');
  const typedStringsElement = document.getElementById('typed-strings');

  if (typedElement && typedStringsElement && typeof Typed !== 'undefined') {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      backSpeed: 40,
      typeSpeed: 60,
    });
  }

  // Menu toggle functionality
  const toggleMenuButton = document.getElementById('toggle-menu-button');
  const menu = document.getElementById('menu');

  if (toggleMenuButton && menu) {
    toggleMenuButton.addEventListener('click', function () {
      // Use classList.toggle for consistency
      menu.classList.toggle('hidden');
    });
  }
});
