import { Box, Container, Heading, Text, Grid, GridItem } from '@chakra-ui/react'
import Icon from "../../components/Icon"
import styles from './animation.module.scss'
import Image from "next/image"

const FilmMakers = ({ data }) => {

  const { description, list, comments } = data

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

  return <Box bg="cover.300" position="relative">
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
    <Box
      transform={{ base: "translateY(-300px)", md: "translateY(-300px)", lg: "translateY(-200px)" }}
      w={{ base: "calc(100% - 20px)", md: "calc(100% - 50px)", lg: "calc(100% - 200px)" }}
      ml={{ base: "10px", md: "25px", lg: "100px" }}
      position="relative"
      zIndex={3}
      background="rgba(244, 247, 250, 0.1)"
      backdropFilter="blur(30px)"
      borderRadius="60px"
      boxShadow="0px 18px 52px rgba(0, 0, 0, 0.03)"
      p={{ base: 4, md: 4, lg: 7 }}
    >
      <Box
        borderRadius="40px"
        bg="cover.300"
        pt={{ base: 10, md: 24, lg: 32 }}
        pb={{ base: 10, md: 24, lg: 32 }}
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
                  base: '260px',
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
    <Box
      mt={{ base: "-300px", md: "-300px", lg: "-200px" }}
      pt={{ base: "50px", md: "110px", lg: "110px" }}
      pb={{ base: "50px", md: "110px", lg: "110px" }}
      w="100%"
      position="relative"
      zIndex="2"
    >
      <Container maxW={{
        base: "container.sm",
        lg: "container.lg",
      }}>
        <Grid templateColumns="repeat(6, 1fr)" gap={{ base: 5, md: 20, lg: 100 }}>
          {comments.map((item, i) => (
            <GridItem
              key={`ci-${i}`}
              colSpan={{ base: 6, md: 6, lg: 3 }}
              pt={{ base: 5, md: 10, lg: 0 }}
              pb={{ base: 5, md: 10, lg: 0 }}
              pl={{ base: 5, md: 0, lg: 0 }}
              pr={{ base: 5, md: 0, lg: 0 }}
            >
              <Box
                display="flex"
                flexDirection="column"
                pl={6}
                pr={6}
                pt={10}
                pb={10}
                justifyContent="space-between"
                height="100%"
                position="relative"
                background="linear-gradient(294.2deg, rgba(255, 255, 255, 0) -4.52%, rgba(255, 255, 255, 0.425) 58.51%)"
                background="linear-gradient(321.83deg, rgba(255, 255, 255, 0) -15.76%, rgba(255, 255, 255, 0.15) 56.72%)"
                // backdropFilter="blur(42px)"
                borderWidth={2}
                borderStyle="solid"
                borderColor="white"
                borderRadius="26px"
                color="primary.500"
              >
                <Box
                  position="absolute"
                  top="-32px"
                  right="-20px"
                  color="cover.500"
                  fontSize="64px"
                  transformOrigin="center center"
                  transform="rotate(-180deg)"
                >
                  <Icon variant="quote" />
                </Box>
                <Text fontWeight="500" fontSize={{ base: "sm", md: "lg", lg: "lg" }}>
                  "{item.comment}"
                </Text>
                <Box mt={6}>
                  <Grid templateColumns="repeat(6, 1fr)" gap={{ base: 5, md: 20, lg: 100 }} gap={2}>
                    <GridItem colSpan={{ base: 6, lg: 3 }}>
                      <Text fontWeight="700" fontSize={{ base: "sm", md: "lg", lg: "lg" }} mb="1">
                        {item.author}
                      </Text>
                      <Text fontWeight="300" fontSize={{ base: "sm", md: "lg", lg: "lg" }}>
                        {item.role}
                      </Text>
                    </GridItem>
                    <GridItem display="flex" alignItems="flex-end" colSpan={{ base: 6, lg: 3 }}>
                      <Box
                        width="104px"
                        height="33px"
                        ml="auto"
                      >
                        <Image
                          width={104}
                          height={33}
                          src={`/_img/${item.img}`}></Image>
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  </Box>
}

export default FilmMakers;
