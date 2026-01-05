module.exports = function () {
  return {
    name: 'version-navbar-plugin',

    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              console.log("🚀 Version Navbar Plugin Pro8 cargado");

              (function() {
                let linksAdded = false;
                let observer = null;

                function createLink(id, text, url, color, hoverColor) {
                  // Verificar si el link ya existe
                  if (document.getElementById(id)) {
                    console.log("⚠️ Link ya existe:", id);
                    return null;
                  }

                  const link = document.createElement('a');
                  link.id = id;
                  link.className = 'navbar__item navbar__link';
                  link.href = url;
                  link.textContent = text;

                  link.style.cssText = \`
                    display:inline-flex!important;
                    align-items:center;
                    margin:0 8px;
                    padding:6px 16px;
                    border:1px solid var(--color-border,var(--ifm-toc-border-color));
                    border-radius:12px;
                    background-color:\${color};
                    color:white!important;
                    font-size:0.9rem;
                    font-weight:600;
                    transition:all 0.2s ease;
                    text-decoration:none;
                  \`;

                  link.onmouseenter = () => {
                    link.style.backgroundColor = hoverColor;
                    link.style.transform = 'translateY(-2px)';
                    link.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  };
                  
                  link.onmouseleave = () => {
                    link.style.backgroundColor = color;
                    link.style.transform = 'translateY(0)';
                    link.style.boxShadow = 'none';
                  };

                  console.log("✅ Link creado:", id);
                  return link;
                }

                function addLinks() {
                  // Evitar agregar múltiples veces
                  if (linksAdded) {
                    console.log("⚠️ Links ya fueron agregados, saltando...");
                    return;
                  }

                  // Buscar el navbar izquierdo primero
                  const navbar = document.querySelector('.navbar__items.navbar__items--left') 
                    || document.querySelector('.navbar__items') 
                    || document.querySelector('nav.navbar .navbar__inner');

                  if (!navbar) {
                    console.log("⏳ Navbar aún no disponible");
                    return;
                  }

                  console.log("📍 Navbar encontrado:", navbar);

                  const links = [
                    { id:'api-navbar-link',     text:'API',      url:'/devs/api/introduccion',     color:'var(--ifm-color-primary)', hover:'var(--ifm-color-primary-dark)' },
                    { id:'mozo-navbar-link',    text:'Mozo',     url:'/mozo/introduccion',          color:'#28a745', hover:'#218838' },
                    { id:'vendeya-navbar-link', text:'VendeYA',  url:'/vendeya/introduccion',       color:'#6f42c1', hover:'#5a32a3' },
                    { id:'app-navbar-link',     text:'App',      url:'/app-facturacion/intro',      color:'#fd7e14', hover:'#e8650e' },
                  ];

                  let addedCount = 0;
                  links.forEach(cfg => {
                    const link = createLink(cfg.id, cfg.text, cfg.url, cfg.color, cfg.hover);
                    if (link) {
                      navbar.appendChild(link);
                      addedCount++;
                    }
                  });

                  if (addedCount > 0) {
                    linksAdded = true;
                    console.log(\`✔️ \${addedCount} links agregados al navbar\`);
                    
                    // Detener el observer una vez que los links se agregaron
                    if (observer) {
                      observer.disconnect();
                      console.log("🛑 Observer detenido");
                    }
                  }
                }

                // Estrategia 1: Intentos inmediatos con setTimeout
                console.log("🔄 Iniciando intentos con setTimeout...");
                [0, 100, 300, 500, 800, 1200, 2000].forEach(delay => {
                  setTimeout(() => {
                    if (!linksAdded) {
                      console.log(\`⏱️ Intento después de \${delay}ms\`);
                      addLinks();
                    }
                  }, delay);
                });

                // Estrategia 2: MutationObserver para detectar cuando el navbar se carga
                console.log("👀 Configurando MutationObserver...");
                observer = new MutationObserver((mutations) => {
                  if (linksAdded) {
                    observer.disconnect();
                    return;
                  }

                  // Verificar si el navbar está disponible
                  const navbar = document.querySelector('.navbar__items');
                  if (navbar) {
                    console.log("🎯 Navbar detectado por MutationObserver");
                    addLinks();
                  }
                });

                // Observar cambios en el body
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });

                // Estrategia 3: Escuchar eventos de navegación de Docusaurus
                if (window.docusaurus) {
                  console.log("📡 Escuchando eventos de Docusaurus...");
                  window.addEventListener('docusaurus.ready', () => {
                    console.log("🎉 Evento docusaurus.ready disparado");
                    setTimeout(addLinks, 100);
                  });
                }

                // Estrategia 4: DOMContentLoaded y load como fallback
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', () => {
                    console.log("📄 DOMContentLoaded disparado");
                    setTimeout(addLinks, 100);
                  });
                } else {
                  console.log("📄 DOM ya cargado");
                  addLinks();
                }

                window.addEventListener('load', () => {
                  console.log("🌐 Window load disparado");
                  setTimeout(addLinks, 100);
                });

                console.log("✔️ Plugin inicializado con múltiples estrategias");
              })();
            `,
          },
        ],
      };
    },
  };
};

