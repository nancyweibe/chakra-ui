import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { Badge } from '@chakra-ui/react'

const app = {
  lang: "eng",
  projectName: "filmhub",

  links: [
    {
      label: 'Buyers',
      href: '/buyers',
    },
    {
      label: 'Filmmakers',
      href: '/filmmakers',
    },
  ],

  footer: {
    copyright: "2021 Filmhub",
    bottomLinks: [
      {name: "Terms", link: "#"},
      {name: "Privacy", link: "#"},
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
            label: 'Schedule Demo',
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

  bg: [
    { c: "#B20ECA",  width: 200, l: 5, t: 1, o: 0.3 },
    { c: "#17A2B8", width: 400, l: 50, t: 2, o: 0.1 },
    { c: "#B20ECA",  width: 200, r: 5, t: 10, o: 0.3 },
    { c: "#17A2B8", width: 200, l: 10, t: 10, o: 0.3 },
    { c: "#2563EB",  width: 200, l: 7, t: 20, o: 0.3 },
    { c: "#2563EB", width: 200, r: 5, t: 20, o: 0.3 },
    { c: "#B20ECA",  width: 200, l: 5, t: 30, o: 0.3 },
    { c: "#2563EB",  width: 200, r: 10, t: 30, o: 0.3 },
    { c: "#B20ECA",  width: 200, r: 5, t: 40, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 20, t: 40, o: 0.3 },
    { c: "#B20ECA",  width: 250, l: 50, t: 52, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 50, t: 60, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 10, t: 65, o: 0.3 },
    { c: "#B20ECA",  width: 250, l: 20, t: 80, o: 0.3 },
    { c: "#2563EB", width: 250, r: 10, t: 90, o: 0.3},

    { c: "#B20ECA",  width: 200, r: 5, t: 110, o: 0.3 },
    { c: "#17A2B8", width: 200, l: 10, t: 110, o: 0.3 },
    { c: "#2563EB",  width: 200, l: 7, t: 120, o: 0.3 },
    { c: "#2563EB", width: 200, r: 25, t: 120, o: 0.3 },
    { c: "#B20ECA",  width: 200, l: 5, t: 130, o: 0.3 },
    { c: "#2563EB",  width: 200, r: 10, t: 130, o: 0.3 },
    { c: "#B20ECA",  width: 200, r: 5, t: 140, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 20, t: 140, o: 0.3 },
    { c: "#B20ECA",  width: 250, l: 50, t: 152, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 50, t: 160, o: 0.3 },
    { c: "#2563EB",  width: 150, l: 10, t: 165, o: 0.3 },
    { c: "#B20ECA",  width: 250, r: 20, t: 160, o: 0.3 },
    { c: "#2563EB", width: 250, r: 10, t: 170, o: 0.3},
  ]
};

export default app;
