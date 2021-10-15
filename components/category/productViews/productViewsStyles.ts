import styled, { css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const ProductContainer = styled.section`
  max-width: 100%;
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 5rem 2rem;
  }
`;
export const ProductWrap = styled.div`
  max-width: var(--max-container);
  margin: var(--center-container);
`;
