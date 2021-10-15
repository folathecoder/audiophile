import React from "react";
import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

const HeroContainer = styled.section`
  max-width: 100%;
  min-height: 6.4375rem;
  background-color: var(--color-sec-300);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${QUERIES.mobile} {
    min-height: 15.375rem;
    font-size: 2.5rem;
    line-height: 2.75rem;
  }

  @media ${QUERIES.tablet} {
    min-height: 14.9375rem;
  }
`;
const HeroHeading = styled.h1`
  color: var(--color-sec-200);
  text-transform: uppercase;
  font-size: 1.75rem;

  @media ${QUERIES.mobile} {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeading>headphones</HeroHeading>
    </HeroContainer>
  );
};

export default HeroSection;
