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
  trimHeight?: boolean;
}

const CtaSection = ({ data, trimHeight }: CtaSectionProps): JSX.Element => {
  //TODO: Destructure data object
  const { heading, description, image } = data;

  return (
      <CtaContainer trimHeight={trimHeight}>
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
            <Image src={image.src} alt={image.alt} layout="fill" />
          </CtaImageWrap>
        </CtaWrap>
      </CtaContainer>
  );
};

export default CtaSection;
