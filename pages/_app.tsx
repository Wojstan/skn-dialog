import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <title>SKN Dialog</title>
        <meta
          name="description"
          content='Jedyny oficjalny serwis internetowy Studenckiego Koła Naukowego Psychoterapii "Dialog" działającego przy Wydziale Psychologii Uniwersytetu Warszawskiego.'
        />
        <link rel="shortcut icon" href="/img/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
