/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import Layout from "../components/layout";
import Figure from "../components/figure";
import styles from "../styles/home.module.css";

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
      <Figure
        href="https://www.michigandaily.com/news/more-than-100-ann-arbor-restaurants-closed-in-the-past-three-years-how-have-these-closures-affected-the-community/"
        title="More than 100 Ann Arbor restaurants closed in the past three years. How have these closures affected the community?"
        dek="A map showing the status of Ann Arbor restaurants. Built with QGIS and Adobe Illustrator."
      >
        <picture>
          <source srcSet="/img/webp/map.webp" type="image/webp" />
          <img
            src="/img/jpg/map.jpg"
            alt="Map showing whether Ann Arbor restaurants are closed or open"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </picture>
      </Figure>
      <Figure
        href="https://www.michigandaily.com/campus-life/umich-class-of-2025-by-the-numbers-and-their-hopes-for-college/"
        title="UMich Class of 2025: By the numbers and their hopes for college"
        dek="Data visuals conveying results from The Daily&apos;s Class of 2025 survey. Built with D3 and Scrollama."
      >
        <video autoPlay muted loop playsInline width="100%" height="auto">
          <source
            src="/video/mp4/class-of-2025.mp4"
            type="video/mp4"
          />
        </video>
      </Figure>
      <Figure
        href="https://erxclau.me/ninety-eight-days-on-the-internet/"
        title="98 Days on the Internet"
        dek="A data-driven article about my browsing history over the 2021 winter semester. Built using D3 and Scrollama."
      >
        <video autoPlay muted loop playsInline width="100%" height="auto">
          <source
            src="/video/mp4/ninety-eight-days.mp4"
            type="video/mp4"
          />
        </video>
      </Figure>
      <Figure
        href="https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/"
        title="Daily analysis finds historically large salary disparities between three U-M campuses"
        dek="Data visuals and analyses exploring University salary and budget records. Analysis was conducted with Python and graphics were built with D3."
      >
        <picture>
          <source
            srcSet="/img/webp/campus.webp"
            type="image/webp"
          />
          <img
            src="/img/png/campus.jpg"
            alt="Small multiple graphic showing the disparity in revenue between the three University of Michigan campuses"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </picture>
      </Figure>
      <Figure
        href="https://mic.michigandaily.com/queer-in-color"
        title="Queer in Color"
        dek="A website to showcase work by queer authors and artists in Michigan in Color. Built using React and ArchieML."
      >
        <picture>
          <source srcSet="/img/webp/qic.webp" type="image/webp" />
          <img
            src="/img/jpg/qic.jpg"
            alt="Landing screen of the Queer in Color website"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </picture>
      </Figure>

      <Figure
        href="https://www.michigandaily.com/statement/love-notes-2022/"
        title="Love Notes 2022 Edition"
        dek="A website to display love notes that people sent to each other as cassette tapes. Built using Svelte."
      >
        <picture>
          <source srcSet="/img/webp/love.webp" type="image/webp" />
          <img
            src="/img/jpg/love.jpg"
            alt="Landing screen of the 2022 Love Notes website"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </picture>
      </Figure>
      <Figure
        href="https://miseducation.michigandaily.com"
        title="The Miseducation Project"
        dek="A website to showcase student art and storytelling. Built using React and ArchieML."
      >
        <picture>
          <source
            srcSet="img/webp/miseducation.webp"
            type="image/webp"
          />
          <img
            src="/img/jpg/miseducation.jpg"
            alt="Landing screen of The Miseducation Project website"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </picture>
      </Figure>
      <Figure
        href="https://github.com/erxclau/computer-graphics"
        title="Graphics engine"
        dek="An MDL graphics engine with lighting and coordinate systems capable of rendering animations. Built using C and Python."
      >
        <video autoPlay muted loop playsInline width="100%" height="auto">
          <source src="/video/mp4/brain.mp4" type="video/mp4" />
        </video>
      </Figure>
    </section>
  </Layout>
);

export default Home;
