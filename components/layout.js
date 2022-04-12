import Head from "./head";

const Layout = ({ children }) => (
  <>
    <Head />
    <main role="main">
      {children}
      <footer>Made with 💜 by Eric Lau</footer>
    </main>
  </>
)

export default Layout;
