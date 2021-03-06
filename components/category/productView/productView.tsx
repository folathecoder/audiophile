import Image from "next/image";
import useWindow from "hooks/useWindow";
import Button from "components/shared/button/button";
import {
  ProductContainer,
  ProductWrap,
  ProductImageWrap,
  ProductImage,
  ProductContentWrap,
  ProductContent,
  ProductSubHeading,
  ProductHeading,
  ProductDescription,
  ProductButton,
} from "components/category/productView/productViewStyles";
import { PRODUCT_TYPE } from "helpers/constants";
import { ProductType } from "data/types/productType";

interface ProductViewProps {
  flip?: boolean;
  data: ProductType;
}

const ProductView = ({ flip, data }: ProductViewProps): JSX.Element => {
  //TODO: Custom Hook => useWindow hook monitors the screen size and returns the screen "size" value
  const { size } = useWindow();

  return (
    <ProductContainer>
      <ProductWrap flip={flip}>
        <ProductImageWrap>
          <ProductImage>
            {size >= 992 && (
              <Image
                src={data.categoryImage.desktop}
                alt={data.name}
                layout="fill"
                priority
              />
            )}
            {size < 992 && size > 576 && (
              <Image
                src={data.categoryImage.tablet}
                alt={data.name}
                layout="fill"
                priority
              />
            )}
            {size <= 576 && (
              <Image
                src={data.categoryImage.mobile}
                alt={data.name}
                layout="fill"
                priority
              />
            )}
          </ProductImage>
        </ProductImageWrap>
        <ProductContentWrap>
          <ProductContent flip={flip}>
            {data.new && <ProductSubHeading>{PRODUCT_TYPE}</ProductSubHeading>}
            <ProductHeading>{data.name}</ProductHeading>
            <ProductDescription>{data.description}</ProductDescription>
            <ProductButton>
              <Button link={`/product/${data.slug}`}>see product</Button>
            </ProductButton>
          </ProductContent>
        </ProductContentWrap>
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductView;
