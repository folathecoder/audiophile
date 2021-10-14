import Image from "next/image";
import {
  CtaContainer,
  CtaWrap,
  CtaImageWrap,
  CtaContentWrap,
  CtaContent,
  CtaHeading,
  CtaHeadingHighlight,
  CtaDescription,
} from "components/shared/ctaSection/ctaSectionStyles";

interface CtaSectionProps {
  data: {
    heading: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
    description: string;
    image: {
      src: any;
      alt: string;
    };
  };
}

const CtaSection = ({ data }: CtaSectionProps): JSX.Element => {
  //TODO: Destructure data object
  const { heading, description, image } = data;
   
     const ctaImage = {
       objectFit: "cover",
     };
   
  return ( 
    <div>
      <CtaContainer>
        <CtaWrap>
          <CtaContentWrap>
            <CtaContent>
              <CtaHeading>
                {heading.prefix}{" "}
                <CtaHeadingHighlight>{heading.highlight}</CtaHeadingHighlight>{" "}
                {heading.suffix}
              </CtaHeading>
              <CtaDescription>{description}</CtaDescription>
            </CtaContent>
          </CtaContentWrap>
          <CtaImageWrap>
            <Image
              src={image.src}
              alt={image.alt}
              layout='fill'
            />
          </CtaImageWrap>
        </CtaWrap>
      </CtaContainer>
    </div>
  );
};

export default CtaSection;
