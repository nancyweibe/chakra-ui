import { Box, Container, Grid, Text, GridItem, Heading } from '@chakra-ui/react'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

const Carousel = ({ data }) => {

  const { title, description, posters } = data

  const options = {
    modules: [FreeMode],
    spaceBetween: 14,
    freeMode: {
      enabled: true,
    },
    loop: false,
    slidesPerView: 'auto',
  }

  return <Box
    w="100%"
    bg="cover.300"
    position="relative"
    pt={{ base: 16, md: 16, lg: 16 }}
    pb={{ base: 16, md: 32, lg: 32 }}
    pl={{ base: 0, md: 0, lg: 0 }}
    pr={{ base: 0, md: 0, lg: 0 }}
  >
    <Box
      position="absolute"
      bg="linear-gradient(270.47deg, rgba(78, 146, 249, 0) 0.35%, rgba(78, 146, 249, 0.0704) 37.9%, rgba(195, 129, 219, 0.1072) 70.1%, rgba(195, 129, 219, 0) 97.63%)"
      top="0"
      left="0"
      w="100%"
      h="100%"
    >
    </Box>
    <Box w="100%" position="relative" zIndex="2">
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        fontWeight="black"
        pl={2}
        pr={2}
        mx={{ base: "0", md: "auto", lg: "auto" }}
        color="primary.500"
        mb={{ base: 5, md: 5, lg: 5 }}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </Heading>
      <Text
        maxW={{ base: "550px", md: "510px", lg: "510px" }}
        textAlign="center"
        fontWeight="400"
        pl={2}
        pr={2}
        color="primary.500"
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        mx="auto"
      >
        {description}
      </Text>
      <Box mt={20} position="relative"
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "100px",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
          bg: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0.32%, rgba(0, 0, 0, 0.41) 74.24%)"
        }}
        _before={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          width: "100px",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
          bg: "linear-gradient(270deg, rgba(0, 0, 0, 0.41) 0%, rgba(0, 0, 0, 0) 74%)"
        }}
      >
        <Swiper onSwiper={(swiper) => { setTimeout(() => { swiper.setTranslate(-100) }, 300) }} {...options}>
          {posters.map((item, i) => (
            <SwiperSlide style={{ width: 'auto' }} key={`ci-${i}`}>
              <Box borderRadius="20px" overflow="hidden" width={250}>
                <Image
                  width={220}
                  height={293}
                  objectFit="cover"
                  layout="responsive"
                  src={`/_img/${item.img}`}
                  alt={`${item.alt}`}
                />
                <Box
                  py="6"
                  bg="linear-gradient(170.11deg, #111827 22.09%, #1A237E 226.92%)"
                >
                  <Text whiteSpace="no-wrap" overflow="hidden" textOverflow="elipses" fontSize={{ base: "lg", md: "xl", lg: "2xl" }} align="center" color="white">{item.name}</Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  </Box>
}

export default Carousel;
