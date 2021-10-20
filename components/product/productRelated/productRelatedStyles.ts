import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const RelatedContainer = styled.section`
  max-width: 100%;
  padding: 0rem 1rem;
  margin: 7rem 0rem 1rem 0rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem;
  }
  @media ${QUERIES.tablet} {
    margin: 7rem 0rem;
  }
`;

export const RelatedWrap = styled.div`
  min-height: 10rem;
  max-width: var(--max-container);
  margin: var(--center-container);
`;

export const RelatedHeadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RelatedHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.1rem;
  margin-bottom: 2rem;

  @media ${QUERIES.mobile} {
    margin-bottom: 3rem;
  }

  @media ${QUERIES.tablet} {
    font-size: 2rem;
    line-height: 2.1rem;
    margin-bottom: 4rem;
  }
`;
export const RelatedCards = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 992px) {
    grid-gap: 1rem;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
`;
export const RelatedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const RelatedCardImage = styled.div`
  position: relative;
  object-fit: cover;
  min-height: 19.875rem;
  width: 100%;
  border-radius: var(--border-radius);

  @media screen and (max-width: 680px) {
    min-height: 7.5rem;
  }

  img {
    object-fit: cover;
    border-radius: var(--border-radius);

    @media screen and (max-width: 680px) {
      object-fit: contain;
    }
  }
`;
export const RelatedCardName = styled.h3`
  margin: 2rem 0rem;
  font-size: 1.5rem;
  text-transform: uppercase;
`;
export const RelatedCardButton = styled.div``;
