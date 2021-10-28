import Image from "next/image";
import useWindow from "hooks/useWindow";
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
  ProductPrice,
  ProductOrderWrap,
  ProductOrder,
} from "components/product/productHero/productHeroStyles";
import { CURRENCY_SYMBOL, PRODUCT_TYPE } from "helpers/constants";
import ProductCounter from "components/shared/counter/productCounter";
import type { ProductType } from "data/types/productType";

interface ProductHeroProps {
  data: ProductType;
}

const ProductHero = ({ data }: ProductHeroProps): JSX.Element => {
  //TODO: Destructure data object
  const { name, image, price, description } = data;

  //TODO: Custom Hook => useWindow hook monitors the screen size and returns the screen "size" value
  const { size } = useWindow();

  return (
    <ProductContainer>
      <ProductWrap>
        <ProductImageWrap>
          <ProductImage>
            {size >= 992 && (
              <Image src={image.desktop} alt={name} layout="fill" />
            )}
            {size < 992 && size >= 786 && (
              <Image src={image.tablet} alt={name} layout="fill" />
            )}
            {size < 786 && (
              <Image src={image.mobile} alt={name} layout="fill" />
            )}
          </ProductImage>
        </ProductImageWrap>
        <ProductContentWrap>
          <ProductContent>
            {data.new && <ProductSubHeading>{PRODUCT_TYPE}</ProductSubHeading>}
            <ProductHeading>{name}</ProductHeading>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>
              {CURRENCY_SYMBOL} {price}
            </ProductPrice>
            <ProductOrderWrap>
              <ProductOrder>
                <ProductCounter data={data} preventDelete />
              </ProductOrder>
            </ProductOrderWrap>
          </ProductContent>
        </ProductContentWrap>
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductHero;
