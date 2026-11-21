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
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

// Animasi. Tanpa JavaScript atau dengan reduced motion, semua konten tetap tampil.
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const loader = document.querySelector('.loader');

function stopStatic() { root.classList.add('static'); if (loader) loader.remove(); }

if (reduce || !window.gsap || !window.ScrollTrigger) {
  stopStatic();
} else {
  init();
}

function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.setAttribute('aria-label', el.textContent.trim());
  el.innerHTML = words.map((w) => `<span class="w" aria-hidden="true"><span>${w}</span></span>`).join(' ');
  return el.querySelectorAll('.w > span');
}
function splitLines(el) {
  const lines = el.innerHTML.split(/<br\s*\/?>/i);
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  el.innerHTML = lines.map((l) => `<span class="l" aria-hidden="true"><span>${l}</span></span>`).join('');
  return el.querySelectorAll('.l > span');
}

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Smooth scroll.
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || a.getAttribute('href') === '#') return;
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -68 });
    });
  }

  // Scroll progress bar.
  gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });

  // Split text.
  const heroLines = splitLines(document.querySelector('.split-lines'));
  const headings = [...document.querySelectorAll('.split-words')].map((h) => ({ h, words: splitWords(h) }));
  gsap.set(heroLines, { yPercent: 115 });
  gsap.set('.hero-in', { y: 30, opacity: 0 });
  gsap.set('.scroll-cue', { opacity: 0 });
  gsap.set('.site-header', { yPercent: -100 });

  // Loader, then hero intro.
  const word = loader.querySelector('.loader-word');
  word.innerHTML = [...word.textContent].map((c) => `<i>${c}</i>`).join('');
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('.loader-word i', { yPercent: 120, opacity: 0, duration: 0.6, stagger: 0.05 })
    .to(loader, { '--p': 1, duration: 0.7, ease: 'power1.inOut', onUpdate() { loader.querySelector('.loader-bar').style.setProperty('--p', this.progress()); } }, 0.2)
    .to(loader, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', onComplete: () => loader.remove() }, '+=0.15')
    .from('.hero-pic', { scale: 1.25, duration: 1.8, ease: 'power2.out' }, '<0.2')
    .to('.site-header', { yPercent: 0, duration: 0.7 }, '<0.3')
    .to(heroLines, { yPercent: 0, duration: 1, stagger: 0.12 }, '<0.1')
    .to('.hero-in', { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, '<0.3')
    .to('.scroll-cue', { opacity: 0.8, duration: 0.6 }, '<0.3');
  gsap.delayedCall(5, () => { if (loader.isConnected) { loader.remove(); gsap.set(['.site-header', '.hero-in'], { clearProps: 'all' }); gsap.set(heroLines, { yPercent: 0 }); } });

  // Hero: parallax and fade while scrolling away.
  gsap.to('.hero-pic img', { yPercent: 14, scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-inner', { yPercent: -18, opacity: 0.1, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 20%', scrub: true } });
  gsap.to('.hero-pic', { scale: 1.05, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' });

  // Headings: word by word.
  headings.forEach(({ h, words }) => {
    gsap.set(words, { yPercent: 115, rotate: 6 });
    gsap.to(words, { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 85%' } });
  });
  gsap.utils.toArray('.eyebrow:not(.hero-in)').forEach((el) => {
    gsap.from(el, { x: -30, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  // Marquee reacts to scroll speed.
  if (lenis) {
    const skew = gsap.quickTo('.marquee-track', 'skewX', { duration: 0.5, ease: 'power3.out' });
    lenis.on('scroll', ({ velocity }) => skew(gsap.utils.clamp(-12, 12, velocity * -0.6)));
  }

  // Services: pinned horizontal scroll on desktop, staggered grid elsewhere.
  const mm = gsap.matchMedia();
  const services = document.querySelector('.services');
  const cards = services.querySelector('.cards');
  mm.add('(min-width: 900px)', () => {
    services.classList.add('hscroll');
    const dist = () => Math.max(0, cards.scrollWidth - window.innerWidth);
    const tween = gsap.to(cards, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: services, start: 'top top+=68', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    gsap.from('.services .card', { y: 80, opacity: 0, rotateY: -25, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: services, start: 'top 75%' } });
    return () => { services.classList.remove('hscroll'); gsap.set(cards, { clearProps: 'transform' }); };
  });
  mm.add('(max-width: 899px)', () => {
    gsap.from('.services .card', { y: 60, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: cards, start: 'top 85%' } });
  });

  // Card spotlight and 3D tilt.
  if (fine) {
    document.querySelectorAll('.card').forEach((card) => {
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.4 });
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.4 });
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', x * 100 + '%');
        card.style.setProperty('--my', y * 100 + '%');
        ry((x - 0.5) * 10); rx((0.5 - y) * 10);
      });
      card.addEventListener('pointerleave', () => { rx(0); ry(0); });
    });
    // Magnetic buttons.
    document.querySelectorAll('.magnet').forEach((b) => {
      const mx = gsap.quickTo(b, 'x', { duration: 0.4, ease: 'power3.out' });
      const my = gsap.quickTo(b, 'y', { duration: 0.4, ease: 'power3.out' });
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        mx((e.clientX - r.left - r.width / 2) * 0.25); my((e.clientY - r.top - r.height / 2) * 0.35);
      });
      b.addEventListener('pointerleave', () => { mx(0); my(0); });
    });
  }

  // Steps: orange line draws, steps rise in, gear turns.
  gsap.set('.line span', { scaleX: 0 });
  gsap.to('.line span', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 85%', end: 'bottom 60%', scrub: true } });
  gsap.from('.steps li', { y: 70, opacity: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out', scrollTrigger: { trigger: '.steps', start: 'top 85%' } });
  gsap.to('.gear-bg', { rotation: 180, ease: 'none', scrollTrigger: { trigger: '#datang', start: 'top bottom', end: 'bottom top', scrub: true } });

  // FAQ and contact.
  gsap.from('.faq-list details', { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } });
  gsap.from('.contact address, .contact .button', { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.contact', start: 'top 70%' } });

  // Footer: giant outline word slides with scroll.
  gsap.fromTo('.footer-big', { xPercent: 12 }, { xPercent: -12, ease: 'none', scrollTrigger: { trigger: '.site-footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });

  window.addEventListener('load', () => ScrollTrigger.refresh());
}
