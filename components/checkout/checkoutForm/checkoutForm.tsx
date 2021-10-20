import {
  Form,
  FormSection,
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
} from "components/checkout/checkoutForm/checkoutFormStyles";

const CheckoutForm = () => {
  return (
    <Form>
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
                />
                <label htmlFor="emoney">e-Money</label>
              </FormPaymentInput>
              <FormPaymentInput>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="Cash on Delivery"
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </FormPaymentInput>
            </FormPaymentOption>
          </FormPaymentWrap>
        </FormInputWrap>
      </FormSection>
    </Form>
  );
};

export default CheckoutForm;
