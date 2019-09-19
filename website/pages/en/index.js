/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small style={{ lineHeight: 1.4 }}>
          a different <code>mailto:</code>
          <br />
          and another <code>tel:</code>
        </small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
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
        <Logo img_src={`${baseUrl}img/undraw_mail_2_tqip.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("installation")}>Docs</Button>
            <Button
              href="https://codepen.io/manzinello/pen/RmeQEr"
              target="_blank"
            >
              Demo
            </Button>
            <Button href="mailto:matteo@manzinello.dev" className="red-button">
              mailto:
            </Button>
            <Button
              href="tel:123456789"
              dataTelegram="telegram"
              className="red-button"
            >
              tel:
            </Button>
          </PromoSection>
          <br />
          <p className="wip">
            (This project is wip! Have suggestions?
            <br />
            Do you want to contribute?{" "}
            <a target="_blank" href="https://matteomanzinello.com">
              Contact me
            </a>
            )
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

    const Block = props => (
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
              "open `mailto` links in Gmail, in Outlook or copy the email address",
            image: `${baseUrl}img/mailgo-mail.png`,
            imageAlign: "top",
            title: "mail links"
          },
          {
            content:
              "open `tel` links in Telegram, in WhatsApp, in Skype or just copy the phone number",
            image: `${baseUrl}img/mailgo-tel.png`,
            imageAlign: "top",
            title: "phone links"
          }
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div className="productShowcaseSection paddingBottom">
        <h2>A beautiful modal</h2>
        <iframe
          className="mailgo-youtube"
          src="https://www.youtube.com/embed/bGx0y9i93co?controls=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <MarkdownBlock>
          A beautiful modal, instead the classic `mailto` and `tel` behaviour
        </MarkdownBlock>
        <small>
          and everything in less than 4kB (minified + gzipped), according to{" "}
          <a href="https://bundlephobia.com/result?p=mailgo" target="_blank">
            BundlePhobia
          </a>
        </small>
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
            title: "All mailto and tel substituted"
          }
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
            title: "Less spam"
          }
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
            title: "Keyboard commands"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a target="_blank" href={user.infoLink} key={user.infoLink}>
            <img
              src={"/img/users/" + user.image}
              alt={user.caption}
              title={user.caption}
            />
            <p>{user.caption}</p>
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is using mailgo? (wip)</h2>
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
          <Features />
          <FeatureCallout />
          <Box1 />
          <Box2 />
          <Box3 />
          <PH />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
