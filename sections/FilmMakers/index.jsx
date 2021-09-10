import { Box, Container, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import Link from "../../components/Link"

const FilmMakers = ({ data }) => {

  const { title, description, button, list } = data

  return <Box pt={{ base: 16, md: 32, lg: 40 }} pb={{ base: 16, md: 32, lg: 40 }}>
    <Container maxW={{
      base: "container.sm",
      lg: "container.xl",

    }}>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 6, lg: 2 }} display="flex" alignItems="center" justifyContent={{ base: "flex-start", md: "center", lg: "flex-start" }} w="100%" h="100%">
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
              fontWeight="900"
              color="brand.500"
              textAlign={{ base: "left", md: "center", lg: "left" }}
              mx="auto"
              lineHeight="1.25"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </Heading>
            <Text textAlign={{ base: "left", md: "center", lg: "left" }} maxW={{ base: "320px", md: "330pxpx", lg: "330px" }} fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              {description}
            </Text>
            <Box display="flex" justifyContent={{base: "flex-start", md: "center", lg: "flex-start"}}>
              <Link mt={{ base: 10, md: 14, lg: 14 }} as="a" type="button" colorScheme="brand" href={button.link}>{button.name}</Link>
            </Box>
          </Box>
        </GridItem>
        <GridItem mt={{ base: 10, md: 20, lg: 0 }} colSpan={{ base: 6, lg: 4 }} textAlign="right" w="100%" h="100%">
          <Grid templateColumns="repeat(12, 1fr)" gap={6}>
            {list.map((item, i) => (
              <GridItem key={`fmi-${i}`} colSpan={{ base: 4, md: 3, lg: 3 }} w="100%" h="100%">
                <Box display="flex" alignItems="center" justifyContent="center" borderWidth="2px" borderStyle="solid" borderColor="cover.200" borderRadius={10} w="100%" height={{base: "80px", md: "90px", lg: "100px"}} bg="cover.100">
                  <Image maxW="85%" src={`/img/${item.img}`} />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default FilmMakers;
