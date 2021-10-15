import { QUERIES } from "helpers/mediaQueries";
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--color-pry-500);
  height: 10.3125rem;
  max-width: 21.875rem;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;

  @media ${QUERIES.tabletMini} {
    margin: 0rem 0.5rem;
  }

  @media ${QUERIES.tablet} {
    height: 12.75rem;
    padding-bottom: 2rem;
    margin: 0rem 0.3rem;
  }

  &:hover {
    a {
      transition: var(--transition);
      color: var(--color-pry-100);
    }
    i {
      transition: var(--transition);
      transform: translateX(0.3rem);
    }
  }
`;
export const CardImage = styled.div`
  background-color: transparent;

  img {
    height: 6.5rem;
    width: auto;

    @media ${QUERIES.tablet} {
      height: initial;
      width: initial;
    }
  }
`;
export const CardShadow = styled.div`
  min-height: 2rem;
  width: 7rem;
  position: relative;
  margin-bottom: 0.5rem;

  @media ${QUERIES.tablet} {
    width: 10rem;
  }
`;

export const CardHeading = styled.h3`
  color: var(--color-sec-300);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const CardLinkWrap = styled.div`
  text-transform: uppercase;

  a {
    color: var(--color-pry-200);
    font-size: 0.8125rem;
  }

  i {
    color: var(--color-pry-100);
    font-size: 0.6rem;
    margin-left: 0.3rem;
  }
`;
