import Image from "next/image";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/types/reduxTypes";
import { useRouter } from "next/router";
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
import { RootState } from "redux/store";
import { convertToUpperCase } from "helpers/textFormating";
import { productTotal, clearCart } from "redux/slices/cartSlice";
import { shippingFee, vatFee, grandTotal } from "helpers/fees";
import { CURRENCY_SYMBOL } from "helpers/constants";

const CheckoutModal = (): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: Access the checkout form data
  const userData = useAppSelector(
    (state: RootState) => state.checkoutFormData.value
  );

  //TODO: State => Get the total price of cart products from the state
  const total = useAppSelector(productTotal);

  //TODO: State => Extract cart data from state
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  //TODO: Automatically transform first alphabet of the user's name to uppercase before being rendered
  const username = convertToUpperCase(userData.name);

  //TODO: Automatically hide overlay when modal is activated
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  //TODO: Restore default style when modal is exited
  const handleStyleRestore = () => {
    document.body.style.overflow = "auto";
    document.querySelector("header").style.zIndex = "2000";
  };

  //TODO: Handle => Function that redirects user to homepage when "Escape" key is pressed
  const router = useRouter();
  const redirectOnEscape = (e) => {
    if (e.key === "Escape") {
      router.push("/");
    }
  };

  //TODO: Event => Redirect user to homepage when "Escape" key is pressed
  useEffect(() => {
    window.addEventListener("keydown", redirectOnEscape);

    return () => {
      window.removeEventListener("keydown", redirectOnEscape);
    };
  }, [router]);

  //TODO: Pricing => Calculate cart fees
  const shipping = shippingFee(total);
  const vat = vatFee(total);
  const grand = grandTotal(total, shipping, vat);

  //TODO: State => Clear all the cart items and update the state
  const handleClearCart = () => {
    dispatch(clearCart(true));
  };

  return (
    <ModalContainer>
      <ModalWrap>
        <ModalIconWrap>
          <Image
            src="/images/shared/success.svg"
            alt=""
            aria-hidden="true"
            layout="fill"
          />
        </ModalIconWrap>
        <ModalHeader>
          thank you
          <br /> for your order
        </ModalHeader>
        <ModalMessage>
          {username}, you will receive an email confirmation shortly.
        </ModalMessage>
        <ModalSummary>
          <ModalSummaryDetails>
            <CartItemWrap>
              {cartItems
                .map((cartItem) => {
                  return <CartItem key={cartItem.id} data={cartItem} summary />;
                })
                .slice(0, 1)}
            </CartItemWrap>
            {cartItems.length > 1 && (
              <CartItemMore>
                <p>and {cartItems.length - 1} other item(s)</p>
              </CartItemMore>
            )}
          </ModalSummaryDetails>
          <ModalSummaryTotal>
            <ModalTotal>
              <h3>grand total</h3>
              <p>
                {CURRENCY_SYMBOL} {grand}
              </p>
            </ModalTotal>
          </ModalSummaryTotal>
        </ModalSummary>
        <ModalButtonWrap onClick={handleClearCart}>
          <Button
            link="/"
            block
            event={handleStyleRestore}
          >
            back to home
          </Button>
        </ModalButtonWrap>
      </ModalWrap>
    </ModalContainer>
  );
};

export default CheckoutModal;
