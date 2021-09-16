import { Box, Grid, GridItem, Container, Heading, Text } from '@chakra-ui/react'
import Link from "../../components/Link"
import Image from "next/image"


const Hero = ({ data }) => {

  const { button, description, title, img, imgAlt } = data

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
              maxW={{ base: "16rem", md: "27rem", lg: "27rem" }}
              lineHeight="1.25"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </Heading>
            <Text fontSize={{ base: "sm", md: "2xl", lg: "2xl" }} mt="4" maxW={{ base: "270px", md: "430px", lg: "430px" }}>
              {description}
            </Text>
            <Box display="flex" alignItems="center" flexDirection={{ base: "column", lg: "row" }} mt={10} >
              <Link width={{ base: "100%", lg: "auto" }} type="button" variant="primary-effect" href={button.link}>{button.name}</Link>
              <Text fontSize="sm" ml={{ base: 0, lg: 5 }} mt={{ base: 5, lg: 0 }}>{button.label}</Text>
              <Link display={{
                base: 'flex',
                md: 'none',
              }} as="a" type="button" href="https://app.filmhub.com/login" variant="outline-grey" w="full" mt="5">
                Sign In
              </Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem h={{base:260, md:450, lg:510}} position="relative" mt={{ base: 20, lg: 0 }} colSpan={{ base: 6, lg: 3 }} textAlign="right" w="100%">
          <Image layout='fill' objectFit='contain' src={`/img/${img}`} alt={imgAlt} />
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default Hero;
