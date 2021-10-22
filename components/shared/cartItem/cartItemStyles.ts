import styled, { css } from "styled-components";

export const CartItemWrap = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    flex: 1;
  }
`;

export const CartItemImage = styled.div`
  position: relative;
  object-fit: contain;
  height: 4rem;
  max-width: 4rem;
  border-radius: var(--border-radius);

  img {
    object-fit: contain;
    border-radius: var(--border-radius);
  }
`;
export const CartItemDetail = styled.div`
  padding-left: 1rem;

  h4 {
    text-transform: uppercase;
    font-size: 0.8375rem;
    line-height: 1.5625rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.5625rem;
    font-weight: var(--font-weight-400);
    color: var(--color-sec-700);
  }
`;
export const CartItemCounter = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ summary }) =>
    summary &&
    css`
      display: none;
    `}
`;

export const CartItemNumber = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    font-weight: var(--font-weight-400);
    color: var(--color-sec-700);
  }
  ${({ editable }) =>
    editable &&
    css`
      display: none;
    `}
`;
