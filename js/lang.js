const translations = {
    en: {
      "home-title": "Welcome to My Portfolio",
      "home-subtitle": "Explore my projects and skills.",
      "contact-button": "Contact Me",
      "footer-text": "© 2025 All rights reserved.",
      "form-name": "Your Name",
      "form-email": "Your Email",
      "form-message": "Your Message",
      "form-submit": "Send Message"
    },
    es: {
      "home-title": "Bienvenido a Mi Portafolio",
      "home-subtitle": "Explora mis proyectos y habilidades.",
      "contact-button": "Contáctame",
      "footer-text": "© 2025 Todos los derechos reservados.",
      "form-name": "Tu Nombre",
      "form-email": "Tu Correo",
      "form-message": "Tu Mensaje",
      "form-submit": "Enviar Mensaje"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem('siteLang', lang);
  
    const langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  
    // Toggle active class on flags
    document.querySelector('#lang-en').classList.toggle('active', lang === 'en');
    document.querySelector('#lang-es').classList.toggle('active', lang === 'es');
  }
  
  // Add listeners
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('siteLang') || 'en';
    setLanguage(currentLang);
  
    document.querySelector('#lang-en').addEventListener('click', () => setLanguage('en'));
    document.querySelector('#lang-es').addEventListener('click', () => setLanguage('es'));
  });
  