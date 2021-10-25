import Image from "next/image";
import {
  GalleryContainer,
  GalleryWrap,
  FirstImageWrap,
  SecondImageWrap,
  ThirdImageWrap,
} from "components/product/productGallery/productGalleryStyles";
import useWindow from "hooks/useWindow";
import type { ProductType } from "data/types/productType";

interface PhotoGalleryProps {
  data: ProductType;
}

const ProductGallery = ({ data }: PhotoGalleryProps): JSX.Element => {
  //TODO: Destructure data object
  const { name, gallery } = data;

  //TODO: Custom Hook => useWindow hook monitors the screen size and returns the screen "size" value
  const { size } = useWindow();

  return (
    <GalleryContainer>
      <GalleryWrap>
        <FirstImageWrap>
          {size >= 992 && (
            <Image
              src={gallery.first.desktop}
              alt={`${name} image one`}
              layout="fill"
            />
          )}
          {size < 992 && size > 576 && (
            <Image
              src={gallery.first.tablet}
              alt={`${name} image one`}
              layout="fill"
            />
          )}
          {size <= 576 && (
            <Image
              src={gallery.first.mobile}
              alt={`${name} image one`}
              layout="fill"
            />
          )}
        </FirstImageWrap>
        <SecondImageWrap>
          {size >= 992 && (
            <Image
              src={gallery.second.desktop}
              alt={`${name} image two`}
              layout="fill"
            />
          )}
          {size < 992 && size > 576 && (
            <Image
              src={gallery.second.tablet}
              alt={`${name} image two`}
              layout="fill"
            />
          )}
          {size <= 576 && (
            <Image
              src={gallery.second.mobile}
              alt={`${name} image two`}
              layout="fill"
            />
          )}
        </SecondImageWrap>
        <ThirdImageWrap>
          {size >= 992 && (
            <Image
              src={gallery.third.desktop}
              alt={`${name} image third`}
              layout="fill"
            />
          )}
          {size < 992 && size > 576 && (
            <Image
              src={gallery.third.tablet}
              alt={`${name} image third`}
              layout="fill"
            />
          )}
          {size <= 576 && (
            <Image
              src={gallery.third.mobile}
              alt={`${name} image third`}
              layout="fill"
            />
          )}
        </ThirdImageWrap>
      </GalleryWrap>
    </GalleryContainer>
  );
};

export default ProductGallery;
