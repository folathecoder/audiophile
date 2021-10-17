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
import { convertToUpperCase } from "helpers/textFormating";

const ProductCategory = ({ products, category }): JSX.Element => {
  //TODO: Format "category" text
  const customCategory = convertToUpperCase(category);

  return (
    <>
      <Head>
        <title>
          {customCategory} | Shop for {customCategory}
        </title>
        <meta
          name="description"
          content={`Shop for the latest ${category} in the market. Let Audiophile be your reliable ${category} plug.`}
        />
      </Head>
      <Main>
        <HeroSection data={category} />
        <ProductViews data={products} />
        <MenuCards data={menuData} trimHeight />
        <CtaSection data={ctaData} trimHeight />
      </Main>
    </>
  );
};

export default ProductCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  //* STEP A => Fetch all products data from the Heroku server
  const response = await fetch("https://audiophile-api.herokuapp.com/products");

  //* STEP B=> Confirm if the endpoint is active
  if (response.ok) {
    //* STEP C => Convert fetched data to JSON
    const data = await response.json();

    //* STEP D => Extract all category value in the products object and avoid repeated value using getCategory function
    const paths = getCategory(data).map((category) => {
      console.log(category);
      return {
        params: {
          categoryId: `${category}`,
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
