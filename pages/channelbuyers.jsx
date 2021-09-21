import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import appConfig from "../configs/appConfig"
import Hero from "../sections/Hero"
import ChannelB from "../sections/ChannelBuyers"
import Columns from "../sections/Columns"
import Carousel from "../sections/Carousel"
import StreamingChannel from "../sections/StreamingChannel"
import Faq from "../sections/Faq"
import Footer from "../sections/Footer"

const ChannelBuyers = ({ page }) => {

  return (
    <>
      <Head>
        <title>Filmhub, the #1 Film Distribution Platform</title>
        <meta property="og:description" content="Empower filmmakers to direct distribute their films around the world."></meta>
        <meta name="description" content="Empower filmmakers to direct distribute their films around the world."></meta>
        <link rel="icon" href="/_img/favicon.ico" />
      </Head>
      <Box background="linear-gradient(170.11deg, #111827 22.09%, #1A237E 226.92%)">
        <Box position="relative" zIndex={1}>
          <Hero data={page.hero} />
          <ChannelB data={page.channelBuyers}/>
          <Columns data={page.columns}/>
          <Carousel data={page.howItWorks}/>
          <StreamingChannel data={page.streamingChannel}/>
          <Faq data={page.faq}/>
          <Footer data={appConfig.footer} />
        </Box>
      </Box>
    </>
  )
}

export default ChannelBuyers
