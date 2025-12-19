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

                function createLink(id, text, url, color, hoverColor) {
                  if (document.getElementById(id)) return;

                  const link = document.createElement('a');
                  link.id = id;
                  link.className = 'navbar__item navbar__link';
                  link.href = url;
                  link.textContent = text;

                  link.style.cssText = \`
                    display:inline-block!important;
                    margin:0 8px;
                    padding:4px 16px;
                    border:1px solid var(--ifm-toc-border-color);
                    border-radius:20px;
                    background-color:\${color};
                    color:white!important;
                    font-size:.9rem;
                    font-weight:500;
                    transition:.2s;
                  \`;

                  link.onmouseenter = () => link.style.backgroundColor = hoverColor;
                  link.onmouseleave = () => link.style.backgroundColor = color;

                  return link;
                }

                function addLinks() {
                  const navbar = document.querySelector('.navbar__items');
                  if (!navbar) return;

                  const links = [
                    { id:'api-navbar-link',     text:'API',      url:'/devs/api/introduccion',     color:'var(--ifm-color-primary)', hover:'var(--ifm-color-primary-dark)' },
                    { id:'mozo-navbar-link',    text:'Mozo',     url:'/mozo/introduccion',          color:'#28a745', hover:'#218838' },
                    { id:'vendeya-navbar-link', text:'VendeYA',  url:'/vendeya/introduccion',       color:'#6f42c1', hover:'#5a32a3' },
                    { id:'app-navbar-link',     text:'App',      url:'/app-facturacion/intro',      color:'#fd7e14', hover:'#e8650e' },
                  ];

                  links.forEach(cfg => {
                    const link = createLink(cfg.id, cfg.text, cfg.url, cfg.color, cfg.hover);
                    if (link) navbar.appendChild(link);
                  });
                }

                // Reintentos para evitar race conditions
                [0,100,300,600,1000].forEach(t => setTimeout(addLinks, t));

              })();

              console.log("✔ Links Pro8 listos");
            `,
          },
        ],
      };
    },
  };
};
