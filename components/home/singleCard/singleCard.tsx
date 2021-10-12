import { useState, useEffect } from "react";
import {
  CardContainer,
  CardWrap,
  CardImageWrap,
  CardContentWrap,
  CardContent,
  CardHeading,
  CardButton,
} from "components/home/singleCard/singleCardStyles";
import Button from "components/shared/button/button";

interface LargeCardProps {
  data: {
    sectionThree: {
      heading: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
}

const SingleCard = ({ data }: LargeCardProps): JSX.Element => {
  //TODO: Destructure data object
  const { sectionThree } = data;

  return (
    <CardContainer>
      <CardWrap>
        <CardContentWrap>
          <CardContent>
            <CardHeading>{sectionThree.heading}</CardHeading>
            <CardButton>
              <Button link={sectionThree.button.link} dark outline>
                {sectionThree.button.title}
              </Button>
            </CardButton>
          </CardContent>
        </CardContentWrap>
        <CardImageWrap></CardImageWrap>
      </CardWrap>
    </CardContainer>
  );
};

export default SingleCard;
