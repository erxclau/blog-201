/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/layout";
import Figure from "../components/figure";
import styles from "../styles/home.module.css";

import love from "../public/img/jpg/love.jpg";
import miseducation from "../public/img/jpg/miseducation.jpg";
import qic from "../public/img/jpg/qic.jpg";
import selfie from "../public/img/jpg/selfie.jpg";
import campus from "../public/img/png/campus.png";
import map from "../public/img/png/map.png";

const work = [
  {
    "href": "https://www.michigandaily.com/news/more-than-100-ann-arbor-restaurants-closed-in-the-past-three-years-how-have-these-closures-affected-the-community/",
    "title": "More than 100 Ann Arbor restaurants closed in the past three years. How have these closures affected the community?",
    "dek": "A map showing the status of Ann Arbor restaurants. Built with QGIS and Adobe Illustrator.",
    "media": {
      "type": "img",
      "src": map,
      "alt": "Map showing whether Ann Arbor restaurants are closed or open"
    }
  },
  {
    "href": "https://www.michigandaily.com/campus-life/umich-class-of-2025-by-the-numbers-and-their-hopes-for-college/",
    "title": "UMich Class of 2025: By the numbers and their hopes for college",
    "dek": "Data visuals conveying results from The Daily&apos;s Class of 2025 survey. Built with D3 and Scrollama.",
    "media": {
      "type": "video",
      "src": "class-of-2025"
    }
  },
  {
    "href": "https://erxclau.me/ninety-eight-days-on-the-internet/",
    "title": "98 Days on the Internet",
    "dek": "A data-driven article about my browsing history over the 2021 winter semester. Built using D3 and Scrollama.",
    "media": {
      "type": "video",
      "src": "ninety-eight-days"
    }
  },
  {
    "href": "https://www.michigandaily.com/research/daily-analysis-finds-historically-large-salary-disparities-between-three-u-m-campuses/",
    "title": "Daily analysis finds historically large salary disparities between three U-M campuses",
    "dek": "Data visuals and analyses exploring University salary and budget records. Analysis was conducted with Python and graphics were built with D3.",
    "media": {
      "type": "img",
      "src": campus,
      "alt": "Small multiple graphic showing the disparity in revenue between the three University of Michigan campuses"
    }
  },
  {
    "href": "https://mic.michigandaily.com/queer-in-color",
    "title": "Queer in Color",
    "dek": "A website to showcase work by queer authors and artists in Michigan in Color. Built using React and ArchieML.",
    "media": {
      "type": "img",
      "src": qic,
      "alt": "Landing screen of the Queer in Color website"
    }
  },
  {
    "href": "https://www.michigandaily.com/statement/love-notes-2022/",
    "title": "Love Notes 2022 Edition",
    "dek": "A website to display love notes that people sent to each other as cassette tapes. Built using Svelte.",
    "media": {
      "type": "img",
      "src": love,
      "alt": "Landing screen of the 2022 Love Notes website"
    }
  },
  {
    "href": "https://miseducation.michigandaily.com",
    "title": "The Miseducation Project",
    "dek": "A website to showcase student art and storytelling. Built using React and ArchieML.",
    "media": {
      "type": "img",
      "src": miseducation,
      "alt": "Landing screen of The Miseducation Project website"
    }
  },
  {
    "href": "https://github.com/erxclau/computer-graphics",
    "title": "Graphics engine",
    "dek": "An MDL graphics engine with lighting and coordinate systems capable of rendering animations. Built using C and Python.",
    "media": {
      "type": "video",
      "src": "brain"
    }
  }
];

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
    <Script src="main.js" type="module" />
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
        <Image
          src={selfie}
          alt="Eric Lau"
          width={400}
          height={400}
          className={styles.heroimg}
          priority
        />
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
              ? (<Image src={w.media.src} alt={w.media.alt} />)
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
