import styled, {css} from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CtaContainer = styled.section`
  max-width: 100%;
  min-height: 57.5rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${QUERIES.mobile} {
    min-height: 50rem;
    padding: 1rem 2rem 1rem 2rem;
  }

  @media ${QUERIES.tablet} {
    min-height: 60rem;
  }

  ${({ trimHeight }) =>
    trimHeight &&
    css`
      min-height: 50rem;

      @media ${QUERIES.mobile} {
        min-height: 45rem;
      }

      @media ${QUERIES.tablet} {
        min-height: 0rem;
        padding-bottom: 9.75rem;
      }
    `}
`;

export const CtaWrap = styled.div`
  width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column-reverse;

  @media ${QUERIES.tablet} {
    flex-direction: row;
    min-height: 36.75rem;
    width: var(--max-container);
  }

  & > * {
    flex: 1;
  }
`;

export const CtaImageWrap = styled.div`
  min-height: 18.75rem;
  border-radius: var(--border-radius);
  position: relative;

  img {
    object-fit: cover;
    border-radius: var(--border-radius);
  }
`;

export const CtaContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 3rem;

  @media ${QUERIES.tablet} {
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
`;
export const CtaContent = styled.div`

  @media ${QUERIES.tablet} {
    max-width: 27rem;
  }
`;
export const CtaHeading = styled.h2`
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 2rem;
  margin-bottom: 1rem;

  @media ${QUERIES.tabletMini} {
    font-size: 2.5rem;
    line-height: 2.75rem;
    margin-bottom: 2rem;
    max-width: 35.25rem;
    margin: 0rem auto 2rem auto;
  }
`;
export const CtaHeadingHighlight = styled.span`
  color: var(--color-pry-100);
`;
export const CtaDescription = styled.p`
  @media ${QUERIES.tabletMini} {
    max-width: 35.25rem;
  }
`;
