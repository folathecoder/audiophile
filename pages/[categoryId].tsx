import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Main } from "styles/global/globalStyles";
import HeroSection from "components/category/hero/heroSection";
import MenuCards from "components/shared/menuCards/menuCards";
import { menuData } from "data/shared/menuData";
import CtaSection from "components/shared/ctaSection/ctaSection";
import ProductViews from "components/category/productViews/productViews";
import { ctaData } from "data/shared/ctaData";
import { getProductsByCategory, getCategory } from "helpers/productFilter";

const ProductCategory = ({ products, category }): JSX.Element => {
  console.log(products);
  return (
    <>
      <Head>
        <title>{category} - Buy Cool {category}</title>
        <meta
          name="description"
          content="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
      </Head>

      <Main>
        <HeroSection data={category} />
        <ProductViews data={products}/>
        <MenuCards data={menuData} trimHeight />
        <CtaSection data={ctaData} trimHeight />
      </Main>
    </>
  );
};

export default ProductCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { categoryId: "headphones" },
      },
      {
        params: { categoryId: "earphones" },
      },
      {
        params: { categoryId: "speakers" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  //* STEP A => Extract the slug of the URL (This value will be matched with possible product categories, if it exists)
  const { params } = context;
  const category = params.categoryId;

  //* STEP B => Fetch all products data from the Heroku server
  const response = await fetch("https://audiophile-api.herokuapp.com/products");

  //* STEP C => Confirm if the endpoint is active
  if (response.ok) {
    //* STEP D => Convert fetched data to JSON
    const data = await response.json();

    //* STEP E => Filter out all products associated to a specific product category
    const categoryData = getProductsByCategory(category, data);

    return {
      props: {
        products: categoryData,
        category: category,
      },
    };
  }
};
