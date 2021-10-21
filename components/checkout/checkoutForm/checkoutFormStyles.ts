import styled from "styled-components";
import { QUERIES } from "helpers/mediaQueries";

export const Form = styled.form`
  max-width: 100%;
  padding: 0rem 1.5rem;
  margin-bottom: 3rem;
  background-color: var(--color-sec-200);

  @media ${QUERIES.tabletMini} {
    padding: 0rem 2.9rem;
  }
`;

export const CheckoutHeading = styled.h2`
  font-size: 1.75rem;
  margin: 2rem 0rem;
  text-transform: uppercase;

  @media ${QUERIES.tabletMini} {
    font-size: 2rem;
  }
`;

export const FormSectionHeading = styled.h3`
  margin: 2rem 0rem 1rem 0rem;
  text-transform: uppercase;
  font-size: 0.8125rem;
  color: var(--color-pry-100);
`;

export const FormSection = styled.div``;

export const FormInputWrap = styled.div`

  @media ${QUERIES.mobile} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > * {
      flex: 1 100% 100%;
    }
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

export const FormLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormError = styled.div`
  font-size: 0.75rem;
  letter-spacing: -0.013125rem;
  margin-bottom: 0.75rem;
  color: #cd2c2c;
  text-align: right;
  /* display: none; */

  & > * {
    flex: 1;
  }
`;

export const FormBreak = styled.div`
  @media ${QUERIES.mobile} {
    flex: 1 50% 100%;
    gap: 1rem;
    width: 49%;
  }
`;

export const FormPaymentWrap = styled.div`
  width: 100%;

  @media ${QUERIES.tabletMini} {
    display: flex;

    & > * {
      flex: 1;
    }
  }
`;

export const FormPaymentHeading = styled.div`
  text-transform: capitalize;
  font-size: 0.75rem;
  letter-spacing: -0.013125rem;
  margin-bottom: 0.75rem;
`;

export const FormPaymentOption = styled.div``;

export const FormPaymentInput = styled.div`
  min-height: 3.5rem;
  border-radius: var(--border-radius);
  border: none;
  border: 0.1rem solid var(--color-pry-600);
  font-family: var(--font-pry-100);
  padding-left: 1rem;
  color: var(--color-sec-400);
  font-weight: var(--font-weight-400);
  font-size: 0.875rem;
  text-transform: capitalize;
  background-color: var(--color-sec-200);
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:focus,
  &:hover {
    outline: 0.1rem solid var(--color-pry-100);
    border-radius: var(--border-radius);
  }

  label {
    margin-left: 1rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    width: 100%;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + *::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: var(--color-pry-600);
    margin-right: 1rem;
  }

  input[type="radio"]:checked + *::before {
    background: radial-gradient(
      var(--color-pry-100) 0%,
      var(--color-pry-100) 40%,
      transparent 50%,
      transparent
    );
    border-color: var(--color-pry-100);
  }
`;

export const EmoneyWrap = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const CashOnWrap = styled.div`
  @media ${QUERIES.tabletMini} {
    margin-top: 2rem;
    width: 100%;
    display: flex;

    & > * {
      flex: 1;
    }
  }
`;

export const CashOnImage = styled.div`
  flex: 1;
  position: relative;
  object-fit: contain;
  min-height: 3rem;
  margin-bottom: 1rem;

  @media ${QUERIES.tabletMini} {
    margin-bottom: 0rem;
  }

  img {
    object-fit: contain;
    max-width: 3rem;
    height: auto;
  }
`;
export const CashOnContent = styled.div`
  flex: 4;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  font-weight: var(--font-weight-100);
  letter-spacing: 0.05rem;
  text-align: center;

  @media ${QUERIES.tabletMini} {
    text-align: left;
  }
`;
