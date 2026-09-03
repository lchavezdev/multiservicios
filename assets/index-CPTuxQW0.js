(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,titulo:`Soldadura Industrial`,categoria:`Mantenimiento`,descripcion:`Trabajo de soldadura estructural y mantenimiento industrial con alta precisión.`,imagen:`src/assets/s1.PNG`},{id:2,titulo:`Limpieza Industrial`,categoria:`Limpieza`,descripcion:`Limpieza especializada en hilos, bodegas, equipo industrial y áreas de producción.`,imagen:`src/assets/s2.jpeg`},{id:3,titulo:`Jardinería y Áreas Verdes`,categoria:`Mantenimiento`,descripcion:`Mantenimiento de jardines, poda, siembra y diseño personalizado de áreas verdes.`,imagen:`src/assets/s3.jpeg`},{id:4,titulo:`Fontanería`,categoria:`Mantenimiento`,descripcion:`Instalación y mantenimiento experto de sistemas hidráulicos y sanitarios industriales.`,imagen:`src/assets/s4.jpeg`},{id:5,titulo:`Servicio de Fletes`,categoria:`Logística`,descripcion:`Transporte seguro, confiable y puntual de mercancías, materiales y equipos.`,imagen:`src/assets/s5.jpeg`},{id:6,titulo:`Pintura`,categoria:`Construcción`,descripcion:`Aplicación de pintura interior y exterior con acabados profesionales de alta calidad.`,imagen:`src/assets/s6.jpeg`},{id:7,titulo:`Tabla Yeso y Cielo PVC`,categoria:`Construcción`,descripcion:`Instalación profesional de tabla yeso y cielos falsos en PVC para todo tipo de espacios.`,imagen:`src/assets/s7.jpeg`},{id:8,titulo:`Construcción`,categoria:`Construcción`,descripcion:`Servicios de construcción, remodelación completa y obras civiles en general.`,imagen:`src/assets/s8.jpeg`},{id:9,titulo:`Desechos Sólidos`,categoria:`Logística`,descripcion:`Recolección, manejo y disposición final de desechos de forma ecológica y responsable.`,imagen:`src/assets/s9.jpeg`},{id:10,titulo:`Carga y Descarga`,categoria:`Logística`,descripcion:`Personal capacitado para el apoyo en la carga y descarga ágil de materiales y mercancías.`,imagen:`src/assets/s10.jpeg`}];function t(e){let t=document.getElementById(`servicios`);if(t){if(e.length===0){t.innerHTML=`<p class="text-gris col-span-full py-8 text-center font-medium">No se encontraron servicios.</p>`;return}t.innerHTML=e.map(e=>`
    <div class="max-w-sm w-full bg-white/85 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <!-- Imagen y Categoría -->
        <div class="relative overflow-hidden h-52">
          <img class="w-full h-full object-cover hover:scale-110 transition duration-500" src="${e.imagen}" alt="${e.titulo}">
          <span class="absolute top-3 left-3 bg-naranja text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            ${e.categoria}
          </span>
        </div>

        <!-- Contenido de la Tarjeta -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-negro mb-2">
            ${e.titulo}
          </h3>
          <p class="text-gris text-sm leading-relaxed">
            ${e.descripcion}
          </p>
        </div>
      </div>

      <!-- Botón de conversión configurado en Verde Corporativo -->
      <div class="p-6 pt-0">
        <button onclick="enviarCotizacion('${e.titulo}')" class="w-full bg-verde text-white font-semibold text-sm py-2.5 px-4 rounded-lg hover:bg-negro transition duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md">
          Cotizar servicio
          <svg xmlns="http://w3.org" class="h-4 w-4 transform group-hover:translate-x-1 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  `).join(``)}}function n(){let n=document.querySelectorAll(`.filter-btn`);n.forEach(r=>{r.addEventListener(`click`,r=>{let i=r.target.getAttribute(`data-filter`);n.forEach(e=>{e.classList.remove(`bg-naranja`,`text-white`,`shadow-md`),e.classList.add(`bg-white`,`border`,`border-gray-200`,`text-gris`,`hover:bg-naranja`,`hover:text-white`)}),r.target.classList.remove(`bg-white`,`border`,`border-gray-200`,`text-gris`,`hover:bg-naranja`,`hover:text-white`),r.target.classList.add(`bg-naranja`,`text-white`,`shadow-md`),t(i===`Todos`?e:e.filter(e=>e.categoria===i))})})}window.enviarCotizacion=function(e){let t=`Hola, me interesa solicitar una cotización para el servicio de: *${e}* en Multiservicios Eithan.`,n=encodeURIComponent(t);window.open(`https://wa.me{numeroTelefono}?text=${n}`,`_blank`)},document.addEventListener(`DOMContentLoaded`,()=>{t(e),n()});var r=[{nombre:`Marca 1`,logo:`src/assets/m1.png`},{nombre:`Marca 2`,logo:`src/assets/m2.png`},{nombre:`Marca 3`,logo:`src/assets/m3.png`},{nombre:`Marca 4`,logo:`src/assets/m4.png`},{nombre:`Marca 5`,logo:`src/assets/m5.png`},{nombre:`Marca 6`,logo:`src/assets/m6.png`}];function i(){let e=document.getElementById(`carrusel-marcas`);if(!e)return;let t=r.map(e=>`
    <div class="inline-block w-50 h-40 shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300">
      <img src="${e.logo}" alt="${e.nombre}" class="w-full h-full object-contain">
    </div>
  `).join(``);e.innerHTML=t+t}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,i):i();function a(){let e=document.getElementById(`hamburger-btn`),t=document.getElementById(`mobile-menu`),n=document.getElementById(`hamburger-icon`),r=document.querySelectorAll(`.mobile-link`),i=document.getElementById(`nav-logo`),a=document.getElementById(`bloque1`);e&&t&&(e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`),t.classList.contains(`hidden`)?n.innerHTML=`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`:n.innerHTML=`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`}),r.forEach(e=>{e.addEventListener(`click`,()=>{t.classList.add(`hidden`),n.innerHTML=`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`})}),i&&a&&new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(i.classList.add(`opacity-0`,`pointer-events-none`),i.classList.remove(`opacity-100`)):(i.classList.remove(`opacity-0`,`pointer-events-none`),i.classList.add(`opacity-100`))})},{threshold:.15}).observe(a))}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,a):a();