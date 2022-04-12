import Head from "next/head";
import Layout from "../components/layout";

import styles from "../styles/blog.module.css";

const Blog = () => (
  <Layout>
    <Head>
      <meta property="og:title" content="Eric Lau" />
      <meta
        name="description"
        property="og:description"
        content="Eric Lau's blog"
      />
      <title>Eric Lau&apos;s blog</title>
    </Head>
    <header className={styles.header}>
      <h1>Eric&apos;s blog</h1>
    </header>
    <article className={styles.article}>
      <a href="/blog/posts/on-newsroom-engineering.html">On newsroom engineering</a>
      <time dateTime="2022-04-10">April 10</time>
      <summary>
        My thoughts on what makes a good engineering team in a newsroom after
        my experiences at The Michigan Daily and The Texas Tribune.
      </summary>
    </article>
    <article className={styles.article}>
      <a href="/blog/posts/on-web-development.html">On web development</a>
      <time dateTime="2022-04-10">April 10</time>
      <summary>
        What I think is crucial for learning web development from scratch
      </summary>
    </article>
    <article className={styles.article}>
      <a href="/blog/posts/on-data-visualization.html">On data visualization</a>
      <time dateTime="2022-04-10">April 10</time>
      <summary>Exploring how I go about doing data visualization</summary>
    </article>
    <article className={styles.article}>
      <a href="/blog/posts/reflections-on-winter-2022.html">Reflections on Winter 2022</a>
      <time dateTime="2022-04-10">April 10</time>
      <summary>Thinking back on the Winter 2022 semester</summary>
    </article>
  </Layout>
);

export default Blog;
