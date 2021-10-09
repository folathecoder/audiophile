import audiophile from "../public/images/shared/audiophile-logo.svg";
import cart from "../public/images/shared/icon-cart.svg";

// interface EnforceTypes {
//   logo: {
//     image: string;
//     imageAlt: string;
//     link: string;
//   };
//   menu: {
//     title: string;
//     link: string;
//     active: boolean;
//   }[];
//   footer: {
//     information: string | number;
//     copyright: string | number;
//   };
//   socials: {
//     icon: string;
//     label: string;
//     link: string;
//   }[];
// }

export const menuData = {
  logo: {
    image: audiophile,
    imageAlt: "audiophile logo",
    link: "/",
  },
  menu: [
    {
      title: "home",
      link: "/",
      active: false,
    },
    {
      title: "headphones",
      link: "/headphones",
      active: false,
    },
    {
      title: "speakers",
      link: "/speakers",
      active: false,
    },
    {
      title: "earphones",
      link: "/earphones",
      active: false,
    },
  ],
  footer: {
    information:
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
    copyright: "Copyright 2021. All Rights Reserved",
  },
  cart: {
    icon: cart,
  },
  socials: [
    {
      icon: "fab fa-facebook-square",
      label: "visit our facebook page",
      link: "https://facebook.com",
    },
    {
      icon: "fab fa-twitter-square",
      label: "follow our twitter page",
      link: "https://twitter.com",
    },
    {
      icon: "fab fa-instagram",
      label: "follow us on instagram",
      link: "https://instagram.com",
    },
  ],
};
