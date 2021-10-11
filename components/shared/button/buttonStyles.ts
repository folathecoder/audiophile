import styled from "styled-components";

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

  &:hover {
    transition: var(--transition);
    background-color: var(--color-sec-100);
    color: var(--color-sec-200);
  }
`;
