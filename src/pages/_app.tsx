import '../styles/globals.css'
import Head from 'next/head'
import { FunctionComponent} from 'react'

const siteName = `EndRacismKC`
const description = `There is no justice when it comes to racist mascots.`
const url = `https://endracismkc.org`
const previewImage = `https://endracismkc.org/images/tomahawk.jpg`

const App: FunctionComponent<{
  Component,
  pageProps,
}> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{siteName}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={previewImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={description} />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
