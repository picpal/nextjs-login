import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "../styles/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
