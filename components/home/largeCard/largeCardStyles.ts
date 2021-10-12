import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CardContainer = styled.section`
  max-width: 100%;
  /* background-color: red; */
  padding: 0.75rem 1rem 0.75rem 1rem;

  @media ${QUERIES.mobile} {
    padding: 1rem 2rem 1rem 2rem;
  }
`;
export const CardWrap = styled.div`
  min-height: 37.5rem;
  background-color: var(--color-pry-100);
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background-image: url("images/home/desktop/pattern-circles.svg");
  background-size: 35rem auto;;
  background-repeat: no-repeat;
  background-position: center -7rem;
  /* background-position: -8rem -8rem; */

  @media ${QUERIES.mobile} {
    min-height: 45rem;
    background-size: contain;
    background-position: auto -8rem;
  }

  @media ${QUERIES.tablet} {
    background-size: 60rem auto;
    background-position: -13rem -1rem;
    flex-direction: row;
    min-height: 35rem;
  }

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const CardImageWrap = styled.div`
  /* background-color: green; */
`;

export const CardImage = styled.div`
  /* background-color: blue; */
  @media ${QUERIES.tablet} {
    transform: translateY(3.55rem);
  }

  img {
    width: 10.765625rem;
    height: auto;

    @media ${QUERIES.mobile} {
      width: 12.3125rem;
    }

    @media ${QUERIES.tablet} {
      height: 28.125rem;
      width: auto;
    }
  }
`;

export const CardContentWrap = styled.div`
  text-align: center;
  justify-content: flex-start;
  color: var(--color-sec-200);

  @media ${QUERIES.tablet} {
    justify-content: center;
    text-align: left;
    display: flex;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.tablet} {
    align-items: flex-start;
  }
`;
export const CardHeading = styled.h2`
  /* background-color: hotpink; */
  text-transform: uppercase;
  max-width: 12rem;

  @media ${QUERIES.mobile} {
    max-width: 15rem;
  }
`;
export const CardDescription = styled.p`
  margin: 1rem;
  max-width: 21.8125rem;

  @media ${QUERIES.mobile} {
    margin: 2rem 1rem;
  }

  @media ${QUERIES.tablet} {
    margin: 2rem 0rem;
  }
`;
export const CardButton = styled.div``;
