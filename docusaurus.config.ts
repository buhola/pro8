import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "PRO 8",
  tagline: "Facturador Electrónico Pro 8",
  favicon: "img/pro8-favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://manual.pro8.uio.la",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zjceo", // Usually your GitHub org/user name.
  projectName: "pro8", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          //sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zjceo/pro8/tree/main/",
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },*/
        //},
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "plugin-image-zoom",

    "./src/plugins/api-navbar-plugin.js",

    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "facturador", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          anulacion_boleta: {
            specPath: "apifacturador/AnulacionBoletas",
            outputDir: "docs/devs/api/tenant/Anulacion-boleta",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "anulacion-boletas",
            },
          },
          anulacion_facturas: {
            specPath: "apifacturador/AnulaciónFacturasNotas",
            outputDir: "docs/devs/api/tenant/Anulacion-facturas",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "anulacion-facturas",
            },
          },
          generar_boleta: {
            specPath: "apifacturador/GenerarBoleta",
            outputDir: "docs/devs/api/tenant/Generar-boleta",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "generar-boleta",
            },
          },
          generar_cotización: {
            specPath: "apifacturador/GenerarCotizacion",
            outputDir: "docs/devs/api/tenant/Generar-cotizacion",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "generar-cotizacion",
            },
          },
          generar_factura: {
            specPath: "apifacturador/GenerarFactura",
            outputDir: "docs/devs/api/tenant/Generar-factura",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "generar-factura",
            },
          },
          generar_notas: {
            specPath: "apifacturador/GenerarNotas",
            outputDir: "docs/devs/api/tenant/Generar-notas",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "generar-notas",
            },
          },
          generar_resumenes: {
            specPath: "apifacturador/GenerarResúmenes",
            outputDir: "docs/devs/api/tenant/Generar-resumenes",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "generar-resumenes",
            },
          },
          guia_remision: {
            specPath: "apifacturador/GuiaDeRemision",
            outputDir: "docs/devs/api/tenant/Guia-remision",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "guia-remision",
            },
          },
          inventario: {
            specPath: "apifacturador/Inventario",
            outputDir: "docs/devs/api/tenant/Inventario",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "inventario",
            },
          },
          productos: {
            specPath: "apifacturador/Productos",
            outputDir: "docs/devs/api/tenant/Productos",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "productos",
            },
          },
          retencion: {
            specPath: "apifacturador/Retencion",
            outputDir: "docs/devs/api/tenant/Retencion",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          Clientes: {
            specPath: "apifacturador/Clientes",
            outputDir: "docs/devs/api/tenant/Clientes",
            baseUrl: "/api",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          locked_tenant: {
            specPath: "apifacturador/lockedTenant",
            outputDir: "docs/devs/api/admin/locked-tenant",
            baseUrl: "/api",
            sidebarOptions: {},
          },
          api_spec: {
            specPath: "apifacturador/api_spec",
            outputDir: "docs/devs/api/admin/api-spec",
            baseUrl: "/api",
            sidebarOptions: {},
          },
          //gestion_tenants: {
          //  specPath: "apifacturador/gestion_tenants",
          //  outputDir: "docs/devs/api/admin/gestion_tenants",
          //  baseUrl: "/api",
          //  sidebarOptions: {},
          //},
          api_rest: {
            specPath: "apifacturador/api-rest.yaml",
            outputDir: "docs/api-rest",
            baseUrl: "/api-rest",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
          },
          locked_admin: {
            specPath: "apifacturador/lockedAdmin",
            outputDir: "docs/devs/api/admin/locked-admin",
            baseUrl: "/api",
            sidebarOptions: {},
          },
        },
      },
    ],
  ],

  themes: [
    require.resolve("docusaurus-theme-openapi-docs"),
    require.resolve("@docusaurus/theme-live-codeblock"),
    //require.resolve("@docusaurus/theme-search-algolia"),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/pro8-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "I0B1SS64CU",
      // Public API key
      apiKey: "6a3186a95fda093e0fa197b971e74924",
      indexName: "Pro 8",
    },
    navbar: {
      title: "Pro 8",
      logo: {
        alt: "Facturador Pro 8",
        src: "img/pro8-logo.svg",
      },
      items: [
        /*{
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },*/
        //{ to: "/blog", label: "Blog", position: "left" },
        //{
        //  href: "https://github.com/facebook/docusaurus",
        //  label: "GitHub",
        //  position: "right",
        //},
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        // hideable: true,
      },
    },
    footer: {
      style: "dark",
      links: [
        /*{
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },*/
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: ".markdown img",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
