import { Head, Html, Main, NextScript } from 'next/document'

function AppDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content='Jedyny oficjalny serwis internetowy Studenckiego Koła Naukowego Psychoterapii "Dialog" działającego przy Wydziale Psychologii Uniwersytetu Warszawskiego.'
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-serif">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default AppDocument
