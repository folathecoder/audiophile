import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CheckoutContainer = styled.section`
  position: relative;
  max-width: 100%;
  padding: 0rem 1rem 5rem 1rem;
  margin: 2rem 0rem;
  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem 3rem 0rem;
    margin: 2rem 0rem 2rem 2rem;
  }

  @media ${QUERIES.tablet} {
    padding: 0rem 2rem 3rem 0rem;
    margin: 2rem;
  }

  @media ${QUERIES.desktop} {
    margin: 0rem;
  }
`;
export const CheckoutWrap = styled.div`
  max-width: var(--max-container);
  margin: var(--center-container);
  min-height: 10rem;
  display: grid;
  grid-gap: 1.875rem;
  grid-template-columns: 100%;

  @media ${QUERIES.tablet} {
    grid-template-columns: 66% 34%;
  }
  @media ${QUERIES.desktop} {
    padding: 2rem 1rem;
  }
  & > * {
    flex: 1;
    max-width: 100%;
    border-radius: var(--border-radius);
  }
`;
export const CheckoutFormWrap = styled.section`
  background-color: var(--color-sec-200);
`;
export const CheckoutSummaryWrap = styled.section`
  background-color: transparent;
`;
