import { Box, Container, Grid, Text, GridItem } from '@chakra-ui/react'
import Image from "next/image"

const Comments = ({ data }) => {

  return <Box pt={{ base: 8, md: 8, lg: 8 }} pb={{ base: 0, md: 8, lg: 8 }}>
    <Container maxW={{
      base: "container.sm",
      lg: "1100px",

    }}>
      <Grid templateColumns="repeat(6, 1fr)" gap={{ base: 5, md: 20, lg: 100 }}>
        {data.map((item, i) => (
          <GridItem key={`ci-${i}`} colSpan={{ base: 6, lg: 3 }} pt={{ base: 10, md: 10, lg: 0 }} pb={{ base: 10, md: 10, lg: 0 }}>
            <Box
              display="flex"
              flexDirection="column"
              pl={10}
              pr={10}
              pt={6}
              pb={6}
              justifyContent="space-between"
              height="100%"
              position="relative"
              background="linear-gradient(321.83deg, rgba(255, 255, 255, 0) -15.76%, rgba(255, 255, 255, 0.15) 56.72%)"
              // backdropFilter="blur(42px)"
              borderWidth={2}
              borderStyle="solid"
              borderColor="dark.800"
              borderRadius="64px 14px 0px 26px"
            >
              <Text fontWeight="500" fontSize={{ base: "sm", md: "lg", lg: "lg" }}>
                {item.comment}
              </Text>
              <Box pr={{ base: 20, lg: 0 }}>
                <Box mt="6" mb="6" width="30%" height="1px" background="white"></Box>
                <Text fontWeight="700" fontSize={{ base: "sm", md: "lg", lg: "lg" }} mb="1">
                  {item.author}
                </Text>
                <Text fontWeight="300" fontSize={{ base: "sm", md: "lg", lg: "lg" }}>
                  {item.role}
                </Text>
              </Box>
              <Box
                width="114px"
                height="114px"
                borderRadius="50%"
                position="absolute"
                right="-10px"
                bottom="-30px"
                overflow="hidden"
                borderWidth={3}
                borderStyle="solid"
                borderColor="dark.800"
              >
                <Image
                  width={114}
                  height={114}
                  src={`/_img/${item.img}`}></Image>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  </Box>
}

export default Comments;
