import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Converter } from "showdown";

import Head from "next/head";

import Layout from "../../components/layout";
import styles from "../../styles/post.module.css";

const Post = ({ data, content }) => (
  <Layout>
    <Head>
      <meta property="og:title" content={`${data.title} | Eric Lau`} />
      <meta 
        name="description" 
        property="og:description" 
        content={data.dek} 
      />
      <title>{data.title}</title>
    </Head>
    <header className={styles.header}>
      <h1>{data.title}</h1>
      <time dateTime={data.date}>{data.date}</time>
    </header>
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
)

const getStaticPaths = async () => {
  const dir = path.resolve("./", "posts");
  const filenames = fs.readdirSync(dir);

  const paths = filenames.map((name) => {
    const f = path.join("./", "posts", name);
    return {
      params: { slug: matter.read(f).data.slug }
    };
  });

  return { paths, fallback: false }
}

const getStaticProps = ({ params }) => {
  const f = path.join("./", "posts", `${params.slug}.md`);
  const m = matter.read(f);

  const converter = new Converter();
  const html = converter.makeHtml(m.content);

  return { props: { data: m.data, content: html } };
}

export { getStaticPaths, getStaticProps };
export default Post;
