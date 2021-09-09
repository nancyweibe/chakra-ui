import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { Badge } from '@chakra-ui/react'

const app = {
  lang: "eng",
  projectName: "filmhub",

  links : [
    {
      label: 'Buyers',
      href: '/buyers',
    },
    {
      label: 'Learn More',
      href: '/learn-more',
    },
  ],

  footerLinks: [
    {
      title: 'Product',
      links: [
        {
          label: 'Sign up',
          href: '#',
        },
        {
          label: 'Log in',
          href: '#',
        },
        {
          label: 'Product Updates',
          href: '#',
          // badge: (
          //   <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
          //     New
          //   </Badge>
          // ),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'Contact us',
          href: '#',
        },
        {
          label: 'Careers',
          href: '#',
        },
        {
          label: 'Public Relations',
          href: '#',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Help Center',
          href: '#',
        },
        {
          label: 'Suggest a feature',
          href: '#',
        },
        {
          label: 'Get a demo',
          href: '#',
        },
      ],
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      icon: <FaFacebook />,
      href: '#',
    },
    {
      label: 'Instagram',
      icon: <FaInstagram />,
      href: '#',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: '#',
    },
    {
      label: 'LinkedIn',
      icon: <FaTwitter />,
      href: '#',
    },
  ],

  footerBottomLinks: [
    {
      label: 'Terms of Service',
      href: '#',
    },
    {
      label: 'Privacy Policy',
      href: '#',
    },
  ]
};

export default app;
