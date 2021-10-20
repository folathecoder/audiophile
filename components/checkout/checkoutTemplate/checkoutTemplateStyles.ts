import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CheckoutContainer = styled.section`
  max-width: 100%;
  padding: 0rem 1rem 5rem 0rem;
  margin: 2rem 0rem;
  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem 3rem 2rem;
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
  & > * {
    flex: 1;
    width: 100%;
    border-radius: var(--border-radius);
  }
`;
export const CheckoutFormWrap = styled.div`
  background-color: var(--color-sec-200);
`;
export const CheckoutSummaryWrap = styled.div`
  background-color: var(--color-sec-200);
`;

