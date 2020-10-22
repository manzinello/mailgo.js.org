/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

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
            <a href={this.docUrl("installation")}>Installation</a>
            <a href={this.docUrl("usage")}>Usage (mailto:)</a>
            <a href={this.docUrl("usage-tel")}>Usage (tel:)</a>
            <a href={this.docUrl("configuration")}>Configuration</a>
            <a href={this.docUrl("examples")}>Examples</a>
            <a href={this.docUrl("style-and-a11y")}>Style and Accessibility</a>
            <a href={this.docUrl("i18n")}>i18n</a>
          </div>
          <div>
            <h5>More</h5>
            <a target="_blank" href="https://github.com/manzinello/mailgo">
              mailgo on GitHub
            </a>
            <a
              target="_blank"
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-mailgo/"
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
            <h5>GitHub repositories</h5>
            <a target="_blank" href="https://github.com/manzinello/mailgo">
              mailgo repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-wp-plugin"
            >
              mailgo for WordPress repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/magento2-mailgo"
            >
              mailgo for Magento 2 repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/gatsby-plugin-mailgo"
            >
              mailgo for Gatsby repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-chrome-extension"
            >
              mailgo Chrome extension repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-firefox-addon"
            >
              mailgo Firefox addon repository
            </a>
            <a
              target="_blank"
              href="https://github.com/manzinello/mailgo-examples"
            >
              mailgo examples repository
            </a>
            <a target="_blank" href="https://github.com/manzinello/mailgo.dev">
              mailgo.dev repository
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
            <a href="mailto:matteo@manzinello.dev">Contact me</a>
            <a target="_blank" href="https://matteomanzinello.com">
              matteomanzinello.com
            </a>
            <a target="_blank" href="https://manzinello.dev">
              manzinello.dev
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
