import { Box, Container, Heading, Text, Image, Grid, GridItem, Stack, RadioGroup, Radio, Button, Input } from '@chakra-ui/react'
import Link from "../../components/Link"

const CTA = ({ data }) => {

  const { title, description, button, img1, img2, variant } = data

  const renderForm = () => {
    return (
        <form
          onSubmit={(e) => {
            e.preventDefault() // your subscribe logic here
          }}
        >
          <Box mt={10} mb={4}>
            <RadioGroup colorScheme="brand" defaultValue="filmmaker">
              <Stack justifyContent="center" alignItems="center" mx={{base: "auto", md:"0", lg: "0"}} direction={{base: "column", md:"row", lg: "row"}}>
                <Box w={{base: "260px", md: "auto", lg: "auto"}} pr={2} pl={2}><Radio value="filmmaker">Filmmaker</Radio> </Box>
                <Box w={{base: "260px", md: "auto", lg: "auto"}} pr={2} pl={2}><Radio value="channel buyer">Channel buyer</Radio> </Box>
                <Box w={{base: "260px", md: "auto", lg: "auto"}} pr={2} pl={2}><Radio value="distributor / sales agent">Distributor / Sales agent</Radio> </Box>
              </Stack>
            </RadioGroup>
          </Box>
          <Stack
            spacing="4"
            justifyContent="center"
            maxW="460px"
            mx="auto"
            mt={{base: 10, lg: 0}}
            pl={{base: 4, lg: 0}}
            pr={{base: 4, lg: 0}}
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Input variant="light" type="email" placeholder="Your email address" />
            <Button colorScheme="brand" px="10" type="submit">
              Subscribe
            </Button>
          </Stack>
        </form>
    )
  }

  const renderInner = () => {
    switch (variant) {
      case "violet":
      case "light":
        return <Box w="100%">
          <Heading
            as="h2"
            pl={{ base: 6, md: 6, lg: 0 }}
            pr={{ base: 6, md: 6, lg: 0 }}
            fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
            fontWeight={900}
            maxW={{ base: "400px", md: "500px", lg: "780px" }}
            mx="auto"
            textAlign="center"
            lineHeight="1.25"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </Heading>
          <Text
            maxW={{ base: "400px", md: "600px", lg: "780px" }}
            mx="auto"
            textAlign="center"
            fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}
            mt="4"
            pl={{ base: 6, md: 6, lg: 0 }}
            pr={{ base: 6, md: 6, lg: 0 }}
          >
            {description}
          </Text>
          <Box display="flex" justifyContent={{ base: "center", md: "center", lg: "center" }}>
            <Link mt={{ base: 10, md: 14, lg: 14 }} as="a" type="button" colorScheme="brand" href={button.link}>{button.name}</Link>
          </Box>
        </Box>

      case "light-form":
        return <Box w="100%" >
          <Heading
            as="h2"
            pl={{ base: 6, md: 6, lg: 0 }}
            pr={{ base: 6, md: 6, lg: 0 }}
            fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
            fontWeight={900}
            maxW={{ base: "400px", md: "500px", lg: "780px" }}
            mx="auto"
            textAlign="center"
            lineHeight="1.25"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </Heading>
          <Text
            maxW={{ base: "400px", md: "600px", lg: "780px" }}
            mx="auto"
            textAlign="center"
            fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}
            mt="4"
            pl={{ base: 6, md: 6, lg: 0 }}
            pr={{ base: 6, md: 6, lg: 0 }}
          >
            {description}
          </Text>
          {renderForm()}
        </Box>
    }
  }

  const renderContainer = () => {
    switch (variant) {
      case "violet":
        return <Box>
          <Container p={0} maxW={{
            base: "container.xl",
            md: "container.xl",
            lg: "container.xl",
          }}>
            <Box
              background="linear-gradient(270.27deg, rgba(178, 14, 202, 0.01) 4.48%, rgba(178, 14, 202, 0.45) 52.87%, rgba(178, 14, 202, 0) 97.38%)"
              backdropFilter="blur(42px)"
              borderRadius={{base: 0, md: 0, lg: "109px 31px"}}
              mt={{ base: 52, md: 32, lg: 0 }}
              mb={{ base: 52, md: 32, lg: 0 }}
              pt={{ base: 0, md: 0, lg: 32 }}
              pb={{ base: 0, md: 0, lg: 32 }}
            >
              <Box display={{ base: "block", md: "block", lg: "none" }} w="100%" h="2px" background="linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 100%);"></Box>
              <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem display="flex" alignItems="center" justifyContent={{ base: "center", md: "center", lg: "flex-start" }} colSpan={{ base: 12, md: 12, lg: 3 }}>
                  <Image
                    marginTop={{ base: "-120px", md: "-120px", lg: "0" }}
                    maxW="215px" src={`/img/${img1}`}
                    mb={{ base: 8, md: 16, lg: 0 }}
                  />
                </GridItem>
                <GridItem display="flex" alignItems="center" colSpan={{ base: 12, md: 12, lg: 6 }}>
                  {renderInner()}
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent={{ base: "center", md: "center", lg: "flex-end" }} colSpan={{ base: 12, md: 12, lg: 3 }}>
                  <Image mb={{ base: "-120px", md: "-120px", lg: "0" }} mt={{ base: 8, md: 16, lg: 0 }} maxW="215px" src={`/img/${img2}`} />
                </GridItem>
              </Grid>
              <Box display={{ base: "block", md: "block", lg: "none" }} w="100%" h="2px" background="linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 100%);"></Box>
            </Box>
          </Container>
        </Box>

      case "light":
        return <Box>
          <Container p={0} maxW={{
            base: "container.xl",
            md: "container.xl",
            lg: "container.xl",
          }}>
            <Box w="100%" h="2px" background="linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);"></Box>
            <Box
              background="linear-gradient(267.32deg, rgba(255, 255, 255, 0) 6.7%, rgba(255, 255, 255, 0.12) 57.75%, rgba(255, 255, 255, 0) 93.4%)"
              backdropFilter="blur(42px)"
              borderRadius={{base: 0, md: 0, lg: "109px 31px"}}
              pt={{ base: 16, md: 32, lg: 32 }}
              pb={{ base: 16, md: 32, lg: 32 }}
            >
              <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem display="flex" alignItems="center" colSpan={{ base: 12, md: 12, lg: 12 }}>
                  {renderInner()}
                </GridItem>
              </Grid>
            </Box>
            <Box w="100%" h="2px" background="linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);"></Box>
          </Container>
        </Box>

      case "light-form":
        return <Box mt={{ base: 52, md: 32, lg: 0 }} mb={{ base: 52, md: 32, lg: 0 }}>
          <Container p={0} maxW={{
            base: "container.xl",
            md: "container.xl",
            lg: "container.xl",
          }}>
            <Box w="100%" h="2px" background="linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);"></Box>
            <Box
              background="linear-gradient(267.32deg, rgba(255, 255, 255, 0) 6.7%, rgba(255, 255, 255, 0.12) 57.75%, rgba(255, 255, 255, 0) 93.4%)"
              backdropFilter="blur(42px)"
              borderRadius={{base: 0, md: 0, lg: "109px 31px"}}
              pt={{ base: 0, md: 0, lg: 32 }}
              pb={{ base: 0, md: 0, lg: 32 }}
            >
              <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                <GridItem display="flex" alignItems="center" justifyContent={{ base: "center", md: "center", lg: "flex-start" }} colSpan={{ base: 12, md: 12, lg: 3 }}>
                  <Image
                    marginTop={{ base: "-120px", md: "-120px", lg: "0" }}
                    maxW="215px" src={`/img/${img1}`}
                    mb={{ base: 8, md: 16, lg: 0 }}
                  />
                </GridItem>
                <GridItem display="flex" alignItems="center" colSpan={{ base: 12, md: 12, lg: 6 }}>
                  {renderInner()}
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent={{ base: "center", md: "center", lg: "flex-end" }} colSpan={{ base: 12, md: 12, lg: 3 }}>
                  <Image mb={{ base: "-120px", md: "-120px", lg: "0" }} mt={{ base: 8, md: 16, lg: 0 }} maxW="215px" src={`/img/${img2}`} />
                </GridItem>
              </Grid>
            </Box>
            <Box w="100%" h="2px" background="linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%);"></Box>
          </Container>
        </Box>
    }
  }

  return renderContainer()
}

export default CTA;
