import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const HeaderContainer = styled.header`
  max-width: 100%;
  background-color: var(--color-pry-200);
  padding: 0rem 2rem;

  @media screen and (max-width: 576px) {
    padding: 0rem 1rem;
  }
`;

export const HeaderWrap = styled.div`
  max-width: 1100px;
  min-height: 6rem;
  margin: var(--center-container);
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #979797;

  @media screen and (max-width: 786px) {
    min-height: 5rem;
  }

  & > * {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const HeaderLogoWrap = styled.div`
  @media screen and (max-width: 786px) {
    flex: 10;
  }

  @media screen and (max-width: 576px) {
    /* flex: 1; */
    justify-content: center;
  }
`;
export const HeaderLogo = styled.div`
  img {
    display: none;

    @media screen and (max-width: 786px) {
      width: 143px;
      height: auto;
    }
  }
`;
export const HeaderMenu = styled.nav`
  /* background-color: green; */
  flex: 3;
  justify-content: center;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;
export const MenuWrap = styled.ul`
  min-width: 26.8125rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    min-width: 22.8125rem;
  }
`;
export const MenuWrapItem = styled.li`
  text-transform: uppercase;
`;
export const CartWrap = styled.div`
  background-color: black;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

export const Cart = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const MobileNav = styled.div`
  display: none;
  /* background-color: pink; */

  @media screen and (max-width: 786px) {
    display: flex;
  }
`;
export const MobileToggle = styled.button`
  border: none;
  background-color: transparent;

  i {
    color: var(--color-pry-300);
    font-size: 1rem;
  }
`;
