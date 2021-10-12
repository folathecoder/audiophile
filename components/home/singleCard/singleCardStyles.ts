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
  background-color: red;
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
`;
export const CardImageWrap = styled.div`
  display: none;
`;

export const CardContentWrap = styled.div`
  /* background-color: red; */
  margin: 0rem 1.5rem;
`;

export const CardContent = styled.div``;

export const CardHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

export const CardButton = styled.div``;
