import { Box, Grid, GridItem, Container, Heading, Text } from '@chakra-ui/react'
import Link from "../../components/Link"
import Image from "next/image"
import { PopupButton } from '@typeform/embed-react'

const Hero = ({ data }) => {

  const { button, description, title, img, imgAlt, variant, subTitle } = data

  const render = () => {
    switch (variant) {
      case "channelbuyers":
        return <Box
          bg="url(/_img/channelbuyers-bg.png)"
          backgroundPosition="center top 0"
          backgroundSize="2330px 1704px"
          backgroundRepeat="no-repeat"
          pt={{ base: 32, md: 60, lg: 80 }}
          pb={{ base: 80, md: 80, lg: 80 }}>
          <Container maxW={{
            base: "container.sm",
            lg: "container.xl",

          }}>
            <Grid templateColumns="repeat(6, 1fr)" gap={6}>
              <GridItem colSpan={6} w="100%">
                <Box width={{ base: "100%", md: "auto", lg: "auto" }} textAlign={{ base: "left", md: "center", lg: "center" }}>
                  <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
                    fontWeight="black"
                    maxW={{ base: "400px", md: "500px", lg: "900px" }}
                    lineHeight="1.25"
                    mx={{ base: "0", md: "auto", lg: "auto" }}
                    dangerouslySetInnerHTML={{ __html: title }}
                  >
                  </Heading>
                  <Text
                    fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                    mx={{ base: "0", md: "auto", lg: "auto" }}
                    mt="6"
                    fontWeight={500}
                    maxW={{ base: "270px", md: "360px", lg: "800px" }}>
                    {description}
                  </Text>
                  <Box display="flex" justifyContent="center" mt={10} >
                    {button.typeFormId ? <PopupButton id={button.typeFormId}><Link width={{ base: "100%", md: "auto", lg: "auto" }} type="button" colorScheme={button.variant} href={button.link}>{button.name}</Link></PopupButton> : <Link width={{ base: "100%", md: "auto", lg: "auto" }} type="button" colorScheme={button.variant} href={button.link}>{button.name}</Link>}
                  </Box>
                </Box>
                <Box w="100%" mt={{ base: 20, lg: 20 }} textAlign="center">
                  <Image width={717} height={591} src={`/_img/${img}`} alt={imgAlt} />
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      default:
        return <Box pt={{ base: 16, md: 32, lg: 32 }} pb={{ base: 16, md: 32, lg: 32 }}>
          <Container maxW={{
            base: "container.sm",
            lg: "container.xl",

          }}>
            <Grid templateColumns="repeat(6, 1fr)" gap={6}>
              <GridItem colSpan={{ base: 6, lg: 3 }} display="flex" alignItems="center" justifyContent={{ base: "flex-start", md: "center", lg: "flex-start" }} w="100%" h="100%">
                <Box width={{ base: "100%", md: "auto", lg: "auto" }} textAlign={{ base: "left", md: "center", lg: "left" }}>
                  <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
                    fontWeight="black"
                    maxW={{ base: "16rem", md: "28rem", lg: "28rem" }}
                    lineHeight="1.25"
                    dangerouslySetInnerHTML={{ __html: title }}
                  >
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "2xl", lg: "2xl" }} mt="4" maxW={{ base: "270px", md: "430px", lg: "430px" }}>
                    {description}
                  </Text>
                  <Box display="flex" alignItems="center" flexDirection={{ base: "column", lg: "row" }} mt={10} >
                    {button.typeFormId ? <PopupButton id={button.typeFormId}><Link width={{ base: "100%", lg: "auto" }} type="button" variant="primary-effect" href={button.link}>{button.name}</Link></PopupButton> : <Link width={{ base: "100%", lg: "auto" }} type="button" variant="primary-effect" href={button.link}>{button.name}</Link>}
                    <Text fontSize="sm" ml={{ base: 0, lg: 5 }} mt={{ base: 5, lg: 0 }}>{button.label}</Text>
                    <Link display={{
                      base: 'flex',
                      md: 'none',
                    }} as="a" type="button" href="https://app.filmhub.com/login" variant="outline-grey" w="full" mt="5">
                      Login
                    </Link>
                  </Box>
                </Box>
              </GridItem>
              <GridItem h={{ base: 260, md: 450, lg: 510 }} position="relative" mt={{ base: 20, lg: 0 }} colSpan={{ base: 6, lg: 3 }} textAlign="right" w="100%">
                <Image width={612} height={510} src={`/_img/${img}`} alt={imgAlt} />
              </GridItem>
            </Grid>
          </Container>
        </Box>
    }
  }

  return render()
}

export default Hero;
