import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CardContainer,
  CardWrap,
  CardImageWrap,
  CardImage,
  CardContentWrap,
  CardHeading,
  CardDescription,
  CardButton,
} from "components/home/largeCard/largeCardStyles";
import Button from "components/shared/button/button";

interface LargeCardProps {
  data: {
    sectionTwo: {
      heading: string;
      description: string;
      button: {
        title: string;
        link: string;
      };
      image: {
        mobile: any;
        tablet: any;
        desktop: any;
        alt: string;
      };
    };
  };
}

const LargeCard = ({ data }: LargeCardProps): JSX.Element => {
  //TODO: Destructure data object
  const { sectionTwo } = data;

  //TODO: Manage screen-size state
  const [size, setSize] = useState<number | null>(null);

  //TODO: Function that monitors screen size (used to responsively render images)
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //TODO: Monitor the screen size to enable image responsiveness
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <CardContainer>
      <CardWrap>
        <CardImageWrap>
          <CardImage>
            <Image src={sectionTwo.image.mobile} alt={sectionTwo.image.alt} />
          </CardImage>
        </CardImageWrap>

        <CardContentWrap>
          <CardHeading>{sectionTwo.heading}</CardHeading>
          <CardDescription>{sectionTwo.description}</CardDescription>
          <CardButton>
            <Button link={sectionTwo.button.link} dark>
              {sectionTwo.button.title}
            </Button>
          </CardButton>
        </CardContentWrap>
      </CardWrap>
    </CardContainer>
  );
};

export default LargeCard;
