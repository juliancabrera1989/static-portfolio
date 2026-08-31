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


(function () {
  const pageTitles = {
    "index.html": { key: "page_title_home", default: "Home – Portfolio – Julián Cabrera" },
    "technologies.html": { key: "page_title_about", default: "Technologies – Portfolio – Julián Cabrera" },
    "about.html": { key: "page_title_about", default: "About Me – Portfolio – Julián Cabrera" },
    "projects.html": { key: "page_title_projects", default: "Projects – Portfolio – Julián Cabrera" },
    "tech-radar.html": { key: "page_title_radar", default: "Tech Radar – Portfolio – Julián Cabrera" },
    "contact.html": { key: "page_title_contact", default: "Contact – Portfolio – Julián Cabrera" }
  };
let path = window.location.pathname.split("/").pop();
  if (!path || path === "" || window.location.pathname.endsWith("/static-portfolio/")) path = "index.html";

  const currentTitle = pageTitles[path] || { key: "page_title_home", default: "Portfolio – Julián Cabrera" };

  // 1. Metadatos básicos y Título
  document.characterSet = "UTF-8";
  
  const metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(metaViewport);

  const titleTag = document.createElement("title");
  titleTag.setAttribute("data-i18n", currentTitle.key);
  titleTag.textContent = currentTitle.default;
  document.head.appendChild(titleTag);

  // 2. Favicons y Manifest
  const icons = [
    { rel: "icon", href: "assets/icons/favicon.ico", sizes: "any" },
    { rel: "icon", type: "image/svg+xml", href: "assets/icons/favicon.svg" },
    { rel: "apple-touch-icon", href: "assets/icons/apple-touch-icon.png" },
    { rel: "manifest", href: "assets/site.webmanifest" }
  ];
  icons.forEach(ico => {
    const link = document.createElement("link");
    Object.keys(ico).forEach(attr => link.setAttribute(attr, ico[attr]));
    document.head.appendChild(link);
  });

  const themeMeta = document.createElement("meta");
  themeMeta.name = "theme-color";
  themeMeta.content = "#ffffff";
  document.head.appendChild(themeMeta);

  // 3. Fuentes y Estilos (Tailwind, FontAwesome, CSS propios)
  const styles = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    "css/styles.css",
    "css/navbar.css"
  ];
  
  // Preconnects para fuentes
  ["https://fonts.googleapis.com", "https://fonts.gstatic.com"].forEach(url => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = url;
    if (url.includes("gstatic")) link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });

  styles.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  const tailwindScript = document.createElement("script");
  tailwindScript.src = "https://cdn.tailwindcss.com";
  document.head.appendChild(tailwindScript);

  // 4. Scripts Globales con defer para asegurar ejecución correcta
  const scripts = ["js/script.js", "js/i18n.js"];
  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  });
})();