import CheckoutForm from "components/checkout/checkoutForm/checkoutForm";
import CheckoutSummary from "components/checkout/checkoutSummary/checkoutSummary";
import {
  CheckoutContainer,
  CheckoutWrap,
  CheckoutFormWrap,
  CheckoutSummaryWrap,
} from "components/checkout/checkoutTemplate/checkoutTemplateStyles";

const CheckoutTemplate = ():JSX.Element => {
  return (
    <CheckoutContainer>
      <CheckoutWrap>
        <CheckoutFormWrap>
          <CheckoutForm />
        </CheckoutFormWrap>
        <CheckoutSummaryWrap>
          <CheckoutSummary />
        </CheckoutSummaryWrap>
      </CheckoutWrap>
    </CheckoutContainer>
  );
};

export default CheckoutTemplate;
