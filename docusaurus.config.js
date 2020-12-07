module.exports = {
  title: "mailgo",
  tagline: "a new concept of mailto and tel links",
  url: "https://mailgo.dev",
  baseUrl: "/",
  organizationName: "manzinello",
  projectName: "mailgo",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js",
  ],
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
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  themeConfig: {
    navbar: {
      title: "mailgo",
      logo: {
        src: "img/mailgo-1024.png",
      },
      items: [
        {
          to: "docs/",
          label: "Docs",
          position: "left",
        },
        {
          href: "/demo",
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
          to: "docs/browser-extensions",
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
      links: [],
      copyright: "MIT license, a project by matteo manzinello",
      logo: {
        src: "img/mailgo-1024.png",
      },
    },
    algolia: {
      apiKey: "df9368da0b4a5952632c57922e618cb2",
      indexName: "mailgo",
      algoliaOptions: {},
    },
    gtag: {
      trackingID: "UA-39542008-22",
    },
  },
};
