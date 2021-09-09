import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import Quote from "../sections/Quote"

const Home = ({ page }) => {

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <meta property="og:description" content={page.description}></meta>
        <meta name="description" content={page.description}></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Hero data={page.hero}/>
      <Quote data={page.quote}/>
    </>
  )
}

export default Home;
