import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import Quote from "../sections/Quote"
import FilmMakers from "../sections/FilmMakers"
import CTA from "../sections/CTA"

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
      <FilmMakers data={page.filmmakers}/>
      <Box pt={10} pb={10}><CTA data={page.CtaChannelBuyers}/></Box>
      <Box pt={{ base: 10, md: 10, lg: 10 }} pb={{ base: 10, md: 10, lg: 10}}><CTA data={page.stayInTouch}/></Box>
      <Box pt={10} pb={10}><CTA data={page.distributors}/></Box>
    </>
  )
}

export default Home;
