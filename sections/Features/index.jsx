import { Box, Container, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react'
import Link from "../../components/Link"

const Features = ({ data }) => {

  const { title1, title2, list, description } = data

  return <Box pt={{ base: 0, md: 0, lg: 16 }} pb={{ base: 0, md: 0, lg: 8 }}>
    <Container maxW={{
      base: "container.sm",
      lg: "container.xl",
    }}>
      <Grid templateColumns="repeat(13, 1fr)" gap={{ base: 5, md: 10, lg: 20 }}>
        <GridItem
          display="flex"
          alignItems="center"
          colSpan={{ base: 13, md: 13, lg: 4 }}
        >
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
              fontWeight="900"
              lineHeight="1.25"
              color="col.200"
              dangerouslySetInnerHTML={{ __html: title1 }}
            >
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
              fontWeight="900"
              lineHeight="1.25"
              color="brand.500"
              dangerouslySetInnerHTML={{ __html: title2 }}
            >
            </Heading>
            <Text
              maxW={{ base: "270px", md: "270px", lg: "270px" }}
              fontSize={{ base: "sm", md: "lg", lg: "lg" }}
              mt="4"
              mb={{base: 10, lg: 0}}
            >
              {description}
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 13, md: 13, lg: 9 }}>
          <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: 10, lg: 5 }}>
            {list.map((item, i) => (
              <GridItem key={`fi-${i}`} colSpan={{ base: 12, md: 6, lg: 4 }}>
                <Box
                  borderStyle="solid"
                  borderWidth="2px"
                  borderRadius="44px 0px 0px 12px"
                  borderColor="col.100"
                  height="100%"
                  display="flex"
                  borderRight="none"
                  pt={5}
                  pb={5}
                  pl={5}
                  pr={{base: 5, lg: 0}}
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "lg", md: "lg", lg: "lg" }}
                      fontWeight="bold"
                      maxW={{ base: "300px", md: "900px", lg: "900px" }}
                      lineHeight="1.25"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    >
                    </Heading>
                    <Text fontWeight="300" maxW={{ base: "100%", lg: "240" }} fontSize={{ base: "lg", md: "lg", lg: "lg" }} mt="4">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            ))}
            <GridItem
              colSpan={{ base: 6, md: 3, lg: 3 }}
              display="flex"
              alignItems="center"
              flexDirection={{ base: "column", lg: "row" }}
            >
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default Features;
