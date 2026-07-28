// Mobile nav dropdown toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

function closeDrawer() {
  mobileNav.classList.remove('open');
  menuToggle.classList.remove('open');
  overlay.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

overlay.addEventListener('click', closeDrawer);
mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});

// Scroll-spy: highlight active section link (desktop nav + mobile dropdown)
const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a[href^="#"]');
const sections = [...new Set([...navLinks].map((link) => link.getAttribute('href')))]
  .map((href) => document.querySelector(href));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => section && observer.observe(section));

// ===== Design cycler =====
// Cycles the whole site's look live through several complete themes,
// so visitors experience the design range instead of just reading about it.
const THEMES = [
  { key: 'aurora', name: 'Aurora', desc: 'Modern & frisch' },
  { key: 'midnight', name: 'Midnight', desc: 'Dunkel & edel' },
  { key: 'sunset', name: 'Sunset', desc: 'Verspielt & warm' },
  { key: 'mono', name: 'Mono', desc: 'Klar & corporate' },
  { key: 'forest', name: 'Forest', desc: 'Natürlich & organisch' },
  { key: 'neon', name: 'Neon', desc: 'Mutig & futuristisch' },
  { key: 'poster', name: 'Poster', desc: 'Laut & plakativ' },
];
const AUTOPLAY_MS = 6000;

const root = document.documentElement;
const themeName = document.getElementById('themeName');
const themeDesc = document.getElementById('themeDesc');
const prevThemeBtn = document.getElementById('prevTheme');
const nextThemeBtn = document.getElementById('nextTheme');
const playPauseBtn = document.getElementById('playPause');
const swatchCards = [...document.querySelectorAll('.swatch-card')];

let themeIndex = 0;
let autoplay = true;
let autoplayTimer = null;

function applyTheme(index, options = {}) {
  const { restart = true } = options;
  themeIndex = (index + THEMES.length) % THEMES.length;
  const theme = THEMES[themeIndex];

  root.setAttribute('data-theme', theme.key);
  themeName.textContent = theme.name;
  themeDesc.textContent = theme.desc;
  swatchCards.forEach((card, i) => card.classList.toggle('active', i === themeIndex));

  if (restart) restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplayTimer);
  if (!autoplay) return;
  autoplayTimer = setInterval(() => applyTheme(themeIndex + 1, { restart: false }), AUTOPLAY_MS);
}

prevThemeBtn.addEventListener('click', () => applyTheme(themeIndex - 1));
nextThemeBtn.addEventListener('click', () => applyTheme(themeIndex + 1));
swatchCards.forEach((card, i) => card.addEventListener('click', () => applyTheme(i)));

playPauseBtn.addEventListener('click', () => {
  autoplay = !autoplay;
  playPauseBtn.textContent = autoplay ? '⏸' : '▶';
  playPauseBtn.setAttribute('aria-label', autoplay ? 'Automatischen Wechsel pausieren' : 'Automatischen Wechsel starten');
  restartAutoplay();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(autoplayTimer);
  } else {
    restartAutoplay();
  }
});

// Pause auto-cycling while the visitor is filling out the contact form
const contactForm = document.getElementById('contactForm');
contactForm.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('focus', () => clearInterval(autoplayTimer));
  field.addEventListener('blur', () => restartAutoplay());
});

applyTheme(0, { restart: false });
restartAutoplay();

// Contact form (demo only, no backend)
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Danke für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen. 🎨';
  contactForm.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
