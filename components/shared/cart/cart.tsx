import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes";
import {
  CartContainer,
  CartWrap,
  CartHeader,
  CartHeading,
  CartRemoveButton,
  Cart,
  CartInnerWrap,
  EmptyCart,
  CheckoutTotalItem,
  CartDetail,
  CartAmount,
  CartButtonWrap,
} from "components/shared/cart/cartStyles";
import { useRouter } from "next/router";
import Button from "components/shared/button/button";
import CartItem from "components/shared/cartItem/cartItem";
import { toggleCartMenu } from "redux/slices/cartMenuSlice";
import { clearCart, productTotal } from "redux/slices/cartSlice";
import { CURRENCY_SYMBOL } from "helpers/constants";
import { toast } from "react-toastify";
import { toastAction } from "helpers/toastify";

const CartMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //TODO: State => Get the total price of products in the cart
  const total = useAppSelector(productTotal);

  //TODO: State => Get cart data from state
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //TODO: Event => Close cart menu when checkout button is clicked
  const handleCartClose = () => {
    dispatch(toggleCartMenu(false));

    if (cartItems.length === 0) {
      setTimeout(() => {
        router.back();
      }, 5000);
      toast.error(
        `Your cart is empty, you will be redirected in 5 seconds!`,
        toastAction
      );
    }
  };

  //TODO: State => Clear all the cart items and update the state
  const handleClearCart = () => {
    dispatch(clearCart(true));
  };

  return (
    <CartContainer>
      <CartWrap>
        <CartHeader>
          <CartHeading>cart ({cartItems.length})</CartHeading>
          <CartRemoveButton onClick={handleClearCart}>
            Remove all
          </CartRemoveButton>
        </CartHeader>
        <Cart>
          <CartInnerWrap>
            {cartItems.length === 0 && (
              <EmptyCart>Your cart is empty!</EmptyCart>
            )}
            {cartItems.length > 0 &&
              cartItems?.map((cartItem) => {
                return <CartItem key={cartItem.id} data={cartItem} editable />;
              })}
          </CartInnerWrap>
        </Cart>
        <CheckoutTotalItem>
          <CartDetail>total</CartDetail>
          <CartAmount>
            {CURRENCY_SYMBOL} {total.toLocaleString("en-US")}
          </CartAmount>
        </CheckoutTotalItem>
        <CartButtonWrap>
          <Button event={handleCartClose} link="/checkout" block>
            checkout
          </Button>
        </CartButtonWrap>
      </CartWrap>
    </CartContainer>
  );
};

export default CartMenu;
