import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const GalleryContainer = styled.section`
  /* background-color: red; */
  max-width: 100%;
  padding: 0rem 1rem;
  margin: 5rem 0rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem;
  }

  @media ${QUERIES.tablet} {
    margin: 1rem 0rem 5rem 0rem;
  }
`;
export const GalleryWrap = styled.div`
  /* background-color: yellow; */
  min-height: 37rem;
  max-width: var(--max-container);
  margin: var(--center-container);
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 60%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "A C"
    "B C";

  & > * {
    border-radius: var(--border-radius);
    position: relative;
    object-fit: cover;

    img {
      border-radius: var(--border-radius);
      object-fit: cover;
    }
  }

  @media screen and (max-width: 786px) {
    grid-gap: 1rem;
    min-height: 23rem;
  }

  @media screen and (max-width: 576px) {
    grid-gap: 1.2rem;
    grid-template-columns: 1fr;
    /* grid-template-rows: 10.875rem; */
    grid-template-areas:
      "A"
      "B"
      "C";
  }
`;

export const FirstImageWrap = styled.div`
  grid-area: A;

  @media screen and (max-width: 576px) {
    min-height: 10.875rem;
  }
`;
export const SecondImageWrap = styled.div`
  grid-area: B;

  @media screen and (max-width: 576px) {
    min-height: 10.875rem;
  }
`;
export const ThirdImageWrap = styled.div`
  grid-area: C;

  min-height: 23rem;
`;
