import { readdirSync } from "fs";
import { basename, join, resolve } from "path";
import { read } from "gray-matter";

import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import styles from "../styles/blog.module.css";

const Blog = ({ posts }) => (
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
    {
      posts.map(({ data, path }) => (
        <article className={styles.article} key={data.slug}>
          <Link href={`/posts/${basename(path, ".md")}`}>
            <a>{data.title}</a>
          </Link>
          <time dateTime={data.date}>{data.date}</time>
          <summary>
            {data.dek}
          </summary>
        </article>
      ))
    }
  </Layout>
);

const getStaticProps = () => {
  const dir = resolve("./", "posts");
  const filenames = readdirSync(dir);

  const posts = filenames.map((name) => {
    const f = join("./", "posts", name);
    const p = read(f);
    return { data: p.data, path: p.path };
  });

  return { props: { posts: posts } };
};

export { getStaticProps };
export default Blog;
