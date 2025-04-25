document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
htmlElement.classList.toggle('dark', currentTheme === 'dark');

toggleButton.addEventListener('click', () => {
const isDark = htmlElement.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
});