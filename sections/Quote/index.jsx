import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Icon from "../../components/Icon"
import Image from "next/image"

const Quote = ({ data }) => {

  const { title, quote, img, imgAlt } = data

  return <Box pt={{ base: 8, md: 8, lg: 8 }} pb={{ base: 8, md: 8, lg: 8 }}>
    <Container maxW={{
      base: "container.sm",
      lg: "container.xl",

    }}>
      <Heading
        as="h2"
        fontSize={{ base: "lg", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        maxW={{ base: "300px", md: "900px", lg: "900px" }}
        mx="auto"
        textAlign="center"
        lineHeight="1.25"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </Heading>
      <Box
        mt={{ base: 8, md: 16, lg: 16 }}
        mb={{ base: 8, md: 16, lg: 16 }}
        display="flex"
        justifyContent="center"
        fontSize={{ base: "80px", md: "100px", lg: "144px" }}
        color="brand.500">
        <Icon variant="quote" />
      </Box>
      <Text textAlign="center" fontWeight="500" fontSize={{ base: "lg", md: "2xl", lg: "2xl" }} mt="4">
        {quote}
      </Text>
      <Box
        position="relative"
        mt={10}
        mx="auto"
        w="200px"
        h="60px"
      >
        <Image layout="fill" objectFit="contain" src={`/img/${img}`} alt={imgAlt} />
      </Box>
    </Container>
  </Box>
}

export default Quote;
