import CheckoutForm from "components/checkout/checkoutForm/checkoutForm";
import {
  CheckoutContainer,
  CheckoutWrap,
  CheckoutFormWrap,
  CheckoutSummaryWrap,
  CheckoutHeading,
} from "components/checkout/checkoutTemplate/checkoutTemplateStyles";

const CheckoutTemplate = () => {
  return (
    <CheckoutContainer>
      <CheckoutWrap>
        <CheckoutFormWrap>
          <CheckoutHeading>checkout</CheckoutHeading>
          <CheckoutForm />
        </CheckoutFormWrap>
        <CheckoutSummaryWrap>Summary</CheckoutSummaryWrap>
      </CheckoutWrap>
    </CheckoutContainer>
  );
};

export default CheckoutTemplate;
