import Image from "next/image";
import { useEffect } from "react";
import {
  ModalContainer,
  ModalWrap,
  ModalIconWrap,
  ModalHeader,
  ModalMessage,
  ModalSummary,
  ModalSummaryDetails,
  CartItemWrap,
  CartItemMore,
  ModalSummaryTotal,
  ModalTotal,
  ModalButtonWrap,
} from "components/checkout/checkoutModal/CheckoutModalStyles";
import Button from "components/shared/button/button";
import CartItem from "components/shared/cartItem/cartItem";

const CheckoutModal = (): JSX.Element => {
  //TODO: Automatically hide overlay when modal is activated
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  //TODO: Restore default style when modal is exited
  const handleStyleRestore = () => {
    document.body.style.overflow = "auto";
    document.querySelector("header").style.zIndex = "2000";
  };

  return (
    <ModalContainer>
      <ModalWrap>
        <ModalIconWrap>
          <Image src="/images/shared/success.svg" alt="success" layout="fill" />
        </ModalIconWrap>
        <ModalHeader>
          thank you
          <br /> for your order
        </ModalHeader>
        <ModalMessage>
          You will receive an email confirmation shortly.
        </ModalMessage>
        <ModalSummary>
          <ModalSummaryDetails>
            <CartItemWrap>
              <CartItem summary />
            </CartItemWrap>
            <CartItemMore>
              <p>and 2 other item(s)</p>
            </CartItemMore>
          </ModalSummaryDetails>
          <ModalSummaryTotal>
            <ModalTotal>
              <h3>grand total</h3>
              <p>$ 5,446</p>
            </ModalTotal>
          </ModalSummaryTotal>
        </ModalSummary>
        <ModalButtonWrap>
          <Button link="/" block event={handleStyleRestore}>
            back to home
          </Button>
        </ModalButtonWrap>
      </ModalWrap>
    </ModalContainer>
  );
};

export default CheckoutModal;
