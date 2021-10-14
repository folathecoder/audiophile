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
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    gap: 1rem;
  }
  @media ${QUERIES.tablet} {
    gap: 2rem;
  }

  & > * {
    flex: 1;
  }
`;

export const CardImageWrap = styled.div`
  min-height: 20rem;
  border-radius: var(--border-radius);
  background-image: url("images/home/mobile/image-earphones-yx1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardContentWrap = styled.div`
  min-height: 20rem;
  margin-top: 1.5rem;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  background-color: var(--color-pry-500);

  @media ${QUERIES.tabletMini} {
    margin-top: 0rem;
  }
`;
export const CardContent = styled.div`
  margin: 0rem 1.5rem;

  @media ${QUERIES.tabletMini} {
    margin-left: 3.75rem;
  }

  @media ${QUERIES.tablet} {
    margin-left: 5.875rem;
  }
`;

export const CardHeading = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

export const CardButton = styled.div``;
