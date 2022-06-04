import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import getPageTitle from "../utils/getPageTitle";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <SSRProvider>
      <Head>
        <title>SKN Dialog - {getPageTitle(pathname)}</title>
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
