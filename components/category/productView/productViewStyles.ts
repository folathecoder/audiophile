import styled, { css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const ProductContainer = styled.section`
  max-width: 100%;
  padding: 2rem 0rem;

  @media ${QUERIES.tablet} {
    min-height: 45rem;
    display: flex;

    & > * {
      flex: 1;
    }
  }
`;
export const ProductWrap = styled.div`
  min-height: 10rem;
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tablet} {
    flex-direction: row;
    min-height: 35rem;

    ${({ flip }) =>
      flip &&
      css`
        flex-direction: row-reverse;
      `}
  }

  & > * {
    flex: 1;
  }
`;

export const ProductImageWrap = styled.div`
  position: relative;
  min-height: 22rem;
`;
export const ProductImage = styled.div`

  img {
    object-fit: contain;
    border-radius: var(--border-radius);
    background-color: #f1f1f1;
  }
`;
export const ProductContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0rem;

  @media ${QUERIES.tablet} {
    justify-content: flex-start;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  @media ${QUERIES.tablet} {
    align-items: flex-start;
    text-align: left;
    transform: translateX(6rem);
    padding: 0rem;

    ${({ flip }) =>
      flip &&
      css`
        transform: translateX(0rem);
      `}
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
  max-width: 20rem;

  @media ${QUERIES.tabletMini} {
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

export const ProductButton = styled.div``;
