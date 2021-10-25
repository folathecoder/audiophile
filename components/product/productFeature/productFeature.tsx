import {
  FeatureContainer,
  FeatureWrap,
  FeatureContentWrap,
  FeatureContentHeader,
  FeatureContentText,
  FeatureListWrap,
  FeatureListContainer,
  FeatureList,
  FeatureListItem,
  FeatureQuantity,
  FeatureQuantityText,
} from "components/product/productFeature/productFeatureStyles";
import type { ProductType } from "data/types/productType";

interface ProductFeatureProps {
  data: ProductType;
}

const ProductFeature = ({ data }: ProductFeatureProps): JSX.Element => {
  const { features, includes } = data;

  return (
    <FeatureContainer>
      <FeatureWrap>
        <FeatureContentWrap>
          <FeatureContentHeader>features</FeatureContentHeader>
          <FeatureContentText>{features}</FeatureContentText>
        </FeatureContentWrap>
        <FeatureListWrap>
          <FeatureListContainer>
            <FeatureContentHeader>in the box</FeatureContentHeader>
            <FeatureList>
              {includes.map((include, index) => {
                return (
                  <FeatureListItem key={index}>
                    <FeatureQuantity>{include.quantity}x</FeatureQuantity>
                    <FeatureQuantityText>{include.item}</FeatureQuantityText>
                  </FeatureListItem>
                );
              })}
            </FeatureList>
          </FeatureListContainer>
        </FeatureListWrap>
      </FeatureWrap>
    </FeatureContainer>
  );
};

export default ProductFeature;
