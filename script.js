const btn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');

if (stored === 'dark' || (!stored && prefersDark)) {
  document.body.classList.add('dark-mode');
  btn.textContent = '☀️';
}

btn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark-mode');
  btn.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});
