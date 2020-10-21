/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const {
  faBook,
  faWindowRestore,
  faEnvelope,
  faPhoneAlt,
  faLightbulb,
} = require("@fortawesome/free-solid-svg-icons");

const {
  faWordpressSimple,
  faMagento,
  faChrome,
  faFirefoxBrowser,
  faGithub,
} = require("@fortawesome/free-brands-svg-icons");

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small style={{ lineHeight: 1.4 }}>
          a <u>new</u> concept of
          <br />
          <code>mailto</code> and <code>tel</code> links
        </small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a
          className={"button " + props.className}
          href={props.href}
          target={props.target}
          data-telegram={props.dataTelegram}
        >
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_personal_email_t7nw.svg`} />
        <div className="inner home-top-block">
          <ProjectTitle siteConfig={siteConfig} />
          <div className="main-buttons">
            <PromoSection>
              <Button href={docUrl("installation")} className="big-button">
                <FontAwesomeIcon icon={faBook} /> Docs
              </Button>
              <Button
                href="https://codepen.io/manzinello/pen/RmeQEr"
                target="_blank"
                className="big-button"
              >
                <FontAwesomeIcon icon={faWindowRestore} /> Demo
              </Button>
              <Button
                href="https://github.com/manzinello/mailgo"
                target="_blank"
                className="big-button"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </Button>
            </PromoSection>
          </div>
          <div className="example-buttons">
            <PromoSection>
              <Button
                href="mailto:matteo@manzinello.dev"
                className="red-button little-button"
              >
                <FontAwesomeIcon icon={faEnvelope} /> mailto
              </Button>
              <Button
                href="tel:123456789"
                dataTelegram="telegram"
                className="red-button little-button"
              >
                <FontAwesomeIcon icon={faPhoneAlt} /> tel
              </Button>
              <Button
                href="mailto:matteo@manzinello.dev"
                className="dark-button little-button dark"
              >
                <FontAwesomeIcon icon={faLightbulb} />
                dark mode
              </Button>
            </PromoSection>
          </div>
          <br />
          <p className="available-on">
            <strong>mailgo</strong> is on{" "}
            <a href="https://www.npmjs.com/package/mailgo" target="_blank">
              npm
            </a>
            ,{" "}
            <a
              href="https://unpkg.com/mailgo@0.10.4/dist/mailgo.min.js"
              target="_blank"
            >
              cdn
            </a>
            ,{" "}
            <a href="https://www.pika.dev/npm/mailgo" target="_blank">
              Pika
            </a>
          </p>
          <p className="official-extensions-title">
            and also{" "}
            <strong>
              <u>officially</u>
            </strong>{" "}
            available for
          </p>
          <div className="official-extensions">
            <PromoSection>
              <Button
                href="https://wordpress.org/plugins/mailgo/"
                target="_blank"
                className="wp-button little-button"
              >
                <FontAwesomeIcon icon={faWordpressSimple} /> WordPress
              </Button>
              <Button
                href="https://marketplace.magento.com/manzinello-mailgo.html"
                target="_blank"
                className="magento-button little-button"
              >
                <FontAwesomeIcon icon={faMagento} />
                Magento
              </Button>
            </PromoSection>
            <PromoSection>
              <Button
                href="https://www.gatsbyjs.org/packages/gatsby-plugin-mailgo/"
                target="_blank"
                className="gatsbyjs-button little-button"
              >
                <img src="/img/gatsbyjs-icon.svg" width="16" />
                GatsbyJS
              </Button>
            </PromoSection>
            <PromoSection>
              <Button
                href="https://chrome.google.com/webstore/detail/mailgo/kljnooagpdphdgjnmjhenkganebccejm"
                target="_blank"
                className="chrome-button little-button"
              >
                <FontAwesomeIcon icon={faChrome} /> Chrome
              </Button>
              <Button
                href="https://addons.mozilla.org/it/firefox/addon/mailgo/"
                target="_blank"
                className="firefox-button little-button"
              >
                <FontAwesomeIcon icon={faFirefoxBrowser} /> Firefox
              </Button>
            </PromoSection>
          </div>
          <p className="wip">
            <strong>mailgo</strong> is an Open Source project
            <br />
            Do you want to{" "}
            <a target="_blank" href="https://github.com/manzinello/mailgo">
              contribute
            </a>
            ?
          </p>
          <br />
          <img
            alt="mailgo on npm"
            src="https://img.shields.io/npm/v/mailgo.svg?color=%23bb342f&style=flat-square"
          />{" "}
          <a
            className="github-button"
            href={"https://github.com/manzinello/mailgo"}
            data-icon="octicon-star"
            data-count-href="/manzinello/mailgo/stargazers"
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
          <br />
          <img
            className="mailgo-second-shields"
            alt="mailgo npm bundle size"
            src="https://img.shields.io/bundlephobia/minzip/mailgo.svg?color=%23477998&style=flat-square"
          />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content:
              "open `mailto` links in Gmail, in Outlook, in Yahoo Mail<br/>or copy the email address",
            image: `${baseUrl}img/mailgo-mail.png`,
            imageAlign: "top",
            title: "mail links",
          },
          {
            content:
              "open `tel` links in Telegram, in WhatsApp, in Skype<br/>or just copy the phone number",
            image: `${baseUrl}img/mailgo-tel-dark.png`,
            imageAlign: "top",
            title: "phone links",
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div className="productShowcaseSection paddingBottom">
        <h2>A modal, with more possibilities</h2>
        <iframe
          className="mailgo-youtube"
          width="600"
          height="350"
          src="https://www.youtube.com/embed/rCx8lUZjPVE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <MarkdownBlock>
          A simple modal, instead the classic `mailto` and `tel` behaviour
        </MarkdownBlock>
        {false && (
          <small>
            and everything in <u>less than </u> (minified + gzipped), according
            to{" "}
            <a href="https://bundlephobia.com/result?p=mailgo" target="_blank">
              BundlePhobia
            </a>
          </small>
        )}
      </div>
    );

    const Box1 = () => (
      <Block background="light">
        {[
          {
            content:
              "Only installing **mailgo** on your website or web app will transform all the `mailto` and `tel` links in modal",
            image: `${baseUrl}img/undraw_message_sent_1030.svg`,
            imageAlign: "right",
            title: "All mailto and tel substituted",
          },
        ]}
      </Block>
    );

    const Box2 = () => (
      <Block background="dark" style={{ textAlign: "left" }}>
        {[
          {
            content:
              "With less-spam installation your email address will not appear directly in the webpage in the classic mailto form",
            image: `${baseUrl}img/undraw_inbox_cleanup_w2ur.svg`,
            imageAlign: "left",
            title: "Less spam",
          },
        ]}
      </Block>
    );

    const Box3 = () => (
      <Block id="try">
        {[
          {
            content: "Use the **keyboard** to call actions on mailgo modal",
            image: `${baseUrl}img/undraw_startup_life_2du2.svg`,
            imageAlign: "right",
            title: "Keyboard commands",
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a target="_blank" href={user.infoLink} key={user.infoLink}>
            <img
              src={"/img/users/" + user.image}
              alt={user.caption}
              title={user.caption}
            />
            <p>{user.caption}</p>
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is using mailgo?</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users")}>
              More {siteConfig.title} users
            </a>
          </div>
        </div>
      );
    };

    const PH = () => {
      return (
        <div className="productShowcaseSection paddingBottom">
          <h2 style={{ color: "#cc4d29" }}>mailgo is on ProductHunt</h2>
          <iframe
            style={{ border: "none", maxWidth: "100%" }}
            src="https://cards.producthunt.com/cards/posts/157026?v=1"
            width="500"
            height="400"
          ></iframe>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <div className="features mailgo-screenshots">
            <Features />
          </div>
          <FeatureCallout />
          {false && (
            <div>
              <Box1 />
              <Box2 />
              <Box3 />
            </div>
          )}
        </div>
      </div>
    );
  }
}

module.exports = Index;
