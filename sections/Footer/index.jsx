import { useState } from 'react'
import { chakra, Box, Container, Heading, Text, Grid, GridItem, Input, Button } from '@chakra-ui/react'
import Icon from "../../components/Icon"
import Link from "../../components/Link"
import { postData } from "../../utils/"

const Footer = ({ data }) => {

  const { copyright, socialLinks, links, form, bottomLinks } = data
  const [isDone, setIsDone] = useState(false)
  const [isProcess, setIsProcess] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    setIsProcess(true)

    const formData = new FormData(e.target);

    postData('https://filmhub.com/.netlify/functions/list-signup', formData)
      .then(data => {
        setIsDone(true)
        setIsProcess(false)
      });
  }

  return <Box
    bg="black"
    pt={{ base: 8, md: 12, lg: 12 }}
    pb={{ base: 8, md: 12, lg: 12 }}>
    <Container maxW={{
      base: "container.sm",
      lg: "container.xl",

    }}>
      {/* <Box fontSize="164px" color="brand.500"><Icon variant="logo" /></Box> */}

      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={{ base: 5, md: 10, lg: 5 }}
        pt={5}
        pb={5}
      >
        <GridItem colSpan={{ base: 12, md: 8, lg: 8 }}>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 5, md: 10, lg: 5 }}
          >
            {links.map((section, i) => (
              <GridItem key={`sfi-${i}`} colSpan={{ base: 12, md: 12 / links.length, lg: 12 / links.length }}>
                <Box>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "lg", lg: "lg" }}
                    fontWeight="bold"
                    textTransform="uppercase"
                    color="brand.500"
                    lineHeight="1.25"
                    mb={3}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  >
                  </Heading>
                  {section.links.map((link, z) => (
                    <Box mb={1} key={`fli-${z}`}>
                      <Link
                        fontSize="sm"
                        color="white"
                        href={link.href}
                        transition="opacity 300ms ease"
                        _hover={{
                          opacity: 0.5
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4, lg: 4 }}>
          <Box>
            {form.title &&
              <Heading
                as="h3"
                fontSize={{ base: "lg", md: "lg", lg: "lg" }}
                fontWeight="bold"
                textTransform="uppercase"
                color="brand.500"
                lineHeight="1.25"
                mb={5}
                dangerouslySetInnerHTML={{ __html: form.title }}
              >
              </Heading>
            }
            {isDone ? <Text color="white">Thank you</Text> :
              <form onSubmit={onSubmit}>
                <Box
                  border="1px solid"
                  borderColor="rgba(255,255,255, 0.4)"
                  background="rgba(255,255,255, 0.2)"
                  borderRadius="25px"
                  paddingRight="10px"
                  display="flex"
                  alignItems="center"
                >
                  <Input variant="transparent" name="email" type="email" placeholder="Your email address" required />
                  <Button disabled={isDone || isProcess} variant="radialPrimary" type="submit">
                    <Icon variant="chevron-right" />
                  </Button>
                </Box>
              </form>
            }

          </Box>
        </GridItem>
      </Grid>

      <Grid
        marginTop={4}
        borderTop="1px solid white"
        templateColumns="repeat(12, 1fr)"
        gap={{ base: 5, md: 10, lg: 5 }}
        pt={5}
      >
        <GridItem colSpan={{ base: 12, md: 6, lg: 6 }}>
          <Box h="100%" display="flex" alignItems="center" justifyContent={{ base: "center", lg: "flex-start" }}>
            <Text mr={2} textAlign="center" fontWeight="500" fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              ©
            </Text>
            <Text mr={3} textAlign="center" fontWeight="400" fontSize={{ base: "sm", md: "md", lg: "md" }}>
              {copyright}
            </Text>
            {bottomLinks.map((link, i) => (
              <Link ml={2} type="regular-white" href={link.link} key={`lfi-${i}`}>{link.name}</Link>
            ))}
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 6, lg: 6 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", lg: "flex-end" }}
          >
            {socialLinks.map((social, i) => (
              <chakra.a
                display="flex"
                alignItems="center"
                justifyContent="center"
                w={50}
                h={50}
                href={social.href}
                key={`si-${i}`}
                borderRadius="50%"
                borderWidth="2px"
                cursor="pointer"
                borderColor="rgba(255, 255, 255, 0.3)"
                bg="rgba(255, 255, 255, 0.2)"
                transition="all 300ms ease"
                fontSize="24px"
                ml={{ base: "2", lg: "5" }}
                mr={{ base: "2", lg: "0" }}
                color="brand.500"
                _hover={{
                  bg: "rgba(255, 255, 255, 1)"
                }}
              >{social.icon}
              </chakra.a>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </Container>
  </Box>
}

export default Footer;
