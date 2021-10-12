import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const HeroContainer = styled.section`
  max-width: 100%;
  background-color: var(--color-sec-300);

  @media ${QUERIES.tablet} {
    padding: 0rem 2rem;
  }
`;

export const HeroWrap = styled.section`
  max-width: var(--max-container);
  min-height: 31.9375rem;
  margin: var(--center-container);
  padding: 0rem 1rem;
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
    background-position: auto;
    background-position: 0px -8rem;
  }

  @media screen and (min-width: 490px) {
    background-position: auto;
    background-position: 0px -9rem;
  }

  @media screen and (min-width: 572px) {
    background-position: auto;
    background-position: 0px -15rem;
  }

  @media screen and (min-width: 726px) {
    background-image: url("images/home/tablet/image-header.png");
    background-position: 0rem;
    min-height: 40rem;
  }

  @media ${QUERIES.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    min-height: 39.5625rem;
    padding: 0rem;
    background-image: none;

    & > * {
      flex: 1;
    }
  }
`;

export const HeroContent = styled.div`

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${QUERIES.tablet} {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
`;

export const HeroSubHeading = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.625rem;
  font-size: 0.875rem;
  color: var(--color-pry-300);
`;
export const HeroHeading = styled.h1`
  text-transform: uppercase;
  margin: 1rem 0rem;
  color: var(--color-sec-200);

  @media screen and (min-width: 726px) {
    font-size: 3.5rem;
    line-height: 3.625rem;
    margin: 2rem 0rem;
    max-width: 24.75rem;
  }

  @media ${QUERIES.tablet} {
    margin: 1.3125rem 0rem 2.0625rem 0rem;
  }
`;

export const HeroDescription = styled.p`
  color: var(--color-pry-300);
  max-width: 25rem;
  margin: 0rem auto 1.3rem auto;

  @media screen and (min-width: 726px) {
    margin-bottom: 2rem;
  }

  @media ${QUERIES.tablet} {
    margin: 0rem 0rem 2.5rem 0rem;
    max-width: 23rem;
    font-size: 0.9375rem;
  }
`;

export const HeroButton = styled.div``;

export const HeroEmpty = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    min-height: 40rem;
    display: flex;
    background-image: url("images/home/desktop/headphone-hero-image.png");
    background-repeat: no-repeat;
    background-position: 0rem 3rem;
  }
`;
