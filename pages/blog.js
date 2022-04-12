import Head from "next/head";
import Layout from "../components/layout";

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
  </Layout>
);

export default Blog;
