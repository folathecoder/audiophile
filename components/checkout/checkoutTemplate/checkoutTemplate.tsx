import CheckoutForm from "components/checkout/checkoutForm/checkoutForm";
import {
  CheckoutContainer,
  CheckoutWrap,
  CheckoutFormWrap,
  CheckoutSummaryWrap,
} from "components/checkout/checkoutTemplate/checkoutTemplateStyles";

const CheckoutTemplate = () => {
  return (
    <CheckoutContainer>
      <CheckoutWrap>
        <CheckoutFormWrap>
          <CheckoutForm />
        </CheckoutFormWrap>
        <CheckoutSummaryWrap>Summary</CheckoutSummaryWrap>
      </CheckoutWrap>
    </CheckoutContainer>
  );
};

export default CheckoutTemplate;
