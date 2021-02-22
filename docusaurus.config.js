const path = require("path");

module.exports = {
  title: "mailgo",
  tagline: "a new concept of mailto and tel links",
  url: "https://mailgo.dev",
  baseUrl: "/",
  organizationName: "manzinello",
  projectName: "mailgo",
  scripts: ["https://unpkg.com/mailgo@0.11.3/dist/mailgo.min.js"],
  favicon: "img/favicon-mailgo.png",
  customFields: {
    repoUrl: "https://github.com/manzinello/mailgo",
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // homePageId: "installation",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/manzinello/mailgo.dev/tree/master/docs/",
          path: "./docs",
          sidebarPath: "./sidebars.json",
        },
        blog: {},
        theme: {
          customCss: ["../src/css/mailgo.css"],
        },
        sitemap: {
          cacheTime: 600 * 1000,
          changefreq: "weekly",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    // "@docusaurus/plugin-google-analytics",
    path.resolve(__dirname, "iubenda-plugin"),
    /*[
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000,
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],*/
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    googleAnalytics: {
      trackingID: "UA-39542008-22",
      anonymizeIP: true,
    },
    navbar: {
      title: "mailgo",
      logo: {
        src: "img/mailgo-1024.png",
      },
      items: [
        {
          to: "/docs/",
          target: "_self",
          label: "Docs",
          position: "left",
        },
        {
          href: "/demo/",
          target: "_self",
          label: "Demo",
          position: "left",
        },
        {
          to: "https://www.gatsbyjs.com/plugins/gatsby-plugin-mailgo/",
          label: "Gatsby",
          position: "left",
        },
        {
          to: "https://wordpress.org/plugins/mailgo/",
          label: "WordPress",
          position: "left",
        },
        {
          to: "/docs/browser-extensions",
          target: "_self",
          label: "Browser extensions",
          position: "left",
        },
        {
          href: "https://github.com/manzinello/mailgo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    image: "img/undraw_mail_2_tqip.svg",
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "Usage (mailto)",
              to: "docs/usage",
            },
            {
              label: "Usage (tel)",
              to: "docs/usage-tel",
            },
            {
              label: "Configuration",
              to: "docs/configuration",
            },
            {
              label: "Examples",
              to: "docs/examples",
            },
            {
              label: "Style and Accessibility",
              to: "docs/style-and-a11y",
            },
            {
              label: "i18n",
              to: "docs/i18n",
            },
          ],
        },
        {
          title: "Examples",
          items: [
            {
              label: "Mailgo examples",
              to: "https://examples.mailgo.dev",
            },
            {
              label: "Mailgo Gatsby example",
              to: "https://gatsby-mailgo-example.mailgo.dev",
            },
            {
              label: "Mailgo in create-react-app",
              to: "https://create-react-mailgo-app.mailgo.dev",
            },
            {
              label: "Mailgo Next.js example",
              to: "https://nextjs.mailgo.dev",
            },
            {
              label: "Mailgo in Vue",
              to: "https://vue-mailgo.mailgo.dev",
            },
          ],
        },
        {
          title: "Repositories",
          items: [
            {
              label: "Mailgo",
              to: "https://github.com/manzinello/mailgo",
            },
            {
              label: "Mailgo for WordPress",
              to: "https://github.com/manzinello/mailgo-wp-plugin",
            },
            {
              label: "Mailgo for Magento 2",
              to: "https://github.com/manzinello/magento2-mailgo",
            },
            {
              label: "Mailgo for GatsbyJS",
              to: "https://github.com/manzinello/gatsby-plugin-mailgo",
            },
            {
              label: "Mailgo Chrome Extension",
              to: "https://github.com/manzinello/mailgo-chrome-extension",
            },

            {
              label: "Mailgo Firefox addon",
              to: "https://github.com/manzinello/mailgo-firefox-addon",
            },
            {
              label: "Mailgo examples",
              to: "https://github.com/manzinello/mailgo-examples",
            },
            {
              label: "Mailgo.dev",
              to: "https://github.com/manzinello/mailgo.dev",
            },
            {
              label: "Mailgo in create-react-app",
              to: "https://github.com/manzinello/create-react-mailgo-app",
            },
            {
              label: "Mailgo in Next.js",
              to: "https://github.com/manzinello/next-mailgo",
            },
            {
              label: "Mailgo in GatsbyJS",
              to: "https://github.com/manzinello/gatsby-mailgo-example",
            },
            {
              label: "Mailgo in Vue",
              to: "https://github.com/manzinello/vue-mailgo",
            },
          ],
        },
        {
          title: "Author",
          items: [
            {
              label: "matteomanzinello.com",
              to: "https://matteomanzinello.com/?ref=mailgo",
            },
            {
              label: "manzinello.dev",
              to: "https://manzinello.dev/?ref=mailgo",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              to: "https://www.iubenda.com/privacy-policy/23081204",
            },
            {
              label: "Cookie Policy",
              to:
                "https://www.iubenda.com/privacy-policy/23081204/cookie-policy",
            },
            {
              html: `
                  <a class="badge-footer" href="https://www.browserstack.com" target="_blank" rel="noreferrer noopener" aria-label="Browserstack">
                    <img src="/img/browserstack-white.png" alt="Browserstack" />
                  </a>
                `,
            },
            {
              html: `
                  <a class="badge-footer" href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                  </a>
                `,
            },
          ],
        },
      ],
      copyright: "MIT license, a project by <strong>matteo manzinello</strong>",
      logo: {
        src: "img/mailgo-1024.png",
      },
    },
    algolia: {
      apiKey: "df9368da0b4a5952632c57922e618cb2",
      indexName: "mailgo",
      algoliaOptions: {},
    },
  },
};
