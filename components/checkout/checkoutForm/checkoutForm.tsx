import {
  Form,
  FormSection,
  FormSectionHeading,
  FormInputWrap,
  FormInput,
  FormBreak
} from "components/checkout/checkoutForm/checkoutFormStyles";

const CheckoutForm = () => {
  return (
    <Form>
      <FormSection>
        <FormSectionHeading>billing details</FormSectionHeading>
        <FormInputWrap>
          <FormBreak>
            <FormInput>
              <label htmlFor="name">name</label>
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
              <label htmlFor="email">email address</label>
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
              <label htmlFor="phone">phone number</label>
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
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
            />
          </FormInput>
          <FormBreak>
            <FormInput>
              <label htmlFor="zipCode">zip code</label>
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
              <label htmlFor="city">city</label>
              <input type="text" name="city" id="city" placeholder="new york" />
            </FormInput>
          </FormBreak>
          <FormBreak>
            <FormInput>
              <label htmlFor="country">country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="united states"
              />
            </FormInput>
          </FormBreak>
        </FormInputWrap>
      </FormSection>
    </Form>
  );
};

export default CheckoutForm;
