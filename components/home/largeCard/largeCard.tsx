import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CardContainer,
  CardWrap,
  CardImageWrap,
  CardImage,
  CardContentWrap,
  CardContent,
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

  // useEffect(() => {
  //   const intialSize = window.innerWidth;
  //   return intialSize
  // });

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
    <CardContainer>
      <CardWrap>
        <CardImageWrap>
          <CardImage>
            {size > 992 ? (
              <Image
                src={sectionTwo.image.desktop}
                alt={sectionTwo.image.alt}
              />
            ) : (
              <Image src={sectionTwo.image.mobile} alt={sectionTwo.image.alt} />
            )}
          </CardImage>
        </CardImageWrap>

        <CardContentWrap>
          <CardContent>
            <CardHeading>{sectionTwo.heading}</CardHeading>
            <CardDescription>{sectionTwo.description}</CardDescription>
            <CardButton>
              <Button link={sectionTwo.button.link} dark>
                {sectionTwo.button.title}
              </Button>
            </CardButton>
          </CardContent>
        </CardContentWrap>
      </CardWrap>
    </CardContainer>
  );
};

export default LargeCard;
