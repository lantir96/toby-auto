// Navigasi ponsel.
const header = document.getElementById('site-header');
const toggle = header.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

function setNav(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
  nav.classList.toggle('open', open);
}

toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (event) => { if (event.target.closest('a')) setNav(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setNav(false); });
