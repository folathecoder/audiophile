import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroSubHeading,
  HeroHeading,
  HeroDescription,
  HeroButton,
  HeroEmpty,
} from "components/home/heroSection/heroSectionStyles";
import Button from "components/shared/button/button";

interface HeroProps {
  data: {
    hero: {
      heading: string;
      subHeading: string;
      description: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
}

const HeroSection = ({ data }: HeroProps): JSX.Element => {
  //TODO: Destructure data object
  const { hero } = data;

  return (
    <HeroContainer>
      <HeroWrap>
        <HeroContent>
          <HeroSubHeading>{hero.subHeading}</HeroSubHeading>
          <HeroHeading>{hero.heading}</HeroHeading>
          <HeroDescription>{hero.description}</HeroDescription>
          <HeroButton>
            <Button link={hero.button.link}>{hero.button.title}</Button>
          </HeroButton>
        </HeroContent>
        <HeroEmpty />
      </HeroWrap>
    </HeroContainer>
  );
};

export default HeroSection;
