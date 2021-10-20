import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const Form = styled.form`
  /* background-color: orange; */
  width: 100%;
  padding: 0rem 2.9rem;
`;
export const FormSectionHeading = styled.h3`
  margin: 2rem 0rem 1rem 0rem;
  text-transform: uppercase;
  font-size: 0.8125rem;
  color: var(--color-pry-100);
`;
export const FormSection = styled.div`
  /* background-color: pink; */
`;
export const FormInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 1rem */

  & > * {
    flex: 1 100% 100%;
    /* width: 100%; */
  }
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
  width: 100%;

  label {
    text-transform: capitalize;
    font-size: 0.75rem;
    letter-spacing: -0.013125rem;
    margin-bottom: 0.75rem;
  }

  input {
    min-height: 3.5rem;
    border-radius: var(--border-radius);
    border: none;
    border: 0.1rem solid hsl(0, 0%, 81%);
    font-family: var(--font-pry-100);
    padding: 0rem 1.5rem;
    color: var(--color-sec-400);
    font-weight: var(--font-weight-400);
    font-size: 0.875rem;
    text-transform: capitalize;
    background-color: var(--color-sec-200);

    &:focus,
    &:hover {
      outline: 0.1rem solid var(--color-pry-100);
    }
  }
`;

export const FormBreak = styled.div`
  /* width: 100%; */

  @media ${QUERIES.mobileMini} {
    flex: 1 50% 100%;
    gap: 1rem;
    width: 49%;
  }
`;
