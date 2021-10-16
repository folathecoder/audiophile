import { useRouter } from "next/router";
import Head from "next/head";
import { Main } from "styles/global/globalStyles";
import HeroSection from "components/category/hero/heroSection";
import MenuCards from "components/shared/menuCards/menuCards";
import { menuData } from "data/shared/menuData";
import CtaSection from "components/shared/ctaSection/ctaSection";
import ProductViews from "components/category/productViews/productViews";
import { ctaData } from "data/shared/ctaData";

const ProductCategory = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Headphones - Buy Cool Headphones</title>
        <meta
          name="description"
          content="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
      </Head>

      <Main>
        <HeroSection />
        <ProductViews />
        <MenuCards data={menuData} trimHeight />
        <CtaSection data={ctaData} trimHeight />
      </Main>
    </>
  );
};

export default ProductCategory;
