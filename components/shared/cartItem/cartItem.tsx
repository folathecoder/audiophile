import Image from "next/image";
import {
  CartItemWrap,
  CartItemImage,
  CartItemDetail,
  CartItemCounter,
} from "components/shared/cartItem/cartItemStyles";
import ProductCounter from "components/shared/counter/productCounter";

const CartItem = () => {
  return (
    <CartItemWrap>
      <CartItemImage>
        <Image src="/images/cart/image-zx9-speaker.jpg" alt=" " layout="fill" />
      </CartItemImage>
      <CartItemDetail>
        <h4>xx99 mk II</h4>
        <p>$ 2,999</p>
      </CartItemDetail>
      <CartItemCounter>
          <ProductCounter custom/>
      </CartItemCounter>
    </CartItemWrap>
  );
};

export default CartItem;
