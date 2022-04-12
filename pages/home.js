/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import Layout from "../components/layout";
import Figure from "../components/figure";
import styles from "../styles/home.module.css";

import work from "../public/work.json";

const Home = () => (
  <Layout>
    <Head>
      <meta property="og:title" content="Eric Lau" />
      <meta
        name="description"
        property="og:description"
        content="Eric Lau's personal website"
      />
      <title>Eric Lau</title>
    </Head>
    <Script src="main.js" />
    <header className={styles.header}>
      <div className={styles.head}>
        <h1>
          <span id="wave" className={styles.wave}>👋🏼</span> My name is Eric Lau.
        </h1>
        <p id="dek" className={styles.dek}>I</p>
        <small>
          <a href="https://twitter.com/erxclau" target="_blank" rel="noreferrer">twitter</a>,&nbsp;
          <a href="https://github.com/erxclau" target="_blank" rel="noreferrer">github</a>,&nbsp;
          <a href="https://www.linkedin.com/in/erxclau/" target="_blank" rel="noreferrer">linkedin</a>,&nbsp;
          <a href="resume.pdf" target="_blank" rel="noreferrer">résumé</a>
        </small>
        <small>ericlau at umich dot edu</small>
      </div>
      <div>
        <picture>
          <source srcSet="/img/webp/selfie.webp" type="image/webp" />
          <img
            src="/img/jpg/selfie.jpg"
            alt="Eric Lau"
            width="300px"
            height="auto"
            className={styles.heroimg}
          />
        </picture>
      </div>
    </header>
    <section className={styles.section}>
      <h2>📝 Words</h2>
      <p>
        I write words occasionally. You can read some of them on my <Link href="/blog"><a>blog</a></Link>.
        I also <a href="https://twitter.com/erxclau" target="_blank" rel="noreferrer">tweet</a> sometimes.
      </p>
      <h2>💻 Code</h2>
      <p>
        I write code too. My main interests are web development and data
        visualization. I mostly write in JavaScript and Python, though I&apos;m
        also comfortable with C/C++. Of the projects featured below, most are
        from work I&apos;ve done for The Michigan Daily. You can find more personal
        and academic work of mine on <a href="https://github.com/erxclau?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </section>
    <section className={`${styles.grid} ${styles.section}`}>
      {
        work.map((w) => (
          <Figure
            key={w.href}
            href={w.href}
            title={w.title}
            dek={w.dek}
          >
            {(w.media.type === "img")
              ? (
                <picture>
                  <source srcSet={`/img/webp/${w.media.src}.webp`} type="image/webp" />
                  <img
                    src={`/img/jpg/${w.media.src}.jpg`}
                    alt={w.media.alt}
                    loading="lazy"
                    width="100%"
                    height="auto"
                  />
                </picture>
              )
              : (
                <video autoPlay muted loop playsInline width="100%" height="auto">
                  <source
                    src={`/video/mp4/${w.media.src}.mp4`}
                    type="video/mp4"
                  />
                </video>
              )
            }
          </Figure>
        ))
      }
    </section>
  </Layout>
);

export default Home;
