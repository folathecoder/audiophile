import { useAppSelector, useAppDispatch } from "redux/types/reduxTypes";
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
import { productTotal } from "redux/slices/cartSlice";
import { modalOpen } from "redux/slices/modalSlice";
import { shippingFee, vatFee, grandTotal } from "helpers/fees";
import { toast } from "react-toastify";

const CheckoutSummary = (): JSX.Element => {
  const dispatch = useAppDispatch();

  //TODO: State => Extract cart data from state
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //TODO: State => Get the total price of cart products from the state
  const total = useAppSelector(productTotal);

  //TODO: State => Get the state of the checkout form submission
  const isFormSubmitted = useAppSelector((state) => state.formSubmit.value);

  //TODO: Pricing => Calculate cart fees
  const shipping = shippingFee(total);
  const vat = vatFee(total);
  const grand = grandTotal(total, shipping, vat);

  //TODO: Activate modal by setting showModal state to true onClick
  const handleActivateModal = () => {
    // Ensure that the cart is not empty
    if (cartItems.length === 0) {
      toast.error(`Your cart is empty!`, {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      if (isFormSubmitted) {
        dispatch(modalOpen(true));
      } else {
        toast.error(`Complete the checkout form!`, {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  return (
    <>
      <SummaryContainer>
        <SummaryHeading>summary</SummaryHeading>
        <SummaryWrap>
          <CartInnerWrap>
            {cartItems.length === 0 && (
              <EmptyCart>Your cart is empty!</EmptyCart>
            )}
            {cartItems.length > 0 &&
              cartItems?.map((cartItem) => {
                return <CartItem key={cartItem.id} data={cartItem} summary />;
              })}
          </CartInnerWrap>
        </SummaryWrap>
        <CheckoutTotal>
          <CheckoutTotalItem>
            <CheckoutDetail>total</CheckoutDetail>
            <CheckoutAmount>
              {CURRENCY_SYMBOL} {total.toLocaleString("en-US")}
            </CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutTotalItem>
            <CheckoutDetail>shipping</CheckoutDetail>
            <CheckoutAmount>
              {CURRENCY_SYMBOL} {shipping}
            </CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutTotalItem>
            <CheckoutDetail>vat (included)</CheckoutDetail>
            <CheckoutAmount>
              {CURRENCY_SYMBOL} {vat.toLocaleString("en-US")}
            </CheckoutAmount>
          </CheckoutTotalItem>
          <CheckoutGrandTotal>
            <CheckoutDetail>grand total</CheckoutDetail>
            <CheckoutTotalAmount>
              {CURRENCY_SYMBOL} {grand.toLocaleString("en-US")}
            </CheckoutTotalAmount>
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
