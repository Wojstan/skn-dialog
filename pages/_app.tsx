import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
