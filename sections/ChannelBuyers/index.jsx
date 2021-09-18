import { Box, Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react'
import Link from "../../components/Link"
import styles from './animation.module.scss'
import Image from "next/image"

const FilmMakers = ({ data }) => {

  const { description, list } = data

  const renderImgs = (k) => {
    return list.map((item, i) => (
      <GridItem key={`${k}mi-${i}`} colSpan={{ base: 4, md: 3, lg: 3 }} w="100%" h="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={10}
          w="100%"
          height={{ base: "80px", md: "90px", lg: "100px" }}
          bg="white"
        >
          <Box
            w="70%"
            h="60%"
            position="relative"
          >
            <Image
              layout="fill"
              objectFit="contain"
              alt={`${item.name}`}
              src={`/_img/${item.img}`}
            />
          </Box>
        </Box>
      </GridItem>
    ))
  }

  return <Box mt="-200px">
    <Box
      w="calc(100% - 200px)"
      ml="100px"
      mb="-600px"
      position="relative"
      zIndex={3}
      background="rgba(244, 247, 250, 0.1)"
      backdropFilter="blur(30px)"
      borderRadius="60px"
      boxShadow="0px 18px 52px rgba(0, 0, 0, 0.03)"
      p={7}
    >
      <Box
        borderRadius="40px"
        bg="cover.300"
        pt={{ base: 16, md: 32, lg: 32 }}
        pb={{ base: 16, md: 32, lg: 32 }}
      >
        <Container maxW={{
          base: "910px",
          lg: "910px",

        }}>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            <GridItem colSpan={6}>
              <Box mb={20}>
                <Text
                  textAlign={{ base: "center", md: "center", lg: "center" }}
                  maxW={{ base: "320px", md: "800px", lg: "910px" }}
                  mx="auto"
                  color="dark.900"
                  fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                  dangerouslySetInnerHTML={{ __html: description }}
                >
                </Text>
              </Box>
              <Box
                overflow="hidden"
                h={{
                  base: '360px',
                  md: '360px',
                }}
              >
                <Box className={`${styles.animation}`} w="100%" display="flex" flexWrap="wrap">
                  <Grid templateColumns="repeat(12, 1fr)" w="100%" gap={6}>
                    {renderImgs("f")}
                    {renderImgs("z")}
                    {renderImgs("j")}
                    {renderImgs("l")}
                  </Grid>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
    <Box bg="cover.300" position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        height="100%"
        bg="linear-gradient(270.12deg, rgba(195, 129, 219, 0) 1.85%, rgba(78, 146, 249, 0.112) 25.9%, rgba(78, 146, 249, 0.1184) 62.14%, rgba(195, 129, 219, 0) 96.91%)"
        backdropFilter="blur(117px)"
      >
      </Box>
      <Box minH="1200px" w="100%" position="relative" zIndex="2">

      </Box>
    </Box>
  </Box>
}

export default FilmMakers;
