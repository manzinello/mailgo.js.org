import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Head from "@docusaurus/Head";

import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBook,
  faMoon,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faCodepen } from "@fortawesome/free-brands-svg-icons";

const features = [
  {
    title: "Simple",
    imageUrl: "img/simple.svg",
    description: (
      <>
        Just import the script in the webpage and all the mailto and tel will be
        substituted with a modal
      </>
    ),
  },
  {
    title: "Light",
    imageUrl: "img/light.svg",
    description: (
      <>All the functionalities and customizations are in just some KBs</>
    ),
  },
  {
    title: "Customizable",
    imageUrl: "img/customizable.svg",
    description: (
      <>
        In every type of installation you can change settings of the modal, from
        the UI, the visibility of the elements and the default lang
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`mailgo - a new concept of mailto and tel links`}
      description="A new concept of mailto and tel links"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title" style={{ fontSize: "5em" }}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">
            a new concept of <code>mailto</code> and <code>tel</code> links
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              <FontAwesomeIcon icon={faBook} /> Get Started
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("demo/")}
            >
              <FontAwesomeIcon icon={faCodepen} /> Demo
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--sm",
                styles.getStarted
              )}
              to="mailto:info@mailgo.dev"
            >
              <FontAwesomeIcon icon={faEnvelope} /> info@mailgo.dev
            </Link>
            <Link
              className={clsx(
                "button button--secondary button--sm",
                styles.getStarted
              )}
              data-telegram="telegram"
              to="tel:123-456-78"
            >
              <FontAwesomeIcon icon={faPhoneAlt} /> 123-456-78
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--sm dark",
                styles.getStarted
              )}
              to="mailto:info@mailgo.dev"
            >
              <FontAwesomeIcon icon={faMoon} /> Dark mode
            </Link>
          </div>
          <div>
            <img
              alt="mailgo on npm"
              src="https://img.shields.io/npm/v/mailgo.svg?color=%23ebedf0&style=flat-square"
            />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
