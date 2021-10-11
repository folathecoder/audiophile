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
  min-height: 31.9375rem;
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
  background-position: auto;

  @media screen and (min-width: 430px) {
    /* background-size: contain; */
    background-position: auto;
    background-position: 0px -8rem;
    /* min-height: 40rem; */
  }

  @media screen and (min-width: 490px) {
    /* background-size: contain; */
    background-position: auto;
    background-position: 0px -9rem;
    /* min-height: 40rem; */
  }

  @media screen and (min-width: 572px) {
    /* background-size: contain; */
    background-position: auto;
    background-position: 0px -15rem;
    /* min-height: 40rem; */
  }

  @media screen and (min-width: 726px) {
    background-image: url("images/home/tablet/image-header.png");
    /* background-size: contain; */
    background-position: 0rem;
    min-height: 40rem;
  }

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

  @media screen and (min-width: 726px) {
    margin: 2rem 0rem;
  }
`;
export const HeroDescription = styled.p`
  max-width: 25rem;
  margin: 0rem auto 1.3rem auto;

  @media screen and (min-width: 726px) {
    margin-bottom: 2rem;
  }
`;

export const HeroButton = styled.div`

`
export const HeroEmpty = styled.div`
  display: none;
  background-color: indigo;
`;
