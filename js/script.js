// // ===== Scroll Animation (Intersection Observer) =====
// document.addEventListener('DOMContentLoaded', () => {
//     const observerOptions = {
//       threshold: 0.1
//     };
  
//     const revealCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('reveal-visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     };
  
//     const observer = new IntersectionObserver(revealCallback, observerOptions);
  
//     document.querySelectorAll('.preview-card').forEach(card => {
//       card.classList.add('reveal'); // initial hidden state
//       observer.observe(card);
//     });
//   });
  

//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
//   console.log(navbar);
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 80) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
  











// // ===== Scroll Animation (Intersection Observer) =====
// document.addEventListener('DOMContentLoaded', async () => {
//   const observerOptions = {
//     threshold: 0.1
//   };

//   const revealCallback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('reveal-visible');
//         observer.unobserve(entry.target);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(revealCallback, observerOptions);

//   document.querySelectorAll('.preview-card').forEach(card => {
//     card.classList.add('reveal'); // initial hidden state
//     observer.observe(card);
//   });

//   // ==========================================================================
//   // PASO 1: INYECTAR NAVBAR MODULAR Y DEJAR EL SCROLL ORIGINAL CORRIENDO
//   // ==========================================================================
//   const navbarContainer = document.getElementById("navbar-container");
  
//   if (navbarContainer) {
//     try {
//       const response = await fetch("components/navbar.html");
//       navbarContainer.innerHTML = await response.text();
      
//       // Una vez que el HTML de la navbar ya existe, ejecutamos TU lógica original de scroll:
//       activarScrollOriginal();
//     } catch (error) {
//       console.error("Error cargando la Navbar modular:", error);
//     }
//   }
// });

// // Tu lógica original de scroll, aislada para que se ejecute en el momento justo
// function activarScrollOriginal() {
//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
//   console.log(navbar);
  
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 80) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
// }

















// // ===== CONTROL DEL PRELOADER EN TIEMPO REAL =====
// (function() {
//   // Si ya se mostró en esta sesión, lo liquidamos antes de que pinte la pantalla
//   if (sessionStorage.getItem("preloaderShown")) {
//     document.documentElement.classList.add("preloader-passed"); 
//     window.addEventListener('DOMContentLoaded', () => {
//       const preloader = document.getElementById("preloader");
//       if (preloader) preloader.style.display = "none";
//       document.body.classList.remove("preload-hidden");
//     });
//     return;
//   }

//   // Animación de carga fluida simulada hasta que el servidor responda
//   let progress = 0;
//   const fakeLoading = setInterval(() => {
//     const progressBar = document.getElementById("progress-bar");
//     const progressText = document.getElementById("progress-text");
    
//     if (progress < 85) {
//       progress += 2;
//       if (progressBar) progressBar.style.width = progress + "%";
//       if (progressText) progressText.textContent = Math.floor(progress) + "%";
//     }
//   }, 30);

//   // EVENTO CRÍTICO: El navegador terminó de cargar TODO (Imágenes, Videos, etc.)
//   window.addEventListener("load", () => {
//     clearInterval(fakeLoading);
//     const preloader = document.getElementById("preloader");
//     const progressBar = document.getElementById("progress-bar");
//     const progressText = document.getElementById("progress-text");

//     if (progressBar) progressBar.style.width = "100%";
//     if (progressText) progressText.textContent = "100%";

//     setTimeout(() => {
//       if (preloader) {
//         preloader.style.opacity = "0";
//         preloader.style.transition = "opacity 0.4s ease";
//         setTimeout(() => {
//           preloader.style.display = "none";
//           document.body.classList.remove("preload-hidden");
//         }, 400);
//       }
//       sessionStorage.setItem("preloaderShown", "true");
//     }, 200);
//   });
// })();

// // ===== Lógica de Componentes y Animaciones originales =====
// document.addEventListener('DOMContentLoaded', async () => {
//   const observerOptions = { threshold: 0.1 };

//   const revealCallback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('reveal-visible');
//         observer.unobserve(entry.target);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(revealCallback, observerOptions);

//   document.querySelectorAll('.preview-card').forEach(card => {
//     card.classList.add('reveal');
//     observer.observe(card);
//   });

//   // PASO 1: Inyectar Navbar modular de forma segura
//   const navbarContainer = document.getElementById("navbar-container");
//   const footerContainer = document.getElementById("footer-container");
//   if (navbarContainer) {
//     try {
//       const response = await fetch("components/navbar.html");
//       navbarContainer.innerHTML = await response.text();
//       activarScrollOriginal();
//     } catch (error) {
//       console.error("Error cargando la Navbar modular:", error);
//     }
//   }


//   if (footerContainer) {
//     try {
//       const response = await fetch("components/footer.html");
//       footerContainer.innerHTML = await response.text();
//     } catch (error) {
//       console.error("Error al cargar el Footer modular:", error);
//     }
//   }

// });

// function activarScrollOriginal() {
//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
  
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 80) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });



// const menuToggle = document.getElementById('menu-toggle');
//   const navLinks = document.getElementById('nav-links');

//   if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active'); // Prende y apaga el menú lateral
//     });
//   }
// }





// ==========================================================================
// 1. CONTROL DEL PRELOADER EN TIEMPO REAL (Solo corre si existe el elemento)
// ==========================================================================
(function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return; // Si la página no tiene preloader, frena acá y no hace nada más

  if (sessionStorage.getItem("preloaderShown")) {
    document.documentElement.classList.add("preloader-passed"); 
    preloader.style.display = "none";
    document.body.classList.remove("preload-hidden");
    return;
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.4s ease";
      setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.remove("preload-hidden");
      }, 400);
      sessionStorage.setItem("preloaderShown", "true");
    }, 500); // Margen para apreciar la entrada del video/GIF
  });
})();

// ==========================================================================
// 2. INYECTOR MODULAR DE COMPONENTES (Sirve para TODAS las páginas)
// ==========================================================================
async function cargarComponentesModulares() {
  const navbarContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");

  if (navbarContainer) {
    try {
      const response = await fetch("components/navbar.html");
      navbarContainer.innerHTML = await response.text();
      
      // ==========================================================================
      // EL TRUCO ESTILO PHP: Cambiar comportamiento según la página actual
      // ==========================================================================
      const esIndex = window.location.pathname === "/" || 
                      window.location.pathname.endsWith("index.html") || 
                      window.location.pathname === "";

      if (esIndex) {
        // Si es el Home, buscamos los links específicos y los transformamos en anclas de scroll (#)
        const links = navbarContainer.querySelectorAll("ul li a");
        links.forEach(link => {
          const href = link.getAttribute("href");
          if (href === "technologies.html") link.setAttribute("href", "#technologies-preview");
          if (href === "about.html") link.setAttribute("href", "#about-preview");
          if (href === "projects.html") link.setAttribute("href", "#projects-preview");
        });
      }

      // Activamos la lógica de scroll y celular una vez procesados los links
      activarLogicaNavbar();
    } catch (error) {
      console.error("Error cargando la Navbar modular:", error);
    }
  }

  if (footerContainer) {
    try {
      const response = await fetch("components/footer.html");
      footerContainer.innerHTML = await response.text();
    } catch (error) {
      console.error("Error al cargar el Footer modular:", error);
    }
  }
}

// ==========================================================================
// 3. LÓGICA INTERNA DE LA NAVBAR (Scroll + Menú Hamburguesa)
// ==========================================================================
function activarLogicaNavbar() {
  const navbarColl = document.getElementsByTagName('nav');
  const navbar = navbarColl[0];
  
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// ==========================================================================
// 4. ANIMACIONES DE REVELADO (Solo corre si hay tarjetas en la página)
// ==========================================================================
function activarAnimacionesPreview() {
  const cards = document.querySelectorAll('.preview-card');
  if (cards.length === 0) return; // Si no hay tarjetas (ej: en el blog), frena acá

  const observerOptions = { threshold: 0.1 };
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, observerOptions);
  cards.forEach(card => {
    card.classList.add('reveal');
    observer.observe(card);
  });
}

// ==========================================================================
// DISPARADOR GLOBAL: Controla la ejecución ordenada al cargar el DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  cargarComponentesModulares();
  activarAnimacionesPreview();
});