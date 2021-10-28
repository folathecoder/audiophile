import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const SummaryContainer = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: var(--color-sec-200);
  border-radius: var(--border-radius);
  min-height: 10rem;

  @media ${QUERIES.tabletMini} {
    padding: 1rem 2.9rem 2rem 2.9rem;
  }

  @media ${QUERIES.tablet} {
    position: sticky;
    top: 7rem;
  }
`;

export const SummaryHeading = styled.h2`
  text-transform: uppercase;
  font-size: 1.125rem;
`;
export const SummaryWrap = styled.div`
  height: 15rem;
  max-width: 100%;
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

export const CartInnerWrap = styled.div``;

export const CheckoutTotal = styled.div`
  margin-top: 1rem;
`;
export const CheckoutTotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2rem;
`;
export const CheckoutDetail = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  line-height: 1.5625rem;
  font-weight: var(--font-weight-400);
  color: var(--color-sec-700);
`;
export const CheckoutAmount = styled.p`
  font-weight: var(--font-weight-400);
`;
export const CheckoutGrandTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
`;
export const CheckoutTotalAmount = styled.p`
  font-weight: var(--font-weight-400);
  color: var(--color-pry-100);
`;

export const CheckoutButton = styled.button`
  cursor: pointer;
  background-color: var(--color-pry-100);
  color: var(--color-sec-200);
  min-height: 3rem;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  transition: var(--transition);
  border: none;
  text-transform: uppercase;
  font-weight: var(--font-weight-400);
  font-family: var(--font-pry-100);
  letter-spacing: 0.0625rem;

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    color: var(--color-sec-200);
  }
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
