const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
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
