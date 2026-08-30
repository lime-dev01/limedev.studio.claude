document.addEventListener('DOMContentLoaded', () => {

  /* =============================================
     MENU MOBILE
  ============================================= */
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =============================================
     FORMULAIRE DE CONTACT (Formspree en AJAX)
  ============================================= */
  const form = document.querySelector('.contact-form');

  if (form) {
    const feedback = document.createElement('p');
    feedback.className = 'form-feedback';
    feedback.setAttribute('role', 'status');
    form.appendChild(feedback);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Envoi en cours...';
      feedback.textContent = '';
      feedback.className = 'form-feedback';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          feedback.textContent = 'Message envoyé — je vous réponds sous 24 à 48h.';
          feedback.classList.add('form-feedback--success');
        } else {
          feedback.textContent = "Une erreur est survenue. Réessayez ou écrivez-moi directement sur Instagram.";
          feedback.classList.add('form-feedback--error');
        }
      } catch (err) {
        feedback.textContent = "Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.";
        feedback.classList.add('form-feedback--error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  /* =============================================
     RÉVÉLATION AU SCROLL
  ============================================= */
  const revealTargets = document.querySelectorAll(
    '.section-head, .section-body, .skill-card, .work-card, .contact-form'
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  }

});
