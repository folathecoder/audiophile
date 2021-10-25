import React from "react";
import {
  ProductContainer,
  ProductWrap,
} from "components/category/productViews/productViewsStyles";
import ProductView from "../productView/productView";
import type { ProductType } from "data/types/productType";

interface ProductViewsProps {
  data: ProductType[];
}

const ProductViews = ({ data }: ProductViewsProps): JSX.Element => {
  return (
    <ProductContainer>
      <ProductWrap>
        {data.map((product, index) => {
          return (
            <ProductView
              key={index}
              data={product}
              flip={index % 2 !== 0 ? true : false}
            />
          );
        })}
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductViews;
