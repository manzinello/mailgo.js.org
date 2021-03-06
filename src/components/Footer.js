/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="150"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={"/docs/"}>Installation</a>
            <a href={"/docs/usage"}>Usage (mailto:)</a>
            <a href={"/docs/usage-tel"}>Usage (tel:)</a>
            <a href={"/docs/configuration"}>Configuration</a>
            <a href={"/docs/examples"}>Examples</a>
            <a href={"/docs/style-and-a11y"}>Style and Accessibility</a>
            <a href={"/docs/i18n"}>i18n</a>
            <br />
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/manzinello/mailgo/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
          <div>
            <h5>Examples</h5>
            <a target="_blank" href="https://examples.mailgo.dev">
              mailgo examples
            </a>
            <a target="_blank" href="https://gatsby-mailgo-example.mailgo.dev">
              mailgo Gatsby example
            </a>
            <a
              target="_blank"
              href="https://create-react-mailgo-app.mailgo.dev"
            >
              mailgo in create-react-app
            </a>
            <a target="_blank" href="https://nextjs.mailgo.dev">
              mailgo Next.js example
            </a>
            <a target="_blank" href="https://vue-mailgo.mailgo.dev">
              mailgo in Vue
            </a>
            <br />
            <h5>More</h5>
            <a
              target="_blank"
              href="https://www.gatsbyjs.com/plugins/gatsby-plugin-mailgo/"
            >
              mailgo Gatsby plugin
            </a>
            <a target="_blank" href="https://wordpress.org/plugins/mailgo/">
              mailgo WordPress plugin
            </a>
            <a
              target="_blank"
              href="https://marketplace.magento.com/manzinello-mailgo.html"
            >
              mailgo for Magento 2
            </a>
            <a
              target="_blank"
              href="https://packagist.org/packages/manzinello/mailgo"
            >
              manzinello/mailgo on Packagist
            </a>
            <a href={this.docUrl("by-the-community")}>
              Integrations by the community
            </a>
          </div>
          <div>
            <h5>GitHub repositories</h5>
            <a target="_blank" href="https://github.com/manzinello/mailgo">
              mailgo
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-wp-plugin"
            >
              mailgo for WordPress
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/magento2-mailgo"
            >
              mailgo for Magento 2
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/gatsby-plugin-mailgo"
            >
              mailgo for Gatsby
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-chrome-extension"
            >
              mailgo Chrome extension
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-firefox-addon"
            >
              mailgo Firefox addon
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-examples"
            >
              mailgo examples
            </a>
            <a target="_blank" href="https://github.com/manzinello/mailgo.dev">
              mailgo.dev
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/create-react-mailgo-app"
            >
              mailgo in react-react-app
            </a>
            <a target="_blank" href="https://github.com/manzinello/next-mailgo">
              mailgo in Next.js
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/gatsby-mailgo-example"
            >
              mailgo in Gatsby
            </a>
            <a target="_blank" href="https://github.com/manzinello/vue-mailgo">
              mailgo in Vue
            </a>
          </div>
          <div>
            <h5>Browsers extensions</h5>
            <a
              target="_blank"
              href="https://chrome.google.com/webstore/detail/mailgo/kljnooagpdphdgjnmjhenkganebccejm"
            >
              mailgo Chrome Extension
            </a>
            <a
              target="_blank"
              href="https://addons.mozilla.org/it/firefox/addon/mailgo/"
            >
              mailgo Firefox addon
            </a>
            <br />
            <h5>Author</h5>
            <a href="mailto:matteo@manzinello.dev" className="dark">
              Contact me
            </a>
            <a target="_blank" href="https://matteomanzinello.com">
              matteomanzinello.com
            </a>
            <a target="_blank" href="https://manzinello.dev">
              manzinello.dev
            </a>
            <br />
            <h5>Privacy</h5>
            <a
              target="_blank"
              href="https://www.iubenda.com/privacy-policy/23081204"
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              href="https://www.iubenda.com/privacy-policy/23081204/cookie-policy"
            >
              Cookie Policy
            </a>
          </div>
        </section>
        <section className="copyright">
          mailgo is distributable under the terms of the{" "}
          <a href="https://github.com/manzinello/mailgo/blob/master/LICENSE">
            MIT license
          </a>
          , a project by{" "}
          <a target="_blank" href="https://matteomanzinello.com">
            matteo manzinello
          </a>
          <a
            className="browserstack-badge"
            target="_blank"
            href="https://www.browserstack.com"
          >
            <img width="180" src="/img/browserstack-white.png" />
          </a>
          <a
            className="netlify-badge"
            target="_blank"
            href="https://www.netlify.com"
          >
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" />
          </a>
        </section>
        {false && (
          <a
            target="_blank"
            id="github-fabulous"
            href="https://github.com/manzinello/mailgo"
            className="red left"
          >
            mailgo
          </a>
        )}
      </footer>
    );
  }
}

module.exports = Footer;
