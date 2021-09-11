import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa'
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

  footer: {
    copyright: "2021 Filmhub  Terms Privacy",
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
        label: 'Skype',
        icon: <FaSkype />,
        href: '#',
      },
      {
        label: 'Twitter',
        icon: <FaTwitter />,
        href: '#',
      },
    ],
    links: [
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
            label: 'FAQs',
            href: '#',
          },
          {
            label: 'Filmmakers',
            href: '#',
          },
          {
            label: 'Channel Buyers',
            href: '#',
          },
          {
            label: 'Catalog Owners',
            href: '#',
          },
        ],
      },
      {
        title: 'Company',
        links: [
          {
            label: 'About',
            href: '#',
          },
          {
            label: 'Jobs',
            href: '#',
          },
          {
            label: 'Press',
            href: '#',
          },
          {
            label: 'Get in Touch',
            href: '#',
          },
        ],
      },
      {
        title: 'Support',
        links: [
          {
            label: 'Request a Custom Demo',
            href: '#',
          },
          {
            label: 'Suggest a Feature',
            href: '#',
          },
          {
            label: 'Get Help',
            href: '#',
          },
        ],
      },
    ],
    form: {
      title: "Want Filmhub news & updates?"
    }
  },
};

export default app;
