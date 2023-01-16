import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


export const links = [
  {
    id: 1,
    text: 'HOME',
    url: '/',
  },
  {
    id: 2,
    text: 'ABOUT',
    url: '/about',
  },
  {
    id: 3,
    text: 'GALLERY',
    url: '/gallery',
  },
  {
    id: 4,
    text: 'CONTACT',
    url: '/contact'
  },
  {
    id: 5,
    text: 'CART',
    url: '/cart'
  }
]

export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <FaBehance />,
    },
  ];
  

// export const products_url = ''

// export const single_product_url = ``