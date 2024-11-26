/* *****************************************|وضع الليل و النهار|***************************************** */

function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById('darkModeIcon');
  const isDarkMode = body.classList.toggle('dark-mode');

  // تبديل الأيقونة بناءً على الوضع
  toggleIcon(darkModeIcon, isDarkMode);

  // حفظ الحالة
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function toggleIcon(iconElement, isActive) {
  iconElement.classList.toggle('fa-moon', !isActive);
  iconElement.classList.toggle('fa-sun', isActive);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const darkModeIcon = document.getElementById('darkModeIcon');
  const isDarkMode = savedTheme === 'dark';

  document.body.classList.toggle('dark-mode', isDarkMode);
  toggleIcon(darkModeIcon, isDarkMode);
}

window.onload = loadTheme;

/* *****************************************|الهيدر|***************************************** */

function toggleHeaderActivation(isActive) {
  const header = document.querySelector('header');
  header.classList.toggle('active-header', isActive);
}

document.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > 0;
  toggleHeaderActivation(isScrolled);
});

/* *****************************************|القائمة الجانبية|***************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.getElementById("bars");
  const close = document.getElementById("close");
  const menu = document.querySelector(".menu");
  const body = document.body;

  bars.addEventListener("click", function () {
    menu.style.right = "0";
    close.style.display = "block";
    body.style.overflow = "hidden";
  });

  close.addEventListener("click", function () {
    menu.style.right = "-100%";
    close.style.display = "block";
    body.style.overflow = "auto";
  });
});
