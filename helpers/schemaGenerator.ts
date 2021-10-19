import { convertToUpperCase } from "./textFormating";

//TODO: Function that dynamically generates product schema markup
export const productSchemaGenerator = (product): object => {
  const productName = convertToUpperCase(product.name);

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${productName}`,
    image: `https://audiophilic.vercel.app/${product.image.desktop}`,
    description: `${product.description}`,
    brand: "Audiophile",
    sku: `${product.id}`,
    offers: {
      "@type": "Offer",
      url: `https://audiophilic.vercel.app/product/${product.slug}`,
      priceCurrency: "USD",
      price: `${product.price}`,
      priceValidUntil: "2023-08-02",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
};
