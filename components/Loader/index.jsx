import { Box } from '@chakra-ui/react'
import * as React from 'react'

const Loader = (props) => {
  const { isLoaded } = props

  return <Box
    opacity={isLoaded ? 0 : 1}
    pointerEvents="none"
    transition="opacity 300ms ease"
    bg="dark.900"
    zIndex={999}
    position="fixed"
    top={0}
    left={0}
    w="100vw"
    h="100vh"
  >
  </Box>

}

export default Loader
