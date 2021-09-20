import { Box, Container, Grid, GridItem, Heading, List, ListItem, UnorderedList } from '@chakra-ui/react'
import Image from "next/image"
import Icon from "../../components/Icon"
import Link from "../../components/Link"

const Comments = ({ data }) => {

  const { title, btnLabel, button, columns } = data

  return <Box
    position="relative"
    pt={{ base: 16, md: 32, lg: 32 }}
  >
    <Box position="absolute" w="100%" h="100%" minH="575px" top="0" left="0">
      <Box
        h="575px"
        bg="url(/_img/bg-2.png), linear-gradient(170.11deg, #111827 22.09%, #1A237E 166.11%, rgba(26, 35, 126, 0) 226.92%)"
        backgroundRepeat="no-repeat, no-repeat"
        backgroundSize="2313px 950px, 100% 100%"
        backgroundPosition={{base: "top -200px left 0px, center center", lg: "top -200px center, center center"}}
        pt={{ base: 32, md: 32, lg: 32 }}
      >
      </Box>
      <Box h="calc(100% - 575px)" bg="cover.300">
      </Box>
    </Box>
    <Box position="relative" zIndex="2">
      <Heading
        as="h2"
        textAlign="center"
        maxW={{ base: "545px", md: "545px", lg: "545px" }}
        fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
        fontWeight="black"
        pl={2}
        pr={2}
        mx={{ base: "0", md: "auto", lg: "auto" }}
        color="white"
        mb={{ base: 10, md: 20, lg: 20 }}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </Heading>
      <Container maxW={{
        base: "container.sm",
        lg: "1100px",

      }}>
        <Grid pl={{base: 3, lg: 0}} pr={{base: 3, lg: 0}} templateColumns="repeat(6, 1fr)" gap={{ base: 0, md: 0, lg: 10 }}>
          {columns.map((item, i) => (
            <GridItem key={`ci-${i}`} colSpan={{ base: 6, lg: 3 }} pt={{ base: 6, md: 10, lg: 0 }} pb={{ base: 6, md: 10, lg: 0 }}>
              <Box
                position="relative"
                zIndex={3}
                h="100%"
                background="rgba(244, 247, 250, 0.2)"
                // backdropFilter="blur(30px)"
                borderRadius="40px"
                border="2px solid rgba(255, 255, 255, 0.6)"
                boxShadow="0px 21px 32px rgba(0, 0, 0, 0.06)"
                p={{ base: 4, md: 4, lg: 4 }}
              >
                <Box
                  borderRadius="30px"
                  bg="white"
                  h="100%"
                  p={{ base: 8, md: 8, lg: 8 }}
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      width={{base: "57px", lg: "93px"}}
                      height={{base: "57px", lg: "93px"}}
                    >
                      <Image
                        width={93}
                        height={93}
                        src={`/_img/${item.img}`}>
                      </Image>
                    </Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", md: "3xl", lg: "3xl" }}
                      fontWeight="700"
                      ml={10}
                      textTransform="uppercase"
                      color="primary.500"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Heading>
                  </Box>
                  <Box mt={10} pr={{ base: 0, lg: 0 }}>
                    <List spacing={3}>
                      {item.list.map((Litem, i) => (
                        <ListItem mb={6} fontSize={{ base: "md", lg: "lg", md: "lg" }} color="primary.500" key={`sri-${i}`}>
                          <Box display="flex" alignItems="flex-start">
                            <Box mt={1} mr={5}><Icon variant="allow" /></Box>
                            {Litem.name}
                          </Box>
                          {Litem.list &&
                            <List mt={5} listStyle="square" spacing={3} pl={10}>
                              {Litem.list.map((Litm, i) => (
                                <ListItem fontSize={{ base: "md", lg: "lg", md: "lg" }} color="primary.500" key={`sti-${i}`}>
                                  <Box display="flex" alignItems="flex-start">
                                    <Box fontSize="8px" mt="8px" mr={5}><Icon variant="dot" /></Box>
                                    {Litm}
                                  </Box>
                                </ListItem>
                              ))}
                            </List>
                          }
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="black"
          mx={{ base: "0", md: "auto", lg: "auto" }}
          color="primary.500"
          pt={{ base: 10, md: 20, lg: 20 }}
          dangerouslySetInnerHTML={{ __html: btnLabel }}
        >
        </Heading>
        <Box pb={{base:16, lg: 32}} display="flex" justifyContent="center" mt={5} >
          <Link width={{ base: "auto", md: "auto", lg: "auto" }} type="button" colorScheme={button.variant} href={button.link}>{button.name}</Link>
        </Box>
      </Container>
    </Box>
  </Box>
}

export default Comments;
