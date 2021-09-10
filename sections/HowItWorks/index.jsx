import { Box, Container, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import Link from "../../components/Link"

const HowItWorks = ({ data }) => {

  const { title, list, img, button } = data

  return <Box pt={{ base: 0, md: 0, lg: 16 }} pb={{ base: 0, md: 0, lg: 8 }}>
    <Container maxW={{
      base: "container.lg",
      lg: "1100px",

    }}>
      <Heading
        as="h2"
        fontSize={{ base: "5xl", md: "5xl", lg: "5xl" }}
        fontWeight="900"
        mx="auto"
        textAlign="center"
        lineHeight="1.25"
        color="brand.500"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </Heading>
      <Box display={{ base: "none", md: "block", lg: "block" }} textAlign="center">
        <Link mt={{ base: 6, md: 6, lg: 6 }} mb={{ base: 6, md: 6, lg: 6 }} as="a" type="button" colorScheme="brand" href={button.link}>{button.name}</Link>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={{ base: 5, md: 20, lg: 100 }}>
        <GridItem colSpan={{ base: 6, md: 3, lg: 3 }}>
          {list.map((item, i) => (
            <Box
              borderStyle="solid"
              borderWidth="2px"
              borderRadius="44px 0px 0px 12px"
              borderColor="dark.800"
              display="flex"
              borderRight="none"
              alignItems="center"
              mt={10}
              mb={10}
              pt={5}
              pb={5}
              pl={10}
              pr={10}
            >
              <Image w={71} mr={10} src={`/img/${item.img}`} />
              <Box>
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "lg", lg: "lg" }}
                  fontWeight="bold"
                  maxW={{ base: "300px", md: "900px", lg: "900px" }}
                  mx="auto"
                  lineHeight="1.25"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                >
                </Heading>
                <Text fontWeight="400" maxW={{ base: "220", lg: "220" }} fontSize={{ base: "lg", md: "lg", lg: "lg" }} mt="4">
                  {item.description}
                </Text>
              </Box>
            </Box>
          ))}
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 3, lg: 3 }}
          display="flex"
          alignItems="center"
          flexDirection={{base: "column", lg: "row"}}
        >
          <Box w="100%" display={{ base: "inline-flex", md: "none", lg: "none" }} textAlign="center">
            <Link w="100%" mt={{ base: 0, md: 0, lg: 0 }} mb={{ base: 6, md: 6, lg: 6 }} as="a" type="button" colorScheme="brand" href={button.link}>{button.name}</Link>
          </Box>
          <Image w="100%" mx="auto" src={`/img/${img}`} />
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default HowItWorks;
