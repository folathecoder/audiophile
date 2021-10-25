import Head from "next/head";
import Script from "next/script";
import Navigator from "components/shared/navigator/navigator";
import ProductHero from "components/product/productHero/productHero";
import ProductFeature from "components/product/productFeature/productFeature";
import ProductGallery from "components/product/productGallery/productGallery";
import ProductRelated from "components/product/productRelated/productRelated";
import MenuCards from "components/shared/menuCards/menuCards";
import CtaSection from "components/shared/ctaSection/ctaSection";
import { menuData } from "data/shared/menuData";
import { ctaData } from "data/shared/ctaData";
import { getProductsBySlug, getSlugs } from "helpers/productFilter";
import { convertToUpperCase } from "helpers/textFormating";
import { productSchemaGenerator } from "helpers/schemaGenerator";
import { Main, HiddenHeader } from "styles/global/globalStyles";
import { GetStaticProps, GetStaticPaths } from "next";
import type { ProductType } from "data/types/productType";

interface ProductDetailsType {
  product: ProductType[];
}

const ProductDetails = ({ product }: ProductDetailsType): JSX.Element => {
  //TODO: Destructure the product array
  const [productData] = product;

  //TODO: Destructure the product object and extract required SEO values
  const { id, name, description, category } = productData;

  //TODO: Format specific texts needed for SEO display
  const customProductName = convertToUpperCase(name);
  const customProductDescription = convertToUpperCase(category);

  //TODO: Dynamically generate schema markup for product
  const productSchema = productSchemaGenerator(productData);

  return (
    <>
      <Head>
        <title>
          {customProductName} | {customProductDescription} | Shop for{" "}
          {customProductName}
        </title>
        <meta name="description" content={description} />
        <meta property="og:title" content={description} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <Script
        id={`${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Main>
        <Navigator />
        <HiddenHeader>{customProductName}</HiddenHeader>
        <ProductHero data={productData} />
        <ProductFeature data={productData} />
        <ProductGallery data={productData} />
        <ProductRelated data={productData} />
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
    const data = (await response.json()) as ProductType[];

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
    const data = (await response.json()) as ProductType[];

    //* STEP E => Filter out only the product associated to a specific product slug
    const productData = getProductsBySlug(slug, data);

    return {
      props: {
        product: productData,
      },
    };
  }
};
