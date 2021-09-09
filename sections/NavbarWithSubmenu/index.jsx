import { Box, Container, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

const App = () => {
  return (
    <Box as="header" pt={{ lg: 16, md: 4, base: 4 }} position="relative" zIndex="10">
      <Container maxW={{
        base: "container.sm",
        lg: "container.xl",

      }}>
        <Box
          as="nav"
          aria-label="Main navigation"
        >
          <NavContent.Mobile
            display={{
              base: 'flex',
              lg: 'none',
            }}
          />
          <NavContent.Desktop
            display={{
              base: 'none',
              lg: 'flex',
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default App;
