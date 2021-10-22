import styled from "styled-components";

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
  height: 15rem;
  width: 100%;
  margin: 1rem 0rem;
  /* background-color: var(--color-sec-600); */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: thin !important;
  scrollbar-color: var(--color-pry-500) var(--color-sec-200);

  &::-webkit-scrollbar {
    width: thin;
  }

  &::-webkit-scrollbar-track {
    border-radius: var(--border-radius);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: var(--border-radius);
    background-color: var(--color-pry-100);
  }
`;

export const CartInnerWrap = styled.div``

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
  font-weight: var(--font-weight-400);
  color: var(--color-sec-700);
`;
export const CartAmount = styled.p`
  font-weight: var(--font-weight-400);
`;
export const CartButtonWrap = styled.div``;
