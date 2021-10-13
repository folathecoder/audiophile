import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CardContainer = styled.section`
  max-width: 100%;
  padding: 0.75rem 1rem 0.75rem 1rem;

  @media ${QUERIES.mobile} {
    padding: 1rem 2rem 1rem 2rem;
  }
`;
export const CardWrap = styled.div`
  min-height: 20rem;
  max-width: var(--max-container);
  margin: var(--center-container);
  border-radius: var(--border-radius);
  background-image: url("images/home/mobile/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${QUERIES.mobile} {
    background-image: url("images/home/tablet/image-speaker-zx7.jpg");
  }

  @media ${QUERIES.tablet} {
    background-image: url("images/home/desktop/image-speaker-zx7.jpg");
  }
`;
export const CardImageWrap = styled.div`
  display: none;
`;

export const CardContentWrap = styled.div`
  margin: 0rem 1.5rem;

  @media ${QUERIES.tabletMini} {
    margin-left: 3.75rem;
  }

  @media ${QUERIES.tablet} {
    margin-left: 5.875rem;
  }
`;

export const CardContent = styled.div``;

export const CardHeading = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

export const CardButton = styled.div``;
