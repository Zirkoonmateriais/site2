(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const menuLinks = document.querySelectorAll('.main-nav a');
  const interestLinks = document.querySelectorAll('[data-interest]');
  const interestField = document.querySelector('#interest-field');
  const contactForm = document.querySelector('#contact-form');
  const currentYear = document.querySelector('#current-year');

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      menu.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  interestLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!interestField) return;
      const interest = link.dataset.interest;
      const option = [...interestField.options].find((item) => item.textContent.trim() === interest || item.value === interest);
      interestField.value = option ? option.value : 'Outro assunto';
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const company = String(data.get('company') || '').trim();
      const interest = String(data.get('interest') || '').trim();
      const message = String(data.get('message') || '').trim();

      if (!name || !interest || !message) {
        contactForm.reportValidity();
        return;
      }

      const text = [
        'Olá, equipe Zirkoon!',
        '',
        `Meu nome é ${name}.`,
        company ? `Empresa/instituição: ${company}.` : '',
        `Assunto: ${interest}.`,
        '',
        'Necessidade:',
        message,
        '',
        'Mensagem enviada pelo site da Zirkoon.'
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/5543988448864?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
