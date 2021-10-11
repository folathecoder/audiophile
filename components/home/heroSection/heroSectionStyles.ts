import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";
import heroMobileImage from "public/images/home/mobile/image-header.jpg";
import heroTabletImage from "public/images/home/tablet/image-header.jpg";
import heroDesktopImage from "public/images/home/desktop/image-hero.jpg";

export const HeroContainer = styled.section`
  max-width: 100%;
  background-color: red;
`;

export const HeroWrap = styled.section`
  max-width: var(--max-container);
  height: 31.9375rem;
  margin: var(--center-container);
  padding: 0rem 1rem;
  background-color: var(--color-sec-300);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("images/home/mobile/image-header.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0rem -2rem;

  /* & > * {
    flex: 1;
  } */
`;

export const HeroContent = styled.div`

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroSubHeading = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.625rem;
  font-size: 0.875rem;
`;
export const HeroHeading = styled.h1`
  text-transform: uppercase;
  margin: 1rem 0rem;
`;
export const HeroDescription = styled.p`
  margin-bottom: 1.3rem;
`;

export const HeroButton = styled.div`

`
export const HeroEmpty = styled.div`
  display: none;
  background-color: indigo;
`;
