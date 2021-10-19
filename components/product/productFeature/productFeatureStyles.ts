import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const FeatureContainer = styled.section`
  max-width: 100%;
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem;
    margin: 4rem 0rem;
  }

  @media ${QUERIES.tablet} {
    margin: 6rem 0rem;
  }
`;
export const FeatureWrap = styled.div`
  background-color: white;
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tablet} {
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;
export const FeatureContentWrap = styled.div`
  padding: 2rem 0rem 5rem 0rem;

  @media ${QUERIES.tablet} {
    padding: 0rem;
  }
`;
export const FeatureContentHeader = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: 0.05375rem;
  margin-bottom: 1rem;

  @media ${QUERIES.tabletMini} {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  @media ${QUERIES.tablet} {
    margin-bottom: 2rem;
  }
`;
export const FeatureContentText = styled.p`
  white-space: pre-line;
`;
export const FeatureListWrap = styled.div`
  @media ${QUERIES.tabletMini} {
    display: flex;

    @media ${QUERIES.tablet} {
      flex-direction: column;
      align-items: center;
    }

    & > * {
      flex: 1;

      @media ${QUERIES.tablet} {
        flex: initial;
      }
    }
  }
`;
export const FeatureListContainer = styled.div``;
export const FeatureList = styled.ul``;
export const FeatureListItem = styled.li`
  display: flex;
`;
export const FeatureQuantity = styled.p`
  color: var(--color-pry-100);
  font-weight: var(--font-weight-400);
`;
export const FeatureQuantityText = styled.p`
  margin-left: 1.4375rem;
  margin-bottom: 0.3rem;
`;
