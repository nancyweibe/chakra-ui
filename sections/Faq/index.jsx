import { Box, Container, Grid, Text, GridItem, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, MinusIcon, AddIcon } from '@chakra-ui/react'
import Image from "next/image"
import Icon from "../../components/Icon"

const Faq = ({ data }) => {

  const { list, title, img } = data

  return <Box
    pt={{ base: 16, md: 32, lg: 32 }}
    pb={{ base: 16, md: 32, lg: 32 }}
    backgroundColor="cover.300"
    overflow="hidden"
    position="relative"
    backgroundImage="linear-gradient(270.47deg, rgba(78, 146, 249, 0) 0.35%, rgba(78, 146, 249, 0.0704) 37.9%, rgba(195, 129, 219, 0.1072) 70.1%, rgba(195, 129, 219, 0) 97.63%)"
  >
    <Container position="relative" zIndex="2" maxW={{
      base: "container.sm",
      lg: "container.xl",

    }}>
      <Grid pl={{ base: 3, lg: 0 }} pr={{ base: 3, lg: 0 }} templateColumns="repeat(12, 1fr)" gap={{ base: 5, md: 2, lg: 100 }}>
        <GridItem
          colSpan={{ base: 12, md: 12, lg: 8 }}
          pt={{ base: 10, md: 10, lg: 0 }}
          pb={{ base: 10, md: 10, lg: 0 }}
          order={{ base: 2, lg: 1 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
            fontWeight="black"
            pl={{ base: 8, lg: 0 }}
            color="secondary.500"
            mb={{ base: 10, md: 10, lg: 10 }}
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </Heading>

          <Accordion allowToggle defaultIndex={[0]}>
            {list.map((item, i) => (
              <AccordionItem borderColor="dark.400" key={`fqi-${i}`}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        pl={0}
                        pt={{ base: 3, lg: 5 }}
                        pb={{ base: 3, lg: 5 }}
                        _hover={{ bg: "transparent" }}
                        _focus={{ outline: "none" }}
                      >
                        {isExpanded ? (
                          <Box fontSize="14px" color="secondary.500" mr={5}>
                            <Icon variant="minus" />
                          </Box>

                        ) : (
                          <Box fontSize="14px" color="secondary.500" mr={5}>
                            <Icon variant="plus" />
                          </Box>
                        )}
                        <Box
                          color="primary.500"
                          fontWeight="700"
                          fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
                          flex="1"
                          textAlign="left"
                          _hover={{ color: "secondary.500" }}
                          transition="color 300ms ease"
                        >
                          {item.question}
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      pl={9}
                      pt={0}
                      className="faqSect"
                      color="primary.500"
                      fontWeight="400"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                      fontSize={{ base: "sm", md: "sm", lg: "lg" }}
                    >
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          colSpan={{ base: 12, md: 12, lg: 4 }}
          order={{ base: 1, lg: 2 }}
        >
          <Box
            width={{ base: "100%", lg: "771px" }}
            height={{ base: "auto", lg: "800px" }}
            flexShrink="0"
            marginLeft={{ base: 0, md: 0, lg: "-200px", xl: 0 }}
          >
            <Image
              width={771}
              height={800}
              src={`/_img/${img}`}></Image>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default Faq;
