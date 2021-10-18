// import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Main } from "styles/global/globalStyles";
import MenuCards from "components/shared/menuCards/menuCards";
import ProductHero from "components/product/productHero/productHero";
import Navigator from "components/shared/navigator/navigator";
import { menuData } from "data/shared/menuData";
import CtaSection from "components/shared/ctaSection/ctaSection";
import { ctaData } from "data/shared/ctaData";
import { getProductsBySlug, getSlugs } from "helpers/productFilter";

const ProductDetails = ({ product }): JSX.Element => {
  console.log(product)
  return (
    <>
      <Main>
        <Navigator />
        <ProductHero data={product}/>
        <MenuCards data={menuData} trimHeight />
        <CtaSection data={ctaData} trimHeight />
      </Main>
    </>
  );
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  //* STEP A => Fetch all products data from the Heroku server
  const response = await fetch("https://audiophile-api.herokuapp.com/products");

  //* STEP B=> Confirm if the endpoint is active
  if (response.ok) {
    //* STEP C => Convert fetched data to JSON
    const data = await response.json();

    //* STEP D => Extract all slug values in the products object and avoid repeated value using getSlugs function
    const paths = getSlugs(data).map((slug) => {
      return {
        params: {
          productId: `${slug}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  //* STEP A => Extract the slug of the URL (This value will be matched with possible product categories, if it exists)
  const { params } = context;
  const slug = params.productId;

  //* STEP B => Fetch all products data from the Heroku server
  const response = await fetch("https://audiophile-api.herokuapp.com/products");

  //* STEP C => Confirm if the endpoint is active
  if (response.ok) {
    //* STEP D => Convert fetched data to JSON
    const data = await response.json();

    //* STEP E => Filter out only the product associated to a specific product slug
    const productData = getProductsBySlug(slug, data);

    return {
      props: {
        product: productData,
      },
    };
  }
};
