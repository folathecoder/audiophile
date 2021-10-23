import { useState } from "react";
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
import CheckoutModal from "components/checkout/checkoutModal/checkoutModal";
import Overlay from "components/shared/overlay/overlay";

const CheckoutSummary = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleActivateModal = () => {
    setShowModal(true);
    document.querySelector("header").style.zIndex = "1";
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
      {showModal && <CheckoutModal />}
      {showModal && <Overlay maxOverlay />}
    </>
  );
};

export default CheckoutSummary;
