import {
  SummaryContainer,
  SummaryHeading,
  SummaryWrap,
  CheckoutTotal,
  CheckoutTotalItem,
  CheckoutDetail,
  CheckoutAmount,
  CheckoutGrandTotal,
  CheckoutTotalAmount,
  CheckoutButton,
  EmptyCart,
  CartInnerWrap,
} from "components/checkout/checkoutSummary/checkoutSummaryStyles";
import { CURRENCY_SYMBOL } from "helpers/constants";
import CartItem from "components/shared/cartItem/cartItem";

const CheckoutSummary = ({ setShowModal }): JSX.Element => {

  //TODO: Activate modal by setting showModal state to true onClick
  const handleActivateModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <SummaryContainer>
        <SummaryHeading>summary</SummaryHeading>
        <SummaryWrap>
          <CartInnerWrap>
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
            <CartItem summary />
          </CartInnerWrap>
          {/* <EmptyCart>Your cart is empty!</EmptyCart> */}
        </SummaryWrap>
        <CheckoutTotal>
          <CheckoutTotalItem>
            <CheckoutDetail>total</CheckoutDetail>
            <CheckoutAmount>{CURRENCY_SYMBOL} 0</CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutTotalItem>
            <CheckoutDetail>shipping</CheckoutDetail>
            <CheckoutAmount>{CURRENCY_SYMBOL} 0</CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutTotalItem>
            <CheckoutDetail>vat (included)</CheckoutDetail>
            <CheckoutAmount>{CURRENCY_SYMBOL} 0</CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutGrandTotal>
            <CheckoutDetail>grand total</CheckoutDetail>
            <CheckoutTotalAmount>{CURRENCY_SYMBOL} 0</CheckoutTotalAmount>
          </CheckoutGrandTotal>
          <CheckoutTotalItem>
            <CheckoutButton
              form="checkoutForm"
              type="submit"
              onClick={handleActivateModal}
            >
              continue & pay
            </CheckoutButton>
          </CheckoutTotalItem>
        </CheckoutTotal>
      </SummaryContainer>
    </>
  );
};

export default CheckoutSummary;
