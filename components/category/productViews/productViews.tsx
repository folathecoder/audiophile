import React from "react";
import {
  ProductContainer,
  ProductWrap,
} from "components/category/productViews/productViewsStyles";
import ProductView from "../productView/productView";

const ProductViews = (): JSX.Element => {
  return (
    <ProductContainer>
      <ProductWrap>
        <ProductView />
        <ProductView flip />
        <ProductView/>
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductViews;
