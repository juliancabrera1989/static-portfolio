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





// // ==========================================================================
// // 1. CONTROL DEL PRELOADER EN TIEMPO REAL (Solo corre si existe el elemento)
// // ==========================================================================
// (function initPreloader() {
//   const preloader = document.getElementById("preloader");
//   if (!preloader) return; // Si la página no tiene preloader, frena acá y no hace nada más

//   if (sessionStorage.getItem("preloaderShown")) {
//     document.documentElement.classList.add("preloader-passed"); 
//     preloader.style.display = "none";
//     document.body.classList.remove("preload-hidden");
//     return;
//   }

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       preloader.style.opacity = "0";
//       preloader.style.transition = "opacity 0.4s ease";
//       setTimeout(() => {
//         preloader.style.display = "none";
//         document.body.classList.remove("preload-hidden");
//       }, 400);
//       sessionStorage.setItem("preloaderShown", "true");
//     }, 500); // Margen para apreciar la entrada del video/GIF
//   });
// })();

// // ==========================================================================
// // 2. INYECTOR MODULAR DE COMPONENTES (Sirve para TODAS las páginas)
// // ==========================================================================
// async function cargarComponentesModulares() {
//   const navbarContainer = document.getElementById("navbar-container");
//   const footerContainer = document.getElementById("footer-container");

//   if (navbarContainer) {
//     try {
//       const response = await fetch("components/navbar.html");
//       navbarContainer.innerHTML = await response.text();
      
//       // ==========================================================================
//       // EL TRUCO ESTILO PHP: Cambiar comportamiento según la página actual
//       // ==========================================================================
//       const esIndex = window.location.pathname === "/" || 
//                       window.location.pathname.endsWith("index.html") || 
//                       window.location.pathname === "";

//       if (esIndex) {
//         // Si es el Home, buscamos los links específicos y los transformamos en anclas de scroll (#)
//         const links = navbarContainer.querySelectorAll("ul li a");
//         links.forEach(link => {
//           const href = link.getAttribute("href");
//           if (href === "technologies.html") link.setAttribute("href", "#technologies-preview");
//           if (href === "about.html") link.setAttribute("href", "#about-preview");
//           if (href === "projects.html") link.setAttribute("href", "#projects-preview");
//         });
//       }

//       // Activamos la lógica de scroll y celular una vez procesados los links
//       activarLogicaNavbar();
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
// }

// // ==========================================================================
// // 3. LÓGICA INTERNA DE LA NAVBAR (Scroll + Menú Hamburguesa)
// // ==========================================================================
// function activarLogicaNavbar() {
//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
  
//   if (navbar) {
//     window.addEventListener('scroll', function () {
//       if (window.scrollY > 80) {
//         navbar.classList.add('scrolled');
//       } else {
//         navbar.classList.remove('scrolled');
//       }
//     });
//   }

//   const menuToggle = document.getElementById('menu-toggle');
//   const navLinks = document.getElementById('nav-links');

//   if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });
//   }
// }

// // ==========================================================================
// // 4. ANIMACIONES DE REVELADO (Solo corre si hay tarjetas en la página)
// // ==========================================================================
// function activarAnimacionesPreview() {
//   const cards = document.querySelectorAll('.preview-card');
//   if (cards.length === 0) return; // Si no hay tarjetas (ej: en el blog), frena acá

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
//   cards.forEach(card => {
//     card.classList.add('reveal');
//     observer.observe(card);
//   });
// }

// // ==========================================================================
// // DISPARADOR GLOBAL: Controla la ejecución ordenada al cargar el DOM
// // ==========================================================================
// document.addEventListener('DOMContentLoaded', () => {
//   cargarComponentesModulares();
//   activarAnimacionesPreview();
// });


















// // ==========================================================================
// // 1. INYECTOR MODULAR DE COMPONENTES (Sirve para TODAS las páginas)
// // ==========================================================================
// async function cargarComponentesModulares() {
//   const navbarContainer = document.getElementById("navbar-container");
//   const footerContainer = document.getElementById("footer-container");

//   if (navbarContainer) {
//     try {
//       const response = await fetch("components/navbar.html");
//       navbarContainer.innerHTML = await response.text();
      
//       // Filtro para transformar links en anclas de scroll si estamos en el Home
//       const esIndex = window.location.pathname === "/" || 
//                       window.location.pathname.endsWith("index.html") || 
//                       window.location.pathname === "";

//       if (esIndex) {
//         const links = navbarContainer.querySelectorAll("ul li a");
//         links.forEach(link => {
//           const href = link.getAttribute("href");
//           if (href === "technologies.html") link.setAttribute("href", "#technologies-preview");
//           if (href === "about.html") link.setAttribute("href", "#about-preview");
//           if (href === "projects.html") link.setAttribute("href", "#projects-preview");
//         });
//       }

//       // Se activa la lógica de scroll una vez inyectada la navbar
//       activarLogicaNavbar();
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
// }

// // ==========================================================================
// // 2. LÓGICA INTERNA DE LA NAVBAR (Tu código original de scroll)
// // ==========================================================================
// function activarLogicaNavbar() {
//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
  
//   if (navbar) {
//     window.addEventListener('scroll', function () {
//       if (window.scrollY > 80) {
//         navbar.classList.add('scrolled');
//       } else {
//         navbar.classList.remove('scrolled');
//       }
//     });
//   }

//   // Soporte para menú hamburguesa
//   const menuToggle = document.getElementById('menu-toggle');
//   const navLinks = document.getElementById('nav-links');
//   if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });
//   }
// }

// // ==========================================================================
// // 3. ANIMACIONES DE REVELADO (Tu Intersection Observer original)
// // ==========================================================================
// function activarAnimacionesPreview() {
//   const cards = document.querySelectorAll('.preview-card');
//   if (cards.length === 0) return;

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
//   cards.forEach(card => {
//     card.classList.add('reveal');
//     observer.observe(card);
//   });
// }

// // ==========================================================================
// // DISPARADOR GLOBAL: Controla la ejecución ordenada al cargar el DOM
// // ==========================================================================
// document.addEventListener('DOMContentLoaded', () => {
//   cargarComponentesModulares();
//   activarAnimacionesPreview();
// });











// // ==========================================================================
// // 1. INYECTOR MODULAR ASÍNCRONO
// // ==========================================================================
// function cargarComponentesModulares() {
//   return new Promise((resolve) => {
//     const navbarContainer = document.getElementById("navbar-container");
//     const footerContainer = document.getElementById("footer-container");
//     const promesas = [];

//     // Detectamos automáticamente la ruta base (funciona tanto en local como en GitHub Pages con subcarpeta)
//     const basePath = window.location.pathname.includes('/static-portfolio/') ? '/static-portfolio/' : '/';

//     if (navbarContainer) {
//       const pNavbar = fetch(`${basePath}components/navbar.html`)
//         .then(res => res.text())
//         .then(html => {
//           navbarContainer.innerHTML = html;
          
//           const esIndex = window.location.pathname.endsWith("index.html") || 
//                           window.location.pathname.endsWith("/static-portfolio/") || 
//                           window.location.pathname === "/" || 
//                           window.location.pathname === "";

//           if (esIndex) {
//             const links = navbarContainer.querySelectorAll("ul li a");
//             links.forEach(link => {
//               const href = link.getAttribute("href");
//               if (href === "technologies.html") link.setAttribute("href", "#technologies-preview");
//               if (href === "about.html") link.setAttribute("href", "#about-preview");
//               if (href === "projects.html") link.setAttribute("href", "#projects-preview");
//             });
//           }

//           // ---> INTEGRACIÓN DEL RESETEO DE SEGURIDAD <---
//           // Evita que las páginas secundarias oculten el navbar al entrar con scroll previo
//           const navElement = navbarContainer.querySelector("nav");
//           if (navElement) {
//             navElement.classList.remove("scroll-down");
//             if (window.scrollY <= 80) {
//               navElement.classList.remove("scrolled");
//             }
//           }

//           activarLogicaNavbar(); 
//         })
//         .catch(err => console.error("Error en Navbar:", err));
//       promesas.push(pNavbar);
//     }

//     if (footerContainer) {
//       const pFooter = fetch(`${basePath}components/footer.html`)
//         .then(res => res.text())
//         .then(html => {
//           footerContainer.innerHTML = html;
//         })
//         .catch(err => console.error("Error en Footer:", err));
//       promesas.push(pFooter);
//     }

//     Promise.all(promesas).then(() => resolve());
//   });
// }
// // ==========================================================================
// // 2. ORQUESTADOR GLOBAL (Maneja el tiempo real del Home y la inyección pasiva)
// // ==========================================================================
// (async function orquestadorGlobal() {
//   const preloader = document.getElementById("preloader");

//   // CASO A: Páginas secundarias (No tienen preloader en su HTML) ó F5/Navegación interna en Home
//   if (!preloader || sessionStorage.getItem("preloaderShown")) {
//     // Liberamos el body de inmediato por si acaso
//     document.body.classList.remove("preload-hidden");
//     // Inyectamos Navbar y Footer de forma pasiva en segundo plano
//     cargarComponentesModulares();
//     return;
//   }

//   // CASO B: Primera carga real en el Home (Existe preloader y no se ha mostrado en la sesión)
//   // 1. Esperamos obligatoriamente a que termine de inyectarse la Navbar y el Footer
//   await cargarComponentesModulares();

//   // 2. Función limpia para apagar el preloader con su animación CSS
//   const apagarPreloader = () => {
//     setTimeout(() => {
//       preloader.classList.add("loaded"); // Transición CSS de opacidad
//       setTimeout(() => {
//         preloader.style.display = "none";
//         document.body.classList.remove("preload-hidden"); // Habilita scrollbar
//         sessionStorage.setItem("preloaderShown", "true");
//       }, 500); // Espera que termine de desvanecerse el CSS
//     }, 600); // Tiempo de cortesía para ver tu video/GIF estructurado
//   };

//   // 3. Esperamos el recurso pesado nativo (video/imágenes) cuidando conexiones ultra rápidas
//   if (document.readyState === "complete") {
//     apagarPreloader();
//   } else {
//     window.addEventListener("load", apagarPreloader);
//   }
// })();

// // ==========================================================================
// // 3. LOGICA NAVBAR DIFERENCIADA (Versión Calibrada para Sticky)
// // ==========================================================================
// function activarLogicaNavbar() {
//   const navbarColl = document.getElementsByTagName('nav');
//   const navbar = navbarColl[0];
//   if (!navbar) return;

// const esIndex = window.location.pathname.endsWith("index.html") || 
//                 window.location.pathname.endsWith("/static-portfolio/") || 
//                 window.location.pathname === "/" || 
//                 window.location.pathname === "";

//   let ultimoScroll = 0;
//   const tolerancia = 5; // Píxeles mínimos de movimiento para evitar falsos positivos

//   window.addEventListener('scroll', function () {
//     const scrollActual = window.scrollY;

//     // A. CONTROL ESTÉTICO: Fondo y blur pasados los 80px (Igual que antes)
//     if (scrollActual > 80) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }

//     // B. CONTROL DE MOVIMIENTO
//     if (esIndex) {
//       // En el Home se queda fija siempre
//       navbar.classList.remove('scroll-down');
//       navbar.classList.remove('scroll-up');
//     } else {
//       // PÁGINAS INTERNAS (Solución al bucle de clases)
      
//       // Si estamos arriba de todo, limpiamos los estados de movimiento
//       if (scrollActual <= 80) {
//         navbar.classList.remove('scroll-down');
//         navbar.classList.remove('scroll-up');
//         return;
//       }

//       // Calculamos la diferencia de scroll con la vuelta anterior
//       const diferencia = Math.abs(scrollActual - ultimoScroll);

//       // Solo evaluamos la dirección si el movimiento superó la tolerancia
//       if (diferencia > tolerancia) {
//         if (scrollActual > ultimoScroll && !navbar.classList.contains('scroll-down')) {
//           // El usuario BAJA con claridad -> Ocultamos la navbar
//           navbar.classList.remove('scroll-up');
//           navbar.classList.add('scroll-down');
//         } else if (scrollActual < ultimoScroll && navbar.classList.contains('scroll-down')) {
//           // El usuario SUBA con claridad -> Mostramos de rescate
//           navbar.classList.remove('scroll-down');
//           navbar.classList.add('scroll-up');
//         }
//       }
//     }

//     // Actualizamos el marcador para la siguiente evaluación
//     ultimoScroll = scrollActual;
//   });

//   // Lógica del botón hamburguesa responsive
//   const menuToggle = document.getElementById('menu-toggle') || document.querySelector('.menu-toggle');
//   const navLinks = document.getElementById('nav-links');
  
//   if (menuToggle && navLinks) {
//     menuToggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });
//   }
// }


// // ==========================================================================
// // 4. ANIMACIONES DE TARJETAS (Intersection Observer)
// // ==========================================================================
// function activarAnimacionesPreview() {
//   const cards = document.querySelectorAll('.preview-card');
//   if (cards.length === 0) return;

//   const observerOptions = { threshold: 0.1 };
//   const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('reveal-visible');
//         obs.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);
  
//   cards.forEach(card => {
//     card.classList.add('reveal');
//     observer.observe(card);
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   activarAnimacionesPreview();
// });



// ==========================================================================
// 1. INYECTOR MODULAR ASÍNCRONO
// ==========================================================================
function cargarComponentesModulares() {
  return new Promise((resolve) => {
    const navbarContainer = document.getElementById("navbar-container");
    const footerContainer = document.getElementById("footer-container");
    const promesas = [];

    const basePath = window.location.pathname.includes('/static-portfolio/') ? '/static-portfolio/' : '/';

    if (navbarContainer) {
      const pNavbar = fetch(`${basePath}components/navbar.html`)
        .then(res => res.text())
        .then(html => {
          navbarContainer.innerHTML = html;
          
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

          // Reseteo de seguridad seguro
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
        .then(res => res.text())
        .then(html => {
          footerContainer.innerHTML = html;
        })
        .catch(err => console.error("Error en Footer:", err));
      promesas.push(pFooter);
    }

    Promise.all(promesas).then(() => resolve());
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