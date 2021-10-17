import React from "react";
import {
  ProductContainer,
  ProductWrap,
} from "components/category/productViews/productViewsStyles";
import ProductView from "../productView/productView";

interface ProductViewsProps {
  data: [];
}

const ProductViews = ({ data }: ProductViewsProps): JSX.Element => {
  return (
    <ProductContainer>
      <ProductWrap>
        {data.map((product, index) => {
          console.log(index);
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
