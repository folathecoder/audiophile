import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  background-color: var(--color-sec-300);
  padding: 0rem 2rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;

  @media screen and (max-width: 786px) {
    padding: 0rem;
  }

  @media screen and (max-width: 650px) {
    ${({ menuToggle, cartToggle }) =>
      menuToggle || cartToggle
        ? css`
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            z-index: 2000;
          `
        : css`
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2000;
          `}
  }
`;

export const HeaderWrap = styled.div`
  max-width: 1100px;
  min-height: 6rem;
  margin: var(--center-container);
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid var(--color-sec-400);
  background-color: var(--color-sec-300);
  z-index: 2000;
  position: relative;

  @media screen and (max-width: 786px) {
    min-height: 5rem;
    padding: 0rem 1rem;
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
  flex: 3;
  justify-content: center;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const MenuWrap = styled.ul`
  min-width: 26.8125rem;
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
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

export const Cart = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;
`;

export const CartNumber = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--color-pry-100);
  color: var(--color-sec-200);
  position: absolute;
  border-radius: 100%;
  border: none;
  margin: -2.15rem 0rem 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  p {
    font-size: 0.6rem;
    line-height: 0rem;
    font-weight: var(--font-pry-100);
  }
`;

export const MobileNav = styled.nav`
  display: none;

  @media screen and (max-width: 786px) {
    display: flex;
  }
`;
export const MobileToggle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  i {
    color: var(--color-pry-300);
    font-size: 1.5rem;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  background-color: var(--color-sec-200);
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 5rem;
  padding: 1rem;
  flex-direction: column;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  gap: 1rem;

  @media screen and (min-width: 650px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 10rem;
  }

  & > * {
    flex: 1;
    margin: 4.25rem auto 0rem auto;
  }
`;