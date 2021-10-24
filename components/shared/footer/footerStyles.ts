import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const FooterContainer = styled.footer`
  max-width: 100%;
  background-color: var(--color-sec-300);
  padding: 0rem 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2rem;
  }
`;

export const FooterWrap = styled.div`
  max-width: var(--max-container);
  min-height: 40.875rem;
  margin: var(--center-container);

  @media ${QUERIES.tabletMini} {
    min-height: 25rem;
  }

  @media ${QUERIES.tablet} {
    min-height: 22.8125rem;
  }

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${QUERIES.tabletMini} {
      align-items: flex-start;
    }
  }
`;

export const FooterDesignWrap = styled.div`
  @media ${QUERIES.tabletMini} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterDesign = styled.div`
  height: 0.25rem;
  width: 6.3125rem;
  background-color: var(--color-pry-100);
`;

export const FooterContentOne = styled.div`

  @media ${QUERIES.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  & > * {
    display: flex;
    align-items: center;
  }
`;
export const FooterLogoWrap = styled.div`
  min-height: 6.25rem;

  @media ${QUERIES.tabletMini} {
    min-height: 5.75rem;
    align-items: flex-end;
  }
`;

export const FooterLogo = styled.div``;
export const FooterMenu = styled.nav``;

export const MenuWrap = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 11.875rem;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    min-height: 4.5625rem;
    width: 26.6875rem;
    justify-content: space-between;
  }
  @media ${QUERIES.tablet} {
    min-height: 0rem;
  }
`;

export const MenuWrapItem = styled.li`
  text-transform: uppercase;
`;

export const FooterContentTwo = styled.div`

  @media ${QUERIES.tablet} {
    flex-direction: row;
    align-items: flex-end;

    & > * {
      flex: 1;
    }
  }
`;

export const FooterInfoWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 12.5rem;

  @media ${QUERIES.tabletMini} {
    min-height: 6.25rem;
  }

  @media ${QUERIES.tablet} {
    min-height: 8.25rem;
    align-items: flex-end;
  }
`;

export const FooterInfo = styled.p`
  text-align: center;
  color: var(--color-sec-500);

  @media ${QUERIES.tabletMini} {
    text-align: left;
  }
`;

export const FooterSocialWrap = styled.div`
  @media ${QUERIES.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const FooterSocial = styled.ul`
  justify-content: space-between;
  width: 6.5625rem;
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
  }
`;
export const FooterSocialItem = styled.li``;
export const SocialLink = styled.a``;

export const Social = styled.i`
  font-size: 1.5rem;
`;

export const FooterContentThree = styled.div`
  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 5.625rem;
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${QUERIES.tabletMini} {
      align-items: flex-end;
    }
  }
`;

export const FooterCopyrightWrap = styled.div``;

export const FooterCopyright = styled.p`
  font-weight: var(--font-weight-400);
  min-height: 4.5rem;
  color: var(--color-sec-500);
  display: flex;

  @media ${QUERIES.tabletMini} {
    align-items: flex-end;
  }
`;

export const FooterSocialMobile = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 6.5625rem;
  min-height: 4.5rem;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;
