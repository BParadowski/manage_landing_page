import "../styles/globals.scss";
import "../styles/reset.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
