import styled, { css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const ProductContainer = styled.section`
  max-width: 100%;
  /* background-color: red; */
  padding: 0rem 1rem;
`;
export const ProductWrap = styled.div`
  min-height: 0rem;
  /* background-color: yellow; */
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tablet} {
    min-height: 35rem;
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;
export const ProductImageWrap = styled.div`
  /* background-color: green; */
  position: relative;
  min-height: 21.5rem;
  border-radius: var(--border-radius);
`;
export const ProductImage = styled.div`
  border-radius: var(--border-radius);
  img {
    object-fit: contain;
    border-radius: var(--border-radius);
  }
`;
export const ProductContentWrap = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  min-height: 0rem;

  @media ${QUERIES.tablet} {
    justify-content: flex-start;
  }
`;
export const ProductContent = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0rem;

  @media ${QUERIES.tablet} {
    align-items: flex-start;
    transform: translateX(6rem);
    padding: 0rem;
  }
`;
export const ProductSubHeading = styled.p`
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  letter-spacing: 0.625rem;
  color: var(--color-pry-100);
  font-weight: var(--font-weight-300);
`;
export const ProductHeading = styled.h2`
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 1.95rem;
  max-width: 15rem;

  @media ${QUERIES.tabletMini} {
    max-width: 20rem;
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

export const ProductDescription = styled.p`
  margin: 1.5rem 0rem 2rem 0rem;
  max-width: 35rem;

  @media ${QUERIES.tablet} {
    max-width: 28rem;
  }
`;

export const ProductPrice = styled.h3`
  color: var(--color-sec-300);
  font-size: 1.125rem;
  letter-spacing: 0.080625rem;
`;

export const ProductOrderWrap = styled.div`
  min-height: 0rem;
  width: 100%;
  /* background-color: blue; */
  margin: 1rem 0rem;
  display: flex;
  align-items: center;
`;
export const ProductOrder = styled.div`
/* background-color: red; */
`;
