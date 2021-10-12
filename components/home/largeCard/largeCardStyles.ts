import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CardContainer = styled.section`
  max-width: 100%;
  /* background-color: red; */
  padding: 0.75rem 1rem 0.75rem 1rem;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -8rem -8rem;

  @media ${QUERIES.tablet} {
    flex-direction: row;
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

  img {
    width: 10.765625rem;
    height: auto;
  }
`;
export const CardContentWrap = styled.div`
  /* background-color: white; */
  text-align: center;
  justify-content: flex-start;
  color: var(--color-sec-200);
`;
export const CardHeading = styled.h2`
  /* background-color: hotpink; */
  text-transform: uppercase;
  max-width: 12rem;
`;
export const CardDescription = styled.p`
  margin: 1rem;
`;
export const CardButton = styled.div``;
