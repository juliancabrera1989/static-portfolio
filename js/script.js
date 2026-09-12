// ==========================================================================
// 1. INYECTOR MODULAR ASÍNCRONO
// ==========================================================================
function cargarComponentesModulares() {
  return new Promise((resolve) => {
    const navbarContainer = document.getElementById("navbar-container");
    const footerContainer = document.getElementById("footer-container");
    const promesas = [];

    // Usar ruta relativa limpia para evitar desajustes en subcarpetas de GitHub Pages
    const basePath = window.location.pathname.includes('/static-portfolio/') ? '/static-portfolio/' : './';

    if (navbarContainer) {
      const pNavbar = fetch(`${basePath}components/navbar.html`)
        .then(res => {
          if (!res.ok) throw new Error("No se pudo cargar navbar.html");
          return res.text();
        })
        .then(html => {
          navbarContainer.innerHTML = html;
          
          const langActual = localStorage.getItem("portfolio_lang") || "en";
          if (typeof setLanguage === "function") {
            setLanguage(langActual);
          }
          
          const esIndex = window.location.pathname.endsWith("index.html") || 
                          window.location.pathname.endsWith("/static-portfolio/") || 
                          window.location.pathname === "/" || 
                          window.location.pathname === "";

          if (esIndex) {
            const links = navbarContainer.querySelectorAll("ul li a");
            links.forEach(link => {
              const href = link.getAttribute("href");
              if (href === "technologies.html") link.setAttribute("href", "#technologies-preview");
              if (href === "about.html") link.setAttribute("href", "#about-preview");
              if (href === "projects.html") link.setAttribute("href", "#projects-preview");
            });
          }

          const navElement = navbarContainer.querySelector("nav") || document.querySelector("nav");
          if (navElement) {
            navElement.classList.remove("scroll-down");
            if (window.scrollY <= 80) {
              navElement.classList.remove("scrolled");
            }
          }

          activarLogicaNavbar(); 
        })
        .catch(err => console.error("Error en Navbar:", err));
      promesas.push(pNavbar);
    }

    if (footerContainer) {
      const pFooter = fetch(`${basePath}components/footer.html`)
        .then(res => {
          if (!res.ok) throw new Error("No se pudo cargar footer.html");
          return res.text();
        })
        .then(html => {
          footerContainer.innerHTML = html;
        })
        .catch(err => console.error("Error en Footer:", err));
      promesas.push(pFooter);
    }

    if (promesas.length === 0) {
      resolve();
    } else {
          Promise.all(promesas).then(() => {
        // Fuerza al navegador a asentar el renderizado inicial en producción
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event('resize'));
        });
        resolve();
      });
    }
  });
}

// ==========================================================================
// 2. ORQUESTADOR GLOBAL
// ==========================================================================
(async function orquestadorGlobal() {
  const preloader = document.getElementById("preloader");

  if (!preloader || sessionStorage.getItem("preloaderShown")) {
    if (document.body) {
      document.body.classList.remove("preload-hidden");
    }
    cargarComponentesModulares();
    return;
  }

  await cargarComponentesModulares();

  const apagarPreloader = () => {
    setTimeout(() => {
      preloader.classList.add("loaded");
      setTimeout(() => {
        preloader.style.display = "none";
        if (document.body) {
          document.body.classList.remove("preload-hidden");
        }
        sessionStorage.setItem("preloaderShown", "true");
      }, 500);
    }, 600);
  };

  if (document.readyState === "complete") {
    apagarPreloader();
  } else {
    window.addEventListener("load", apagarPreloader);
  }
})();

// ==========================================================================
// 3. LOGICA NAVBAR DIFERENCIADA
// ==========================================================================
function activarLogicaNavbar() {
  const navbar = document.querySelector('nav') || document.getElementById('navbar-container');
  if (!navbar) return;

  const esIndex = window.location.pathname.endsWith("index.html") || 
                  window.location.pathname.endsWith("/static-portfolio/") || 
                  window.location.pathname === "/" || 
                  window.location.pathname === "";

  let ultimoScroll = window.scrollY;
  const tolerancia = 5;

  window.addEventListener('scroll', function () {
    const scrollActual = window.scrollY;

    if (scrollActual > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (esIndex) {
      navbar.classList.remove('scroll-down');
      navbar.classList.remove('scroll-up');
    } else {
      if (scrollActual <= 80) {
        navbar.classList.remove('scroll-down');
        navbar.classList.remove('scroll-up');
        ultimoScroll = scrollActual;
        return;
      }

      const diferencia = Math.abs(scrollActual - ultimoScroll);

      if (diferencia > tolerancia) {
        if (scrollActual > ultimoScroll && !navbar.classList.contains('scroll-down')) {
          navbar.classList.remove('scroll-up');
          navbar.classList.add('scroll-down');
        } else if (scrollActual < ultimoScroll && navbar.classList.contains('scroll-down')) {
          navbar.classList.remove('scroll-down');
          navbar.classList.add('scroll-up');
        }
      }
    }

    ultimoScroll = scrollActual;
  });

  const menuToggle = document.getElementById('menu-toggle') || document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// ==========================================================================
// 4. ANIMACIONES DE TARJETAS
// ==========================================================================
function activarAnimacionesPreview() {
  const cards = document.querySelectorAll('.preview-card');
  if (cards.length === 0) return;

  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  cards.forEach(card => {
    card.classList.add('reveal');
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  activarAnimacionesPreview();
});