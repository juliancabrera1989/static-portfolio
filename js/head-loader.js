// JavaScript
// (function () {
//   // 1. Mapeo de títulos según el nombre del archivo HTML
//   const pageTitles = {
//     "index.html": { key: "page_title_home", default: "Home – Portfolio – Julián Cabrera" },
//     "about.html": { key: "page_title_about", default: "About Me – Portfolio – Julián Cabrera" },
//     "projects.html": { key: "page_title_projects", default: "Projects – Portfolio – Julián Cabrera" },
//     "tech-radar.html": { key: "page_title_radar", default: "Tech Radar – Portfolio – Julián Cabrera" },
//     "contact.html": { key: "page_title_contact", default: "Contact – Portfolio – Julián Cabrera" }
//   };

//   // Obtener la página actual desde la URL
//   let path = window.location.pathname.split("/").pop();
//   if (!path || path === "") path = "index.html"; // Fallback para la raíz

//   const currentTitle = pageTitles[path] || { key: "page_title_home", default: "Portfolio – Julián Cabrera" };

//   // 2. Recursos compartidos en el <head>
//   const headHTML = `
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <!-- Título Dinámico -->
//     <title data-i18n="${currentTitle.key}">${currentTitle.default}</title>

//     <!-- Favicon y Web App Manifest -->
//     <link rel="icon" href="assets/icons/favicon.ico" sizes="any">
//     <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
//     <link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
//     <link rel="manifest" href="assets/site.webmanifest">
//     <meta name="theme-color" content="#ffffff">

//     <!-- Google Fonts (Inter) -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

//     <!-- Estilos y CDNs Globale -->
//     <script src="https://cdn.tailwindcss.com"><\/script>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
//     <link rel="stylesheet" href="css/styles.css" />
//     <link rel="stylesheet" href="css/navbar.css" />

//     <!-- Scripts Globale -->
//     <script src="js/script.js" defer><\/script>
//     <script src="js/i18n.js" defer><\/script>
//   `;

//   // Inyectar de inmediato en el <head>
//   document.head.insertAdjacentHTML("afterbegin", headHTML);
// })();





// (function () {
//   // 1. Mapeo de títulos según el nombre del archivo HTML
//   const pageTitles = {
//     "index.html": { key: "page_title_home", default: "Home – Portfolio – Julián Cabrera" },
//     "technologies.html": { key: "page_title_about", default: "Technologies – Portfolio – Julián Cabrera" },
//     "about.html": { key: "page_title_about", default: "About Me – Portfolio – Julián Cabrera" },
//     "projects.html": { key: "page_title_projects", default: "Projects – Portfolio – Julián Cabrera" },
//     "tech-radar.html": { key: "page_title_radar", default: "Tech Radar – Portfolio – Julián Cabrera" },
//     "contact.html": { key: "page_title_contact", default: "Contact – Portfolio – Julián Cabrera" }
//   };

//   // Obtener la página actual desde la URL
//   let path = window.location.pathname.split("/").pop();
//   if (!path || path === "") path = "index.html";

//   const currentTitle = pageTitles[path] || { key: "page_title_home", default: "Portfolio – Julián Cabrera" };

//   // 2. Recursos compartidos con rutas absolutas desde la raíz ('/')
//   const headHTML = `
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <!-- Título Dinámico -->
//     <title data-i18n="${currentTitle.key}">${currentTitle.default}</title>

//     <!-- Favicon y Web App Manifest -->
//     <link rel="icon" href="/assets/icons/favicon.ico" sizes="any">
//     <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
//     <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
//     <link rel="manifest" href="/assets/site.webmanifest">
//     <meta name="theme-color" content="#ffffff">

//     <!-- Google Fonts (Inter) -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    
//     <!-- Estilos y CDNs Globales -->
//     <script src="https://cdn.tailwindcss.com"><\/script>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
//     <link rel="stylesheet" href="/css/styles.css" />
//     <link rel="stylesheet" href="/css/navbar.css" />

//     <!-- Scripts Globales -->
//     <script src="/js/script.js" defer><\/script>
//     <script src="/js/i18n.js" defer><\/script>
//   `;

//   // Inyección SÍNCRONA bloqueante para evitar parpadeos y fallos de CSS
//   document.write(headHTML);
// })();




// (function () {
//   // 1. Mapeo de títulos según el nombre del archivo HTML
//   const pageTitles = {
//     "index.html": { key: "page_title_home", default: "Home – Portfolio – Julián Cabrera" },
//     "technologies.html": { key: "page_title_about", default: "Technologies – Portfolio – Julián Cabrera" },
//     "about.html": { key: "page_title_about", default: "About Me – Portfolio – Julián Cabrera" },
//     "projects.html": { key: "page_title_projects", default: "Projects – Portfolio – Julián Cabrera" },
//     "tech-radar.html": { key: "page_title_radar", default: "Tech Radar – Portfolio – Julián Cabrera" },
//     "contact.html": { key: "page_title_contact", default: "Contact – Portfolio – Julián Cabrera" }
//   };

//   // Obtener la página actual desde la URL
//   let path = window.location.pathname.split("/").pop();
//   if (!path || path === "") path = "index.html";

//   const currentTitle = pageTitles[path] || { key: "page_title_home", default: "Portfolio – Julián Cabrera" };

//   // Variable para guardar el HTML de la navbar, solo si NO es index.html
//   let navbarCSS = "";
//   if (path !== "index.html") {
//     navbarCSS = `<link rel="stylesheet" href="css/navbar.css" />`;
//   }

//   // 2. Recursos compartidos con rutas absolutas desde la raíz ('/')
//   const headHTML = `
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <!-- Título Dinámico -->
//     <title data-i18n="${currentTitle.key}">${currentTitle.default}</title>

//     <!-- Favicon y Web App Manifest -->
//     <link rel="icon" href="assets/icons/favicon.ico" sizes="any">
//     <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
//     <link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
//     <link rel="manifest" href="assets/site.webmanifest">
//     <meta name="theme-color" content="#ffffff">

//     <!-- Google Fonts (Inter) -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    
//     <!-- Estilos y CDNs Globales -->
//     <script src="https://cdn.tailwindcss.com"><\/script>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
//     <link rel="stylesheet" href="css/styles.css" />
//     <!-- Navbar CSS condicional (no se carga en index.html) -->
//     ${navbarCSS}

//     <!-- Scripts Globales -->
//     <script src="js/script.js" defer><\/script>
//     <script src="js/i18n.js" defer><\/script>
//   `;

//   // Inyección SÍNCRONA bloqueante para evitar parpadeos y fallos de CSS
//   document.write(headHTML);
// })();


(function () {
  const pageTitles = {
    "index.html": { key: "page_title_home", default: "Home – Portfolio – Julián Cabrera" },
    "technologies.html": { key: "page_title_about", default: "Technologies – Portfolio – Julián Cabrera" },
    "about.html": { key: "page_title_about", default: "About Me – Portfolio – Julián Cabrera" },
    "projects.html": { key: "page_title_projects", default: "Projects – Portfolio – Julián Cabrera" },
    "tech-radar.html": { key: "page_title_radar", default: "Tech Radar – Portfolio – Julián Cabrera" },
    "contact.html": { key: "page_title_contact", default: "Contact – Portfolio – Julián Cabrera" }
  };

// Obtener la ruta completa y limpiar posibles barras finales
  let path = window.location.pathname.toLowerCase();
  
  // Si estamos en la raíz o en index.html, detectamos que es el Home
  let esIndex = path.endsWith("/") || path.endsWith("index.html") || path === "" || path.endsWith("static-portfolio/");

  let navbarCSS = "";
  if (!esIndex) {
    navbarCSS = `<link rel="stylesheet" href="css/navbar.css" />`;
  }

  const headHTML = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title data-i18n="${currentTitle.key}">${currentTitle.default}</title>

    <link rel="icon" href="assets/icons/favicon.ico" sizes="any">
    <link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
    <link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
    <link rel="manifest" href="assets/site.webmanifest">
    <meta name="theme-color" content="#ffffff">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="stylesheet" href="css/styles.css" />
    ${navbarCSS}

    <script src="js/script.js" defer><\/script>
    <script src="js/i18n.js" defer><\/script>
  `;

  document.write(headHTML);
})();