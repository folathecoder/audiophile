import Image from "next/image";
import { useState, useEffect } from "react";
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

interface ProductViewProps {
  flip?: boolean;
  data: {
    id: number;
    slug: string;
    name: string;
    category: string;
    categoryImage: {
      mobile: any;
      tablet: any;
      desktop: any;
    };
    new: boolean;
    description: string;
  };
}

const ProductView = ({ flip, data }: ProductViewProps): JSX.Element => {
  // const {id, slug, name, category, categoryImage, new, description} = data;

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
      <ProductWrap flip={flip}>
        <ProductImageWrap>
          <ProductImage>
            {size >= 992 && (
              <Image
                src="/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                alt=""
                layout="fill"
              />
            )}
            {size < 992 && size > 576 && (
              <Image
                src="/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
                alt=""
                layout="fill"
              />
            )}
            {size <= 576 && (
              <Image
                src="/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                alt=""
                layout="fill"
              />
            )}
          </ProductImage>
        </ProductImageWrap>
        <ProductContentWrap>
          <ProductContent flip={flip}>
            {/* {data.new && <ProductSubHeading>new product</ProductSubHeading>} */}
            <ProductHeading>{data.name}</ProductHeading>
            <ProductDescription>{data.description}</ProductDescription>
            <ProductButton>
              <Button link="/">see product</Button>
            </ProductButton>
          </ProductContent>
        </ProductContentWrap>
      </ProductWrap>
    </ProductContainer>
  );
};

export default ProductView;
