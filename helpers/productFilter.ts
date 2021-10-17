//* HELPER: Function that removes duplicate values in array
const removeDuplicates = (data: []) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

//TODO: Filter all products by category
export const getProductsByCategory = (categoryName: string | string[], products) => {
  return products.filter(
    (productItems) => productItems.category === categoryName
  );
};

//TODO: Filter all categories from the product object
export const getCategory = (products) => {
  return removeDuplicates(products.map((product) => product.category));
};

//TODO: Exract a product by slug
export const getProductsBySlug = (slug: string | string[], products) => {
    return products.filter(
      (productItems) => productItems.slug === slug
    );
};

//TODO: Extract all slugs from the product object
export const getSlugs = (products) => {
    return removeDuplicates(products.map((product) => product.slug));
}
