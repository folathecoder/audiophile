import {
  CardContainer,
  CardWrap,
  CardImageWrap,
  CardContentWrap,
  CardContent,
  CardHeading,
  CardButton,
} from "components/home/doubleCard/doubleCardStyles";
import Button from "components/shared/button/button";

interface DoubleCardProps {
  data: {
    sectionFour: {
      heading: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
}

const DoubleCard = ({ data }: DoubleCardProps): JSX.Element => {
  //TODO: Destructure data object
  const { sectionFour } = data;

  return (
    <CardContainer>
      <CardWrap>
        <CardImageWrap></CardImageWrap>
        <CardContentWrap>
          <CardContent>
            <CardHeading>{sectionFour.heading}</CardHeading>
            <CardButton>
              <Button link={sectionFour.button.link} outline>
                {sectionFour.button.title}
              </Button>
            </CardButton>
          </CardContent>
        </CardContentWrap>
      </CardWrap>
    </CardContainer>
  );
};

export default DoubleCard;
