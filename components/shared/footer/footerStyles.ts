import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const FooterContainer = styled.footer`
  max-width: 100%;
  background-color: var(--color-sec-300);
  padding: 0rem 1rem;
`;

export const FooterWrap = styled.div`
  max-width: var(--max-container);
  /* min-height: 22.8125rem; */
  min-height: 40.875rem;
  margin: var(--center-container);
  background-color: black;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FooterDesignWrap = styled.div``;

export const FooterDesign = styled.div`
  height: 0.25rem;
  width: 6.3125rem;
  background-color: var(--color-pry-100);
`;

export const FooterContentOne = styled.div`
  /* background-color: blue; */

  & > * {
    display: flex;
    align-items: center;
  }
`;
export const FooterLogoWrap = styled.div`
  min-height: 6.25rem;
`;
export const FooterLogo = styled.div``;
export const FooterMenu = styled.div`
  /* background-color: red; */
`;
export const MenuWrap = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 11.875rem;
`;
export const MenuWrapItem = styled.li`
  text-transform: uppercase;
`;

export const FooterContentTwo = styled.div`
  /* background-color: green; */
`;
export const FooterInfoWrap = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  min-height: 12.5rem;
`;
export const FooterInfo = styled.p`
  text-align: center;
  color: var(--color-sec-500);
`;
export const FooterSocialWrap = styled.div``;
export const FooterSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 6.5625rem;
  /* background-color: red; */
  display: none;
`;
export const FooterSocialItem = styled.li``;
export const SocialLink = styled.a``;
export const Social = styled.i`
  font-size: 1.5rem;
`;

export const FooterContentThree = styled.div`

  & > * {
    display: flex;
    align-items: center;
  }
`;
export const FooterCopyright = styled.p`
  font-weight: var(--font-weight-400);
  min-height: 4.5rem;
  color: var(--color-sec-500);
`;
export const FooterSocialMobile = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 6.5625rem;
  min-height: 4.5rem;
`;
