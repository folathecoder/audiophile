import Head from "next/head";
import { Main } from "styles/global/globalStyles";
import HeroSection from "components/home/heroSection/heroSection";
import MenuCards from "components/shared/menuCards/menuCards";
import LargeCard from "components/home/largeCard/largeCard";
import SingleCard from "components/home/singleCard/singleCard";
import DoubleCard from "components/home/doubleCard/doubleCard";
import CtaSection from "components/shared/ctaSection/ctaSection";
import { homeData } from "data/home/homeData";
import { ctaData } from "data/shared/ctaData";
import { menuData } from "data/shared/menuData";

import { getProductsByCategory, getCategory } from "helpers/productFilter";

const index = ({ products }): JSX.Element => {
  const tempo = getProductsByCategory("headphones", products);
  const temp = getCategory(products);
  console.log(temp, tempo);

  return (
    <>
      <Head>
        <title>Audiophile - Audio Gadgets Store</title>
        <meta
          name="description"
          content="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
      </Head>
      <Main>
        <HeroSection data={homeData} />
        <MenuCards data={menuData} />
        <LargeCard data={homeData} />
        <SingleCard data={homeData} />
        <DoubleCard data={homeData} />
        <CtaSection data={ctaData} />
      </Main>
    </>
  );
};

export default index;

export const getStaticProps = async (context) => {
  // const { params } = context;
  // console.log(params);
  const response = await fetch("https://audiophile-api.herokuapp.com/products");
  if (response.ok) {
    const data = await response.json();
    return {
      props: {
        products: data,
      },
    };
  }
};
