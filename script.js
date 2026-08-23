const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  favicon.href = 'assets/favicon-glycan-v.svg?v=2';
  favicon.type = 'image/svg+xml';
}

const mobileStyles = document.createElement('link');
mobileStyles.rel = 'stylesheet';
mobileStyles.href = 'mobile.css';
document.head.appendChild(mobileStyles);

if (window.location.pathname.endsWith('publications.html')) {
  const pubStyles = document.createElement('link');
  pubStyles.rel = 'stylesheet';
  pubStyles.href = 'publications.css';
  document.head.appendChild(pubStyles);
}

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (links) {
  const oldJoinLink = links.querySelector('a[href="join.html"]');
  if (oldJoinLink) {
    oldJoinLink.href = 'news.html';
    oldJoinLink.textContent = 'News';
  }
  const contactLink = links.querySelector('a[href="contact.html"]');
  if (contactLink) contactLink.textContent = 'Join Us';
}

if (header && !header.classList.contains('light-page')) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 36);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
}
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
  }));
}
const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }});
},{threshold:.12}) : null;
document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
