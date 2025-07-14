// script.js
const toggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');

// On load: apply saved or system preference
if (saved === 'dark' || (!saved && prefersDark)) {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

// Toggle handler
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
