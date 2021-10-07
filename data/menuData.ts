import audiophileLogo from "assets/images/shared/audiophile-logo.svg";

export const menuData = {
  logo: {
    image: audiophileLogo,
    imageAlt: "audiophile logo",
    link: "/",
  },
  menu: [
    {
      title: "home",
      link: "/",
    },
    {
      title: "headphones",
      link: "/headphones",
    },
    {
      title: "speakers",
      link: "/speakers",
    },
    {
      title: "earphones",
      link: "/earphones",
    },
  ],
  footer: {
    information:
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
    copyright: "Copyright 2021. All Rights Reserved",
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
