import {
  CartContainer,
  CartWrap,
  CartHeader,
  CartHeading,
  CartRemoveButton,
  Cart,
  EmptyCart,
  CheckoutTotalItem,
  CartDetail,
  CartAmount,
  CartButtonWrap,
} from "components/shared/cart/cartStyles";
import Button from "components/shared/button/button";
import CartItem from "components/shared/cartItem/cartItem";

// interface CartMenuProps {
//   setCartToggle?:
// }

const CartMenu = (setCartToggle) => {

  //TODO: Event => Close cart menu when checkout button is clicked
  const handleCartClose = () => {
    setCartToggle(false);
  };
  
  return (
    <CartContainer>
      <CartWrap>
        <CartHeader>
          <CartHeading>cart (0)</CartHeading>
          <CartRemoveButton>Remove all</CartRemoveButton>
        </CartHeader>
        <Cart>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />

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