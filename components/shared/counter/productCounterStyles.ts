import styled from "styled-components";

export const Form = styled.form`
  display: flex;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    width: 2.5rem;
    height: 3rem;
    border: none;
    background-color: var(--color-sec-500);
    -moz-appearance: textfield;
    text-align: center;
    font-weight: var(--font-weight-300);

    &:active,
    &:hover,
    &:focus {
      outline: none;
    }
  }

  label {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

export const CounterWrap = styled.div`
  max-width: 7.5;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-sec-500);
`;

export const ButtonWrap = styled.div``;

export const Button = styled.button`
  border: none;
  width: 2.5rem;
  height: 3rem;
  background-color: var(--color-sec-500);
  font-weight: var(--font-weight-400);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-600);

    i {
      transition: var(--transition);
      color: var(--color-pry-100);
    }
  }

  i {
    color: hsl(0, 0%, 30%);
    font-size: 0.5rem;
  }
`;
export const CounterInput = styled.div``;
export const CounterButton = styled.button`
  cursor: pointer;
  background-color: var(--color-pry-100);
  color: var(--color-sec-200);
  font-weight: var(--font-weight-400);
  min-height: 3rem;
  width: 10rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  border: none;
  letter-spacing: 0.0625rem;
  margin-left: 1rem;
  transition: var(--transition);

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    color: var(--color-sec-200);
  }
`;
