import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CtaContainer = styled.section`
  max-width: 100%;
  min-height: 57.5rem;
  padding: 0.75rem 1rem 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${QUERIES.mobile} {
    padding: 1rem 2rem 1rem 2rem;
  }
`;

export const CtaWrap = styled.div`
  /* background-color: pink; */
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column-reverse;

  & > * {
    flex: 1;
  }
`;

export const CtaImageWrap = styled.div`
  min-height: 18.75rem;
  /* width: 100%; */
  /* background-color: black; */
  border-radius: var(--border-radius);
  /* display: block; */
  position: relative;
  /* background-image: url("images/shared/man-headerphone.png");
  background-repeat: no-repeat;
  background-size: cover; */

  img {
    object-fit: cover;
    border-radius: var(--border-radius);
  }
`;

export const CtaContentWrap = styled.div`
  /* background-color: green; */
  /* min-height: 26.75rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 3rem;
`;
export const CtaContent = styled.div``;
export const CtaHeading = styled.h2`
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;
export const CtaHeadingHighlight = styled.span`
  color: var(--color-pry-100);
`;
export const CtaDescription = styled.p``;
