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
            <a href={this.docUrl("usage")}>Usage</a>
            <a href={this.docUrl("examples")}>Examples</a>
            <a href={this.docUrl("customization")}>Customization (WIP)</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/manzinello/mailgo">mailgo on GitHub</a>
            <a href="https://wordpress.org/plugins/mailgo/">
              mailgo WordPress plugin
            </a>
            <a href="https://github.com/manzinello/mailgo-chrome-extension">
              mailgo Chrome Extension (WIP)
            </a>
            <a href="https://github.com/manzinello/react-mailgo">
              mailgo React component (WIP)
            </a>
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
        </section>
        <section className="copyright">
          mailgo is distributable under the terms of the{" "}
          <a href="https://github.com/manzinello/mailgo/blob/master/LICENSE">
            MIT license
          </a>
          , a project by{" "}
          <a href="https://matteomanzinello.com">matteo manzinello</a>
          <a
            className="netlify-badge"
            target="_blank"
            href="https://www.netlify.com"
          >
            <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" />
          </a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
