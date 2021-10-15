import styled, { css } from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const MenuContainer = styled.section`
  max-width: 100%;
  min-height: 52.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  position: relative; 

  @media ${QUERIES.tabletMini} {
    min-height: 25rem;
    padding: 0rem 2rem;

    ${({ trimHeight }) =>
      trimHeight &&
      css`
        min-height: 20rem;
      `}
  }

  @media ${QUERIES.tablet} {
    min-height: 34rem;

    ${({ trimHeight }) =>
      trimHeight &&
      css`
        min-height: 30rem;
      `}
  }
`;

export const MenuWrap = styled.div`
  width: var(--max-container);
  margin: var(--center-container);
  flex-direction: column;

  @media ${QUERIES.tabletMini} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 10rem;
    gap: 1rem;
  }

  & > * {
    flex: 1;
    margin: 4.25rem auto 0rem auto;

    @media ${QUERIES.tablet} {
      margin: 0rem auto;
    }
  }
`;
