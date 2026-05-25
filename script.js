function toggle(id) {
  const item = document.getElementById(id);
  const btn = item.querySelector('.faq-q');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
}