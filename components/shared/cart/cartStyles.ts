import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const CartContainer = styled.section`
  width: 23.5625rem;
  background-color: var(--color-sec-200);
  position: absolute;
  margin-top: 7rem;
  top: 0;
  right: 0;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-sizing: border-box;
  z-index: 100;

  @media screen and (max-width: 786px) {
    margin-top: 7rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -10%);
  }

  @media screen and (max-width: 400px) {
    width: 20rem;
  }
`;

export const CartWrap = styled.div`
  max-width: 100%;
  min-height: 5rem;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartHeading = styled.h3`
  text-transform: uppercase;
`;
export const CartRemoveButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  letter-spacing: 0.05rem;

  &:hover {
    transition: var(--transition);
    color: var(--color-pry-100);
  }
`;

export const Cart = styled.div`
  min-height: 5rem;
  max-width: 100%;
  margin: 1rem 0rem;
  /* background-color: var(--color-sec-600); */
  display: flex;
  flex-direction: column;
`;

export const EmptyCart = styled.div`
  width: 100%;
  min-height: 100%;
  align-self: center;
  text-align: center;
`;

export const CheckoutTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2rem;
  margin-bottom: 1rem;
`;

export const CartDetail = styled.p`
  text-transform: uppercase;
  font-size: 0.8375rem;
  line-height: 1.5625rem;
`;
export const CartAmount = styled.p`
  font-weight: var(--font-weight-400);
`;
export const CartButtonWrap = styled.div``;
