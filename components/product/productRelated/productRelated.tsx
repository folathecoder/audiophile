import Image from "next/image";
import {
  RelatedContainer,
  RelatedWrap,
  RelatedHeadingWrap,
  RelatedHeading,
  RelatedCards,
  RelatedCard,
  RelatedCardName,
  RelatedCardImage,
  RelatedCardButton,
} from "components/product/productRelated/productRelatedStyles";
import Button from "components/shared/button/button";
import useWindow from "hooks/useWindow";
import type { ProductType } from "data/types/productType";

interface ProductRelatedProps {
  data: ProductType;
}

const ProductRelated = ({ data }: ProductRelatedProps): JSX.Element => {
  //TODO: Destructure data object
  const { others } = data;

  //TODO: Custom Hook => useWindow hook monitors the screen size and returns the screen "size" value
  const { size } = useWindow();

  return (
    <RelatedContainer>
      <RelatedWrap>
        <RelatedHeadingWrap>
          <RelatedHeading>you may also like</RelatedHeading>
        </RelatedHeadingWrap>
        <RelatedCards>
          {others.map((product, index) => {
            return (
              <RelatedCard key={index}>
                <RelatedCardImage>
                  {size >= 992 && (
                    <Image
                      src={product.image.desktop}
                      alt={product.name}
                      layout="fill"
                    />
                  )}
                  {size < 992 && size >= 680 && (
                    <Image
                      src={product.image.tablet}
                      alt={product.name}
                      layout="fill"
                    />
                  )}
                  {size < 680 && (
                    <Image
                      src={product.image.mobile}
                      alt={product.name}
                      layout="fill"
                    />
                  )}
                </RelatedCardImage>
                <RelatedCardName>{product.name}</RelatedCardName>
                <RelatedCardButton>
                  <Button link={product.slug}>see product</Button>
                </RelatedCardButton>
              </RelatedCard>
            );
          })}
        </RelatedCards>
      </RelatedWrap>
    </RelatedContainer>
  );
};

export default ProductRelated;
