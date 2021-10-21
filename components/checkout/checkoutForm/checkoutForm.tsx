import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Form,
  FormSection,
  CheckoutHeading,
  FormSectionHeading,
  FormInputWrap,
  FormInput,
  FormLabel,
  FormError,
  FormBreak,
  FormPaymentWrap,
  FormPaymentHeading,
  FormPaymentOption,
  FormPaymentInput,
  EmoneyWrap,
  CashOnWrap,
  CashOnImage,
  CashOnContent,
} from "components/checkout/checkoutForm/checkoutFormStyles";

const CheckoutForm = (): JSX.Element => {
  //TODO: Maintain payment mode prefrence state
  const [paymentMode, setPaymentMode] = useState<boolean>(true);

  //TODO: Handle => "Cash On Delivery" onClick
  const handleOnDelivery = () => {
    setPaymentMode(false);
  };

  //TODO: Handle => "E-Money" onClick
  const handleOnEmoney = () => {
    setPaymentMode(true);
  };

  //TODO: Handle => Extract payment mode prefrence from localStorage
  useEffect(() => {
    const getPaymentMode = localStorage.getItem("paymentMode");
    setPaymentMode(JSON.parse(getPaymentMode));
  }, []);

  //TODO: Handle => Save payment mode prefrence to localStorage
  useEffect(() => {
    localStorage.setItem("paymentMode", JSON.stringify(paymentMode));
  });

  return (
    <Form>
      <CheckoutHeading>checkout</CheckoutHeading>
      <FormSection>
        <FormSectionHeading>billing details</FormSectionHeading>
        <FormInputWrap>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="name">name</label>
                <FormError>Enter your name!</FormError>
              </FormLabel>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Alexei Ward"
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="email">email address</label>
                <FormError>Wrong email format!</FormError>
              </FormLabel>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="alexei@mail.com"
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="phone">phone number</label>
                <FormError>Enter your phone number!</FormError>
              </FormLabel>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 202-555-0136"
              />
            </FormInput>
          </FormBreak>
        </FormInputWrap>
      </FormSection>
      <FormSection>
        <FormSectionHeading>shipping info</FormSectionHeading>
        <FormInputWrap>
          <FormInput>
            <FormLabel>
              <label htmlFor="address">address</label>
              <FormError>Enter your address!</FormError>
            </FormLabel>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
            />
          </FormInput>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="zipCode">zip code</label>
                <FormError>Enter your zip code!</FormError>
              </FormLabel>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                placeholder="10001"
              />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="city">city</label>
                <FormError>Enter your city!</FormError>
              </FormLabel>
              <input type="text" name="city" id="city" placeholder="new york" />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <FormLabel>
                <label htmlFor="country">country</label>
                <FormError>Enter your country!</FormError>
              </FormLabel>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="united states"
              />
            </FormInput>
          </FormBreak>
        </FormInputWrap>
        <FormInputWrap>
          <FormSectionHeading>payment details</FormSectionHeading>
          <FormPaymentWrap>
            <FormPaymentHeading>payment method</FormPaymentHeading>
            <FormPaymentOption>
              <FormPaymentInput>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="emoney"
                  value="e-Money"
                  onClick={handleOnEmoney}
                  checked={paymentMode === true ? true : false}
                />

                <label htmlFor="emoney">e-Money</label>
              </FormPaymentInput>
              <FormPaymentInput>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="Cash on Delivery"
                  onClick={handleOnDelivery}
                  checked={paymentMode === false ? true : false}
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </FormPaymentInput>
            </FormPaymentOption>
          </FormPaymentWrap>
        </FormInputWrap>
        {paymentMode && (
          <EmoneyWrap>
            <FormInputWrap className="customInput">
              <FormBreak>
                <FormInput>
                  <FormLabel>
                    <label htmlFor="emoneyNumber">e-Money Number</label>
                    <FormError>Enter e-Money Number!</FormError>
                  </FormLabel>
                  <input
                    type="text"
                    name="emoneyNumber"
                    id="emoneyNumber"
                    placeholder="238521993"
                  />
                </FormInput>
              </FormBreak>
              <FormBreak>
                <FormInput>
                  <FormLabel>
                    <label htmlFor="emoneyPin">e-Money PIN</label>
                    <FormError>Enter e-Money PIN!</FormError>
                  </FormLabel>
                  <input
                    type="text"
                    name="emoneyPin"
                    id="emoneyPin"
                    placeholder="6891"
                  />
                </FormInput>
              </FormBreak>
            </FormInputWrap>
          </EmoneyWrap>
        )}
        {!paymentMode && (
          <CashOnWrap>
            <CashOnImage>
              <Image
                src="/images/shared/payondelivery.png"
                alt="pay on delivery"
                layout="fill"
              />
            </CashOnImage>
            <CashOnContent>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </CashOnContent>
          </CashOnWrap>
        )}
      </FormSection>
    </Form>
  );
};

export default CheckoutForm;
