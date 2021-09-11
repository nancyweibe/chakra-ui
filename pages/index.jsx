import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import Quote from "../sections/Quote"
import FilmMakers from "../sections/FilmMakers"
import CTA from "../sections/CTA"
import Comments from "../sections/Comments"
import HowItWorks from "../sections/HowItWorks"
import Features from "../sections/Features"
import Footer from "../sections/Footer"
import Bg from "../sections/Bg"

const Home = ({ page, scrollBar }) => {

  return (
    <>
      <Head>
        <title>{appConfig.projectName} - {page.title}</title>
        <meta property="og:description" content={page.description}></meta>
        <meta name="description" content={page.description}></meta>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Bg scrollBar={scrollBar} data={appConfig.bg} />
      <Box position="relative" zIndex={1}>
        <Hero data={page.hero} />
        <Quote data={page.quote} />
        <FilmMakers data={page.filmmakers} />
        <Box pt={10} pb={10}><CTA data={page.CtaChannelBuyers} /></Box>
        <Box pt={{ base: 0, md: 0, lg: 10 }} pb={{ base: 0, md: 0, lg: 10 }}><HowItWorks data={page.howItWorks} /></Box>
        <Box pt={{ base: 0, md: 10, lg: 10 }} pb={{ base: 0, md: 16, lg: 32 }}><Comments data={page.comments} /></Box>
        <Box pt={{ base: 10, md: 10, lg: 10 }} pb={{ base: 0, md: 10, lg: 10 }}><CTA data={page.stayInTouch} /></Box>
        <Box pt={{ base: 0, md: 0, lg: 10 }} pb={{ base: 0, md: 0, lg: 10 }}><Features data={page.features} /></Box>
        <Box pt={10} pb={{ base: 16, lg: 32 }}><CTA data={page.distributors} /></Box>
        <Footer data={appConfig.footer} />
      </Box>
    </>
  )
}

export default Home;
