import zx9Mobile from "public/images/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "public/images/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "public/images/home/desktop/image-speaker-zx9.png";

export const homeData = {
  hero: {
    heading: "XX99 mark II headphones",
    subHeading: "new product",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    button: {
      title: "see product",
      link: "/product/xx99-mark-two-headphones",
    },
  },
  sectionTwo: {
    heading: "ZX9 speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    button: {
      title: "see product",
      link: "/product/zx9-speaker",
    },
    image: {
      mobile: zx9Mobile,
      tablet: zx9Tablet,
      desktop: zx9Desktop,
      alt: "zx9 speaker",
    },
  },
  sectionThree: {
    heading: "zx7 speaker",
    button: {
      title: "see product",
      link: "/product/zx7-speaker",
    },
  },
  sectionFour: {
    heading: "yx1 earphones",
    button: {
      title: "see product",
      link: "/product/yx1-earphones",
    },
  },
};
