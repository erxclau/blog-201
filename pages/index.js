import Head from "next/head";

import AppHead from "../components/head";

const Index = () => (
  <>
    <AppHead />
    <Head>
      <meta httpEquiv="refresh" content="0;URL='./home'" />
      <meta property="og:title" content="Eric Lau" />
      <meta
        name="description"
        property="og:description"
        content="Eric Lau's personal website"
      />
      <title>Eric Lau</title>
    </Head>
  </>
);

export default Index;
