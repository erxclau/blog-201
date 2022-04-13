import { readdirSync } from "fs";
import { join, resolve } from "path";
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
      posts.map((post) => (
        <article className={styles.article} key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <time dateTime={post.date}>{post.date}</time>
          <summary>
            {post.dek}
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
    return read(f).data;
  });

  return { props: { posts: posts } };
};

export { getStaticProps };
export default Blog;
