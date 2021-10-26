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
import Button from "components/shared/button/button";
import CartItem from "components/shared/cartItem/cartItem";
import { toggleCartMenu } from "redux/slices/cartMenuSlice";
import { clearCart } from "redux/slices/cartSlice";

const CartMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //TODO: Event => Close cart menu when checkout button is clicked
  const handleCartClose = () => {
    dispatch(toggleCartMenu(false));
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <CartContainer>
      <CartWrap>
        <CartHeader>
          <CartHeading>cart (0)</CartHeading>
          <CartRemoveButton onClick={handleClearCart}>Remove all</CartRemoveButton>
        </CartHeader>
        <Cart>
          <CartInnerWrap>
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} data={cartItem} editable />;
            })}
          </CartInnerWrap>

          {/* <EmptyCart>
                Your cart is empty!
            </EmptyCart> */}
        </Cart>
        <CheckoutTotalItem>
          <CartDetail>total</CartDetail>
          <CartAmount>$ 5,000</CartAmount>
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
