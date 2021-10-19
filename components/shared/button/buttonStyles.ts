import styled, { css } from "styled-components";

export const ButtonContainer = styled.a`
  cursor: pointer;
  background-color: var(--color-pry-100);
  color: var(--color-sec-200);
  min-height: 3rem;
  width: 10rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  transition: var(--transition);

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    color: var(--color-sec-200);
  }

  ${({ dark }) =>
    dark &&
    css`
      background-color: var(--color-sec-300);

      &:hover {
        background-color: var(--color-pry-200);
      }
    `}

  ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border: 0.1rem solid var(--color-sec-300);
      color: var(--color-sec-300);

      &:hover {
        background-color: var(--color-sec-300);
        color: var(--color-sec-200);
      }
    `}
`;
