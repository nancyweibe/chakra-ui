import { useEffect, useState, useRef } from "react"
import { Box, Container, Heading, Text, Image, Grid, GridItem, Stack, RadioGroup, Radio, Button, Input } from '@chakra-ui/react'
import Link from "../../components/Link"

const Bg = ({ data, scrollBar }) => {

  const [scrollTop, setScrollTop] = useState(0)
  const isCanDetect = useRef(true);

  useEffect(() => {

    if (scrollBar && window.innerWidth > 990) {

      scrollBar.scrollbar.addListener((status) => {

        if (true) {
          isCanDetect.current = false;
          setScrollTop(status.offset.y);

          const timer = setTimeout(() => {
            isCanDetect.current = true;
            clearTimeout(timer);
          }, 10)
        }
      });
    }

  }, [scrollBar])

  const renderCircle = (circle, i) => {
    switch (circle.variant) {
      default:
        return <Box
          key={`uiv-${i}`}
          w={circle.width}
          h={circle.width}
          position="absolute"
          top={`${circle.t}%`}
          left={circle.l ? `${circle.l}%` : "auto"}
          right={circle.r ? `${circle.r}%` : "auto"}
          background={circle.c}
          borderRadius="50%"
          opacity={circle.o ? circle.o : 0.3}
          filter="blur(70px)">
        </Box>
    }
  }

  return <Box w="100vw" h="100%" overflow="hidden" position="absolute" left={0} top={0}>
    <Box w="100vw" h="100%" position="absolute" left={0} top={0} transform={`translateY(-${scrollTop}px)`}>
      {data.map((circle, i) => (
        renderCircle(circle, i)
      ))}
    </Box>
  </Box>
}

export default Bg;
