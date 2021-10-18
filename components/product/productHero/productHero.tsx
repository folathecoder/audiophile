import Image from "next/image";
import { useState, useEffect } from "react";
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
  ProductOrder
} from "components/product/productHero/productHeroStyles";
import { CURRENCY_SYMBOL, PRODUCT_TYPE } from "helpers/constants";
import ProductCounter from "components/shared/counter/productCounter";

interface ProductHeroProps {
  data: {
    name: string;
    image: {
      mobile: any;
      tablet: any;
      desktop: any;
    };
    new: boolean;
    price: number;
    description: string;
  }[];
}

const ProductHero = ({ data }: ProductHeroProps): JSX.Element => {
  //TODO: Destructure data array
  const [productData] = data;
  const { name, image, price, description } = productData;

  //TODO: Manage screen-size state
  const [size, setSize] = useState<number>(1000);

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        setSize(window.innerWidth);
      });
    };
  });

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
            {productData.new && (
              <ProductSubHeading>{PRODUCT_TYPE}</ProductSubHeading>
            )}
            <ProductHeading>{name}</ProductHeading>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>
              {CURRENCY_SYMBOL}{" "}
              {price}
            </ProductPrice>
            <ProductOrderWrap>
              <ProductOrder>
                <ProductCounter />
              </ProductOrder>
            </ProductOrderWrap>
          </ProductContent>
        </ProductContentWrap>
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductHero;
