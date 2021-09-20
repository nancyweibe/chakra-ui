import { Box, Container, Grid, Text, GridItem, Heading } from '@chakra-ui/react'
import Image from "next/image"

const Columns = ({ data }) => {

  const { title, list } = data

  return <Box
    bg="cover.300"
    pt={{ base: 16, md: 16, lg: 16 }}
    pb={{ base: 12, md: 12, lg: 16 }}
    pl={{ base: 8, md: 0, lg: 0 }}
    pr={{ base: 8, md: 0, lg: 0 }}
  >
    <Container maxW={{
      base: "container.sm",
      lg: "container.lg",

    }}>
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        fontWeight="black"
        mx={{ base: "0", md: "auto", lg: "auto" }}
        color="primary.500"
        mb={{ base: 20, md: 20, lg: 20 }}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: 10, lg: 20,  xl: 100 }}>
        {list.map((item, i) => (
          <GridItem key={`cfi-${i}`} colSpan={{ base: 12, md: 6, lg: 4 }}>
            <Box 
            maxW={{base: "310px", md: "310px", lg: "310px"}} 
            color="primary.500"
            mb={{ base: 8, md: 8, lg: 0 }}
            >
              <Box mb={5}>
                <Image
                  width={71}
                  height={71}
                  src={`/_img/${item.img}`}>
                </Image>
              </Box>
              <Heading
                as="h3"
                lineHeight="1.3"
                fontWeight="900"
                mb={4}
                fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
              >
                {item.title}
              </Heading>
              <Text fontWeight="400" fontSize={{ base: "lg", md: "lg", lg: "xl" }}>
                {item.description}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  </Box>
}

export default Columns;
