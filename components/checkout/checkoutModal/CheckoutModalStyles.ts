import styled from "styled-components";

export const ModalContainer = styled.section`
  background-color: var(--color-sec-200);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33.75rem;
  height: 36.3125rem;
  border-radius: var(--border-radius);
  z-index: 3000;
  padding: 2.9375rem;
`;
export const ModalWrap = styled.div`
  /* background-color: yellow; */
`;

export const ModalIconWrap = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: flex-start;

  img {
    object-fit: contain;
  }
`;
export const ModalHeader = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 2.25rem;
  /* max-width: 16rem; */
  margin: 2rem 0rem;
`;
export const ModalMessage = styled.p``;
export const ModalSummary = styled.div`
  height: 8.75rem;
  width: 100%;
  border-radius: var(--border-radius);
  margin: 2rem 0rem 3rem 0rem;
  display: flex;

  & > * {
    flex: 1;
  }
`;

export const ModalSummaryDetails = styled.div`
  background-color: var(--color-sec-500);
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  padding: 0rem 1rem;
  flex: 1 3rem;

  & > * {
    flex: 1;
  }
`;
export const CartItemWrap = styled.div``;

export const CartItemMore = styled.div`
  flex: 1 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.8rem;
    line-height: 1.5625rem;
    font-weight: var(--font-weight-400);
    color: var(--color-sec-700);
  }
`;

export const ModalSummaryTotal = styled.div`
  background-color: var(--color-sec-300);
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  display: flex;
  align-items: center;
`;

export const ModalTotal = styled.div`
  margin-left: 2rem;

  h3 {
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    font-weight: var(--font-weight-200);
    color: var(--color-sec-700);
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5625rem;
    font-weight: var(--font-weight-400);
    color: var(--color-sec-200);
    margin-top: 1rem;
  }
`;

export const ModalButtonWrap = styled.div``;
