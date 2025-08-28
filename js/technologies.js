// const categorySelect = document.getElementById("categorySelect");
// const displayTypeSelect = document.getElementById("displayTypeSelect");
// const subCategorySelect = document.getElementById("subCategorySelect");
// const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
// const allTech = document.getElementById("all-tech");
// const categoryContainer = document.getElementById("category-container");
// const techCards = document.querySelectorAll(".tech-card");

// // Definir subcategorías por categoría principal
// const SUBCATS = {
//   proyectos: ["flights", "portfolio", "structures"],
//   categoria1: ["front-end", "back-end", "data-base"],
//   categoria2: ["prog-lang", "framework", "tool"]
// };

// function labelize(slug) { return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// // Actualiza subCategorySelect y checkboxes según categoría y display type
// function updateSubCategoryUI() {
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;

//   const subcats = SUBCATS[cat] || [];

//   // Limpiar ambos
//   subCategorySelect.innerHTML = "";
//   subCategoryCheckboxes.innerHTML = "";

//   if(type === "select"){
//     subCategorySelect.style.display = "inline-block";
//     subCategoryCheckboxes.style.display = "none";

//     const allOpt = document.createElement("option");
//     allOpt.value = "all";
//     allOpt.textContent = "Todas";
//     subCategorySelect.appendChild(allOpt);

//     subcats.forEach(sc => {
//       const opt = document.createElement("option");
//       opt.value = sc;
//       opt.textContent = labelize(sc);
//       subCategorySelect.appendChild(opt);
//     });
//   } else { // checkbox
//     subCategorySelect.style.display = "none";
//     subCategoryCheckboxes.style.display = "block";

//     subcats.forEach(sc => {
//       const lbl = document.createElement("label");
//       const cb = document.createElement("input");
//       cb.type = "checkbox";
//       cb.value = sc;
//       cb.checked = true;
//       lbl.appendChild(cb);
//       lbl.appendChild(document.createTextNode(" "+labelize(sc)));
//       subCategoryCheckboxes.appendChild(lbl);
//     });
//   }
// }

// // Función de filtrado con fade + reacomodo
// function filterCards() {
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;

//   // Determinar qué subcategorías mostrar
//   let selectedSubcats = [];
//   if(type==="select"){
//     const val = subCategorySelect.value;
//     selectedSubcats = val==="all"? (SUBCATS[cat]||[]) : [val];
//   } else {
//     const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
//     selectedSubcats = Array.from(checkedBoxes).map(cb=>cb.value);
//   }

//   categoryContainer.innerHTML = "";

//   if(cat==="all" || !SUBCATS[cat]){
//     allTech.style.display = "grid";

//     // Animación fade-in escalonada para todas las tech-cards
//     const allCards = allTech.querySelectorAll(".tech-card");
//     allCards.forEach((c, i) => {
//       c.classList.add("hidden");
//       setTimeout(() => {
//         c.classList.add("show");
//         c.classList.remove("hidden");
//       }, i * 120); // 120ms entre cada tarjeta
//     });

//     return;
//   } else {
//     allTech.style.display = "none";
//   }

//   // Agrupar tech-cards por subcategoría
//   const grouped = {};
//   techCards.forEach(card=>{
//     selectedSubcats.forEach(sc=>{
//       if(card.classList.contains(sc)){
//         if(!grouped[sc]) grouped[sc] = [];
//         grouped[sc].push(card.cloneNode(true));
//       }
//     });
//   });

//   // Renderizar cada subcategoría con animación escalonada
//   selectedSubcats.forEach(sc=>{
//     const cards = grouped[sc];
//     if(!cards || cards.length===0) return;

//     const section = document.createElement("div");
//     section.className = "mb-10";

//     const title = document.createElement("h3");
//     title.textContent = labelize(sc);

//     const grid = document.createElement("div");
//     grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//     cards.forEach((c, i) => {
//       c.classList.add("hidden");
//       grid.appendChild(c);

//       // animación escalonada con delay
//       setTimeout(() => {
//         c.classList.add("show");
//         c.classList.remove("hidden");
//       }, i * 120); // 120ms entre cada tarjeta
//     });

//     section.appendChild(title);
//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//   });
// }

// // Listeners
// categorySelect.addEventListener("change",()=>{
//   updateSubCategoryUI();
//   filterCards();
// });
// displayTypeSelect.addEventListener("change",()=>{
//   updateSubCategoryUI();
//   filterCards();
// });
// subCategorySelect.addEventListener("change",filterCards);
// subCategoryCheckboxes.addEventListener("change",filterCards);





// // Inicializar
// updateSubCategoryUI();
// filterCards();

// const categorySelect = document.getElementById("categorySelect");
// const displayTypeSelect = document.getElementById("displayTypeSelect");
// const subCategorySelect = document.getElementById("subCategorySelect");
// const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
// const categoryContainer = document.getElementById("category-container");

// let TECHS = [];
// const SUBCATS = {
//   proyectos: ["flights","portfolio","structures"],
//   categoria1: ["front-end","back-end","data-base"],
//   categoria2: ["prog-lang","framework","tool"]
// };

// function labelize(slug){ return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// // ---- Cargar JSON ----
// fetch('assets/data/techs.json')
//   .then(res => res.json())
//   .then(data => {
//     TECHS = data;
//     updateSubCategoryUI();
//     renderCards();
//   });

// // ---- Observer para lazy fade-in ----
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target);
//     }
//   });
// },{ threshold: 0.1 });

// // ---- Actualizar UI subcategorías ----
// function updateSubCategoryUI(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   const subcats = SUBCATS[cat] || [];

//   subCategorySelect.innerHTML = "";
//   subCategoryCheckboxes.innerHTML = "";

//   if(type === "select"){
//     subCategorySelect.style.display = "inline-block";
//     subCategoryCheckboxes.style.display = "none";

//     const allOpt = document.createElement("option");
//     allOpt.value = "all";
//     allOpt.textContent = "Todas";
//     subCategorySelect.appendChild(allOpt);

//     subcats.forEach(sc=>{
//       const opt = document.createElement("option");
//       opt.value = sc;
//       opt.textContent = labelize(sc);
//       subCategorySelect.appendChild(opt);
//     });
//   } else {
//     subCategorySelect.style.display = "none";
//     subCategoryCheckboxes.style.display = "block";

//     subcats.forEach(sc=>{
//       const lbl = document.createElement("label");
//       const cb = document.createElement("input");
//       cb.type = "checkbox";
//       cb.value = sc;
//       cb.checked = true;
//       lbl.appendChild(cb);
//       lbl.appendChild(document.createTextNode(" "+labelize(sc)));
//       subCategoryCheckboxes.appendChild(lbl);
//     });
//   }
// }

// // ---- Renderizado y animación ----
// function renderCards(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   let selectedSubcats = [];

//   if(type==="select"){
//     const val = subCategorySelect.value;
//     selectedSubcats = val==="all"? (SUBCATS[cat]||[]) : [val];
//   } else {
//     const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
//     selectedSubcats = Array.from(checkedBoxes).map(cb=>cb.value);
//   }

//   categoryContainer.innerHTML = "";

//   if(cat==="all" || !SUBCATS[cat]){
//     const section = document.createElement("div");
//     section.className = "category-section";

//     const title = document.createElement("h3");
//     title.textContent = "Full-stack (Todas las tecnologías)";
//     section.appendChild(title);

//     const grid = document.createElement("div");
//     grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//     TECHS.forEach((tech, i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}">`;
//       grid.appendChild(card);

//       setTimeout(()=> observer.observe(card), i*100);
//     });

//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//     return;
//   }

//   // --- Mostrar por subcategoría ---
//   const grouped = {};
//   TECHS.forEach(tech=>{
//     selectedSubcats.forEach(sc=>{
//       if(tech.classes.includes(sc)){
//         if(!grouped[sc]) grouped[sc] = [];
//         grouped[sc].push(tech);
//       }
//     });
//   });

//   selectedSubcats.forEach(sc=>{
//     const cards = grouped[sc];
//     if(!cards || cards.length===0) return;

//     const section = document.createElement("div");
//     section.className = "mb-10";

//     const title = document.createElement("h3");
//     title.textContent = labelize(sc);

//     const grid = document.createElement("div");
//     grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//     cards.forEach((tech,i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}">`;
//       grid.appendChild(card);
//       setTimeout(()=>observer.observe(card), i*100);
//     });

//     section.appendChild(title);
//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//   });
// }

// // ---- Listeners ----
// categorySelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// displayTypeSelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// subCategorySelect.addEventListener("change", renderCards);
// subCategoryCheckboxes.addEventListener("change", renderCards);

// const categorySelect = document.getElementById("categorySelect");
// const displayTypeSelect = document.getElementById("displayTypeSelect");
// const subCategorySelect = document.getElementById("subCategorySelect");
// const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
// const categoryContainer = document.getElementById("category-container");

// let TECHS = [];
// const SUBCATS = {
//   proyectos: ["flights","portfolio","structures"],
//   categoria1: ["front-end","back-end","data-base"],
//   categoria2: ["prog-lang","framework","tool"]
// };

// function labelize(slug){ return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// // ---- Cargar JSON ----
// fetch('assets/data/techs.json')
//   .then(res => res.json())
//   .then(data => {
//     TECHS = data;
//     updateSubCategoryUI();
//     renderCards();
//   });

// // ---- Observer para lazy fade-in ----
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target);
//     }
//   });
// },{ threshold: 0.1 });

// // ---- Actualizar UI subcategorías ----
// function updateSubCategoryUI(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   const subcats = SUBCATS[cat] || [];

//   subCategorySelect.innerHTML = "";
//   subCategoryCheckboxes.innerHTML = "";

//   if(type === "select"){
//     subCategorySelect.style.display = "inline-block";
//     subCategoryCheckboxes.style.display = "none";

//     const allOpt = document.createElement("option");
//     allOpt.value = "all";
//     allOpt.textContent = "Todas";
//     subCategorySelect.appendChild(allOpt);

//     subcats.forEach(sc=>{
//       const opt = document.createElement("option");
//       opt.value = sc;
//       opt.textContent = labelize(sc);
//       subCategorySelect.appendChild(opt);
//     });
//   } else {
//     subCategorySelect.style.display = "none";
//     subCategoryCheckboxes.style.display = "block";

//     subcats.forEach(sc=>{
//       const lbl = document.createElement("label");
//       const cb = document.createElement("input");
//       cb.type = "checkbox";
//       cb.value = sc;
//       cb.checked = true;
//       lbl.appendChild(cb);
//       lbl.appendChild(document.createTextNode(" "+labelize(sc)));
//       subCategoryCheckboxes.appendChild(lbl);
//     });
//   }
// }

// // ---- Renderizado y animación ----
// function renderCards(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   let selectedSubcats = [];

//   if(type==="select"){
//     const val = subCategorySelect.value;
//     selectedSubcats = val==="all"? (SUBCATS[cat]||[]) : [val];
//   } else {
//     const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
//     selectedSubcats = Array.from(checkedBoxes).map(cb=>cb.value);
//   }

//   categoryContainer.innerHTML = "";

//   if(cat==="all" || !SUBCATS[cat]){
//     const section = document.createElement("div");
//     section.className = "category-section mb-10";

//     const title = document.createElement("h3");
//     title.className = "text-2xl font-semibold mb-4 text-blue-700";
//     title.textContent = "Full-stack (Todas las tecnologías)";
//     section.appendChild(title);

//     const grid = document.createElement("div");
//     grid.className = "grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5";

//     TECHS.forEach((tech, i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden flex items-center justify-center bg-white p-4 rounded-lg text-center font-semibold shadow-md aspect-square";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="max-w-full max-h-full">`;
//       grid.appendChild(card);

//       setTimeout(()=> observer.observe(card), i*100);
//     });

//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//     return;
//   }

//   // --- Mostrar por subcategoría ---
//   const grouped = {};
//   TECHS.forEach(tech=>{
//     selectedSubcats.forEach(sc=>{
//       if(tech.classes.includes(sc)){
//         if(!grouped[sc]) grouped[sc] = [];
//         grouped[sc].push(tech);
//       }
//     });
//   });

//   selectedSubcats.forEach(sc=>{
//     const cards = grouped[sc];
//     if(!cards || cards.length===0) return;

//     const section = document.createElement("div");
//     section.className = "mb-10";

//     const title = document.createElement("h3");
//     title.className = "text-2xl font-semibold mb-4 text-blue-700";
//     title.textContent = labelize(sc);

//     const grid = document.createElement("div");
//     grid.className = "grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5";

//     cards.forEach((tech,i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden flex items-center justify-center bg-white p-4 rounded-lg text-center font-semibold shadow-md aspect-square";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="max-w-full max-h-full">`;
//       grid.appendChild(card);
//       setTimeout(()=> observer.observe(card), i*100);
//     });

//     section.appendChild(title);
//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//   });
// }

// // ---- Listeners ----
// categorySelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// displayTypeSelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// subCategorySelect.addEventListener("change", renderCards);
// subCategoryCheckboxes.addEventListener("change", renderCards);


// const categorySelect = document.getElementById("categorySelect");
// const displayTypeSelect = document.getElementById("displayTypeSelect");
// const subCategorySelect = document.getElementById("subCategorySelect");
// const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
// const categoryContainer = document.getElementById("category-container");

// let TECHS = [];
// const SUBCATS = {
//   proyectos: ["flights","portfolio","structures"],
//   categoria1: ["front-end","back-end","data-base"],
//   categoria2: ["prog-lang","framework","tool"]
// };

// function labelize(slug){ return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// // ---- Cargar JSON ----
// fetch('assets/data/techs.json')
//   .then(res => res.json())
//   .then(data => {
//     TECHS = data;
//     console.log(TECHS);
//     updateSubCategoryUI();
//     renderCards();
//   });

// // ---- Observer lazy fade-in ----
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target);
//     }
//   });
// },{ threshold: 0.1 });

// // ---- Actualizar UI subcategorías ----
// function updateSubCategoryUI(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   const subcats = SUBCATS[cat] || [];

//   subCategorySelect.innerHTML = "";
//   subCategoryCheckboxes.innerHTML = "";

//   if(type === "select"){
//     subCategorySelect.style.display = "inline-block";
//     subCategoryCheckboxes.style.display = "none";

//     const allOpt = document.createElement("option");
//     allOpt.value = "all";
//     allOpt.textContent = "Todas";
//     subCategorySelect.appendChild(allOpt);

//     subcats.forEach(sc=>{
//       const opt = document.createElement("option");
//       opt.value = sc;
//       opt.textContent = labelize(sc);
//       subCategorySelect.appendChild(opt);
//     });
//   } else {
//     subCategorySelect.style.display = "none";
//     subCategoryCheckboxes.style.display = "flex";

//     subcats.forEach(sc=>{
//       const lbl = document.createElement("label");
//       const cb = document.createElement("input");
//       cb.type = "checkbox";
//       cb.value = sc;
//       cb.checked = true;
//       lbl.appendChild(cb);
//       lbl.appendChild(document.createTextNode(" "+labelize(sc)));
//       subCategoryCheckboxes.appendChild(lbl);
//     });
//   }
// }

// // ---- Renderizado y animación ----
// function renderCards(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   let selectedSubcats = [];

//   if(type==="select"){
//     const val = subCategorySelect.value;
//     selectedSubcats = val==="all"? (SUBCATS[cat]||[]) : [val];
//   } else {
//     const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
//     selectedSubcats = Array.from(checkedBoxes).map(cb=>cb.value);
//   }

//   categoryContainer.innerHTML = "";

//   if(cat==="all" || !SUBCATS[cat]){
//     const section = document.createElement("div");
//     section.className = "category-section mb-10";

//     const title = document.createElement("h3");
//     title.textContent = "Full-stack (Todas las tecnologías)";
//     title.className = "text-2xl font-semibold mb-4 text-blue-700";
//     section.appendChild(title);

//     const grid = document.createElement("div");
//     grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//     TECHS.forEach((tech, i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden flex items-center justify-center aspect-square p-4 rounded-lg shadow transition-transform hover:-translate-y-1 hover:shadow-lg";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="object-contain w-full h-full">`;
//       grid.appendChild(card);
//       setTimeout(()=> observer.observe(card), i*100);
//     });

//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//     return;
//   }

//   // --- Mostrar por subcategoría ---
//   const grouped = {};
//   TECHS.forEach(tech=>{
//     selectedSubcats.forEach(sc=>{
//       if(tech.classes.includes(sc)){
//         if(!grouped[sc]) grouped[sc] = [];
//         grouped[sc].push(tech);
//       }
//     });
//   });

//   selectedSubcats.forEach(sc=>{
//     const cards = grouped[sc];
//     if(!cards || cards.length===0) return;

//     const section = document.createElement("div");
//     section.className = "mb-10";

//     const title = document.createElement("h3");
//     title.textContent = labelize(sc);
//     title.className = "text-2xl font-semibold mb-4 text-blue-700";

//     const grid = document.createElement("div");
//     grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//     cards.forEach((tech,i)=>{
//       const card = document.createElement("a");
//       card.href = tech.link;
//       card.target = "_blank";
//       card.className = "tech-card hidden flex items-center justify-center aspect-square p-4 rounded-lg shadow transition-transform hover:-translate-y-1 hover:shadow-lg";
//       card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="object-contain w-full h-full">`;
//       grid.appendChild(card);
//       setTimeout(()=> observer.observe(card), i*100);
//     });

//     section.appendChild(title);
//     section.appendChild(grid);
//     categoryContainer.appendChild(section);
//   });
// }

// // ---- Listeners ----
// categorySelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// displayTypeSelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// subCategorySelect.addEventListener("change", renderCards);
// subCategoryCheckboxes.addEventListener("change", renderCards);


// const categorySelect = document.getElementById("categorySelect");
// const displayTypeSelect = document.getElementById("displayTypeSelect");
// const subCategorySelect = document.getElementById("subCategorySelect");
// const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
// const categoryContainer = document.getElementById("category-container");

// let TECHS = [];
// const SUBCATS = {
//   proyectos: ["flights","portfolio","structures"],
//   categoria1: ["front-end","back-end","data-base"],
//   categoria2: ["prog-lang","framework","tool"]
// };

// function labelize(slug){ return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// // ---- Cargar JSON ----
// fetch('assets/data/techs.json')
//   .then(res => res.json())
//   .then(data => {
//     TECHS = data;
//     updateSubCategoryUI();
//     renderCards();
//   });

// // ---- Observer lazy fade-in ----
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target);
//     }
//   });
// },{ threshold: 0.1 });

// // ---- Subcategorías ----
// function updateSubCategoryUI(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   const subcats = SUBCATS[cat] || [];

//   subCategorySelect.innerHTML = "";
//   subCategoryCheckboxes.innerHTML = "";

//   if(type === "select"){
//     subCategorySelect.classList.remove("hidden");
//     subCategoryCheckboxes.classList.add("hidden");

//     const allOpt = document.createElement("option");
//     allOpt.value = "all";
//     allOpt.textContent = "Todas";
//     subCategorySelect.appendChild(allOpt);

//     subcats.forEach(sc=>{
//       const opt = document.createElement("option");
//       opt.value = sc;
//       opt.textContent = labelize(sc);
//       subCategorySelect.appendChild(opt);
//     });
//   } else {
//     subCategorySelect.classList.add("hidden");
//     subCategoryCheckboxes.classList.remove("hidden");

//     subcats.forEach(sc=>{
//       const lbl = document.createElement("label");
//       const cb = document.createElement("input");
//       cb.type = "checkbox";
//       cb.value = sc;
//       cb.checked = true;
//       lbl.appendChild(cb);
//       lbl.appendChild(document.createTextNode(" "+labelize(sc)));
//       subCategoryCheckboxes.appendChild(lbl);
//     });
//   }
// }

// // ---- Renderizado dinámico ----
// function renderCards(){
//   const cat = categorySelect.value;
//   const type = displayTypeSelect.value;
//   let selectedSubcats = [];

//   if(type==="select"){
//     const val = subCategorySelect.value;
//     selectedSubcats = val==="all"? (SUBCATS[cat]||[]) : [val];
//   } else {
//     const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
//     selectedSubcats = Array.from(checkedBoxes).map(cb=>cb.value);
//   }

//   categoryContainer.innerHTML = "";

//   const toShow = cat==="all" ? TECHS : TECHS.filter(t=>t.classes.some(c=>selectedSubcats.includes(c)));

//   if(toShow.length === 0) return;

//   const section = document.createElement("div");
//   section.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

//   toShow.forEach((tech,i)=>{
//     const card = document.createElement("a");
//     card.href = tech.link;
//     card.target = "_blank";
//     card.className = "tech-card flex items-center justify-center aspect-square bg-white p-4 rounded shadow";
//     card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="object-contain max-h-full">`;
//     section.appendChild(card);
//     setTimeout(()=> observer.observe(card), i*100);
//   });

//   categoryContainer.appendChild(section);
// }

// // ---- Listeners ----
// categorySelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// displayTypeSelect.addEventListener("change", ()=>{
//   updateSubCategoryUI();
//   renderCards();
// });
// subCategorySelect.addEventListener("change", renderCards);
// subCategoryCheckboxes.addEventListener("change", renderCards);

const categorySelect = document.getElementById("categorySelect");
const displayTypeSelect = document.getElementById("displayTypeSelect");
const subCategorySelect = document.getElementById("subCategorySelect");
const subCategoryCheckboxes = document.getElementById("subCategoryCheckboxes");
const categoryContainer = document.getElementById("category-container");

let TECHS = [];
const SUBCATS = {
  proyectos: ["flights","portfolio","structures"],
  categoria1: ["front-end","back-end","data-base"],
  categoria2: ["prog-lang","framework","tool"]
};

function labelize(slug){ return slug.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase()); }

// ---- Cargar JSON ----
fetch('assets/data/techs.json')
  .then(res => res.json())
  .then(data => {
    TECHS = data;
    updateSubCategoryUI();
    renderCards();
  });

// ---- Observer para lazy fade-in ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.1 });

// ---- Actualizar UI subcategorías ----
function updateSubCategoryUI(){
  const cat = categorySelect.value;
  const type = displayTypeSelect.value;
  const subcats = SUBCATS[cat] || [];

  subCategorySelect.innerHTML = "";
  subCategoryCheckboxes.innerHTML = "";

  if(type === "select"){
    subCategorySelect.style.display = "inline-block";
    subCategoryCheckboxes.style.display = "none";

    const allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "Todas";
    subCategorySelect.appendChild(allOpt);

    subcats.forEach(sc=>{
      const opt = document.createElement("option");
      opt.value = sc;
      opt.textContent = labelize(sc);
      subCategorySelect.appendChild(opt);
    });
  } else {
    subCategorySelect.style.display = "none";
    subCategoryCheckboxes.style.display = "block";

    subcats.forEach(sc=>{
      const lbl = document.createElement("label");
      lbl.className = "mr-3"; // spacing
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = sc;
      cb.checked = true;
      lbl.appendChild(cb);
      lbl.appendChild(document.createTextNode(" "+labelize(sc)));
      subCategoryCheckboxes.appendChild(lbl);
    });
  }
}

// ---- Renderizado y animación ----
function renderCards(){
  const cat = categorySelect.value;
  const type = displayTypeSelect.value;
  let selectedSubcats = [];

  if(type === "select"){
    const val = subCategorySelect.value;
    selectedSubcats = val === "all" ? (SUBCATS[cat] || []) : [val];
  } else {
    const checkedBoxes = subCategoryCheckboxes.querySelectorAll("input[type=checkbox]:checked");
    selectedSubcats = Array.from(checkedBoxes).map(cb => cb.value);
  }

  categoryContainer.innerHTML = "";

  // --- Mostrar todas las tecnologías ---
  if(cat === "all" || !SUBCATS[cat]){
    const section = document.createElement("div");
    section.className = "category-section mb-10";

    const title = document.createElement("h3");
    title.textContent = "Full-stack (Todas las tecnologías)";
    title.className = "text-2xl font-semibold mb-4 text-blue-700";
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

    TECHS.forEach(tech => {
      const card = document.createElement("a");
      card.href = tech.link;
      card.target = "_blank";
        card.className =
    "tech-card bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition transform duration-1500 " +
    "hover:-translate-y-1 hover:shadow-lg hover:text-blue-600";
      card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="object-contain w-full h-48 md:h-64 lg:h-72">`;
      grid.appendChild(card);
      observer.observe(card);

    });

    section.appendChild(grid);
    categoryContainer.appendChild(section);
    return;
  }

  // --- Mostrar por subcategoría ---
  const grouped = {};
  TECHS.forEach(tech => {
    selectedSubcats.forEach(sc => {
      if(tech.classes.includes(sc)){
        if(!grouped[sc]) grouped[sc] = [];
        grouped[sc].push(tech);
      }
    });
  });

  selectedSubcats.forEach(sc => {
    const cards = grouped[sc];
    if(!cards || cards.length === 0) return;

    const section = document.createElement("div");
    section.className = "category-section mb-10";

    const title = document.createElement("h3");
    title.textContent = labelize(sc);
    title.className = "text-2xl font-semibold mb-4 text-blue-700";
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid md:grid-cols-4 sm:grid-cols-2 gap-6";

    cards.forEach((tech,index) => {
      const card = document.createElement("a");
      card.href = tech.link;
      card.target = "_blank";
      card.className = `
    tech-card p-6 bg-white rounded-2xl shadow-md 
    transform transition duration-500 ease-out opacity-0 translate-y-4
    hover:-translate-y-3 hover:shadow-2xl hover:text-blue-700
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]
  `;
      card.innerHTML = `<img src="${tech.img}" alt="${tech.name}" class="object-contain w-full h-48 md:h-64 lg:h-72">`;
  //     setTimeout(() => {
  //   card.classList.remove("opacity-0", "translate-y-4");
  //   card.classList.add("opacity-100", "translate-y-0");
  //   console.log(index);
  // }, index * 10000); // 👈 Aumenté a 200ms por tarjeta para que no sea tan rápido
  card.style.transitionDelay = `${index * 200}ms`;
      grid.appendChild(card);
        requestAnimationFrame(() => {
      card.classList.remove("opacity-0", "translate-y-4");
      card.classList.add("opacity-100", "translate-y-0");
     // 200ms de delay entre tarjetas
  });

    observer.observe(card);
    });

    section.appendChild(grid);
    categoryContainer.appendChild(section);
  });
}




// ---- Listeners ----
categorySelect.addEventListener("change", ()=>{
  updateSubCategoryUI();
  renderCards();
});
displayTypeSelect.addEventListener("change", ()=>{
  updateSubCategoryUI();
  renderCards();
});
subCategorySelect.addEventListener("change", renderCards);
subCategoryCheckboxes.addEventListener("change", renderCards);
