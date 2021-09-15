import { chakra, Box, useColorModeValue as mode, Button } from '@chakra-ui/react'
import * as React from 'react'
import LinkComp from 'next/link'

const Link = (props) => {
  const { active, children, type, href, ...rest } = props

  switch (type) {
    default:
      return href.indexOf("http") != -1 ? <chakra.a href={href} target="blank" cursor="pointer" {...rest}>{children}</chakra.a>
        : <LinkComp href={href}>
          <chakra.a cursor="pointer" {...rest}>{children}</chakra.a>
        </LinkComp>
    case "regular-white":
      return href.indexOf("http") != -1 ? <chakra.a href={href} color="white" transition="color 300ms ease" _hover={{ color: "dark.800" }} cursor="pointer" {...rest}>{children}</chakra.a>
        : <LinkComp href={href}>
          <chakra.a color="white" target="blank" transition="color 300ms ease" _hover={{ color: "dark.800" }} cursor="pointer" {...rest}>{children}</chakra.a>
        </LinkComp>
    case "button":
      return href.indexOf("http") != -1 ? <Button as="a" color="white" target="blank" href={href} {...rest}>
        <span>{children}</span>
      </Button> : <LinkComp href={href}>
        <Button  as="a" color="white" {...rest}>
          <span>{children}</span>
        </Button>
      </LinkComp>
    case "link-desktop":
      return href.indexOf("http") != -1 ?
        <chakra.a
          display="inline-block"
          px="4"
          py="6"
          href={href}
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
        : <LinkComp href={href}>
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
      return href.indexOf("http") != -1 ?
        <chakra.a
          aria-current={active ? 'page' : undefined}
          w="full"
          href={href}
          display="flex"
          color="white"
          fontSize="1.25rem"
          alignItems="center"
          fontWeight="500"
          {...rest}
        >
          {children}
        </chakra.a>
        : <LinkComp href={href}>
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
