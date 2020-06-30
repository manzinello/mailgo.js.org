/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = require("./data/users.json");

const siteConfig = {
  title: "mailgo", // Title for your website.
  tagline: "a different mailto and another tel",
  url: "https://mailgo.js.org", // Your website URL
  baseUrl: "/", // Base URL for your project

  // Used for publishing and more
  projectName: "mailgo",
  organizationName: "manzinello",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { href: "https://codepen.io/manzinello/pen/RmeQEr", label: "Demo" },
    { page: "users", label: "Users" },
    { href: "https://github.com/manzinello/mailgo", label: "GitHub" },
  ],

  /* path to images for header/footer */
  headerIcon: "img/mailgo-1024.png",
  footerIcon: "img/mailgo-1024.png",
  favicon: "img/favicon-mailgo.png",

  /* Colors for website */
  colors: {
    primaryColor: "#477998",
    secondaryColor: "#2e4e63",
    red: "#bb342f",
  },

  users,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `MIT license, a project by matteo manzinello`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "atom-one-dark",
  },

  cname: "mailgo.js.org",

  gaTrackingId: "UA-39542008-22",

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/npm/mailgo@latest/dist/mailgo.min.js",
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_mail_2_tqip.svg",
  twitterImage: "img/undraw_mail_2_tqip.svg",

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/manzinello/mailgo",

  algolia: {
    apiKey: "df9368da0b4a5952632c57922e618cb2",
    indexName: "mailgo",
    algoliaOptions: {}, // Optional, if provided by Algolia
  },

  // this is another my project! fab-ulous: fab-ulous.github.io
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/@fab-ulous/github@latest/dist/github.min.css",
  ],
};

module.exports = siteConfig;
