import { chakra, Box, useColorModeValue as mode, Button } from '@chakra-ui/react'
import * as React from 'react'
import LinkComp from 'next/link'

const Link = (props) => {
  const { active, children, type, href, ...rest } = props

  switch (type) {
    default:
      return <LinkComp href={href}>
        <chakra.a cursor="pointer" {...rest}>{children}</chakra.a>
      </LinkComp>
    case "button":
      return <LinkComp href={href}>
        <Button {...rest}>
          <span>{children}</span>
        </Button>
      </LinkComp>
    case "link-desktop":
      return <LinkComp href={href}>
        <chakra.a
          display="inline-block"
          px="4"
          py="6"
          cursor="pointer"
          fontSize="1.25rem"
          fontWeight="500"
          aria-current={active ? 'page' : undefined}
          color={'white'}
          transition="all 0.2s"
          _hover={{
            color: 'gray.500',
          }}
          _active={{
            color: 'brand.600',
          }}
          _activeLink={{
            color: 'brand.600',
            fontWeight: 'bold',
          }}
          {...rest}
        >
          {children}
        </chakra.a>
      </LinkComp>

    case "link-mobile":
      return <LinkComp href={href}>
        <chakra.a
          aria-current={active ? 'page' : undefined}
          w="full"
          display="flex"
          color="white"
          fontSize="1.25rem"
          alignItems="center"
          fontWeight="500"
          {...rest}
        >
          {children}
        </chakra.a>
      </LinkComp>
  }
}

export default Link
