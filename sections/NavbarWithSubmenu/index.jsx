import { useEffect, useState, useRef } from 'react'
import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

const App = ({scrollBar, page}) => {

  const [scrollTop, setScrollTop] = useState(0)
  const isCanDetect = useRef(true)
  const [w, setW] = useState(null)

  useEffect(() => {
    setW(window)
  }, [])

  useEffect(() => {

    if (scrollBar && window.innerWidth > 990) {

      scrollBar.scrollbar.addListener((status) => {

        if (true) {
          isCanDetect.current = false;
          setScrollTop(status.offset.y);

          const timer = setTimeout(() => {
            isCanDetect.current = true;
            clearTimeout(timer);
          }, 300)
        }
      });
    }else {
      window.addEventListener("scroll", onScroll)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
    }

  }, [scrollBar])

  const onScroll = () => {
    setScrollTop(window.scrollY);
  }

  const getW = () => {
    return w?.innerWidth > 990 ? 75 : 50
  }

  return (
    <Box
      as="header"
      pt={{ lg: scrollTop > getW() ? 0 : 16, base: 2 }}
      w="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex="10"
      bg={{base: "dark.900", lg:scrollTop > getW() ? "dark.900" : "transparent"}}
      transition="all 300ms ease"
    >
      <Container maxW={{
        base: "container.sm",
        lg: "container.xl",

      }}>
        <Box
          as="nav"
          aria-label="Main navigation"
        >
          <NavContent.Mobile
            page={page}
            display={{
              base: 'flex',
              lg: 'none',
            }}
          />
          <NavContent.Desktop
            page={page}
            display={{
              base: 'none',
              lg: 'flex',
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default App;
