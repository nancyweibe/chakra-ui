import { useState } from "react"
import { useRouter } from "next/router";
import { pages } from "../configs/pages/dynamic"
import { filterIt } from '../utils'
import ScrollBarWrapper from "../components/ScrollbarWrapper"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import Navbar from "../sections/NavbarWithSubmenu/index"
import themeShema from "../configs/theme"

import 'swiper/swiper.scss'
import 'swiper/components/lazy/lazy.scss'
import '../styles/global.scss'

const theme = extendTheme(themeShema)

function App({ Component, pageProps }) {
  const router = useRouter();
  const page = filterIt(pages, router.pathname, "link")[0]
  const [scrollBar, setScrollBar] = useState(null)

  return <ChakraProvider theme={theme}>
    <Navbar scrollBar={scrollBar}/>
    {/* <ScrollBarWrapper onInit={setScrollBar}> */}
      <Component {...pageProps} page={page} scrollBar={scrollBar} />
    {/* </ScrollBarWrapper> */}
  </ChakraProvider>
}

export default App
