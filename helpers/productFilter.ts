//* HELPER: Function that removes duplicate values in array
const removeDuplicates = (data: []) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

//TODO: Filter all products by category
export const getProductsByCategory = (categoryName: string | string[], products) => {
  return products.filter(
    (productItems) => productItems.category === categoryName
  );
  // console.log(filterCategory);
};

//TODO: Filter all categories from the product object
export const getCategory = (products) => {
  return removeDuplicates(products.map((product) => product.category));

  // console.log(categories);
};
