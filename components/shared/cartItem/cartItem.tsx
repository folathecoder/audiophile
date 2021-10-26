import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "redux/types/reduxTypes";
import {
  CartItemWrap,
  CartItemImage,
  CartItemDetail,
  CartItemCounter,
  CartItemNumber,
} from "components/shared/cartItem/cartItemStyles";
import ProductCounter from "components/shared/counter/productCounter";

interface CartItemProps {
  summary?: boolean;
  editable?: boolean;
}

const CartItem = ({ summary, editable }: CartItemProps): JSX.Element => {
  return (
    <CartItemWrap>
      <Link href="/headphones" prefetch>
        <CartItemImage>
          <Image
            src="/images/cart/image-zx9-speaker.jpg"
            alt=" "
            layout="fill"
          />
        </CartItemImage>
      </Link>
      <CartItemDetail>
        <h4>xx99 mk II</h4>
        <p>$ 2,999</p>
      </CartItemDetail>
      <CartItemCounter summary={summary}>
        {/* <ProductCounter custom /> */}
      </CartItemCounter>
      <CartItemNumber editable={editable}>
        <p>x1</p>
      </CartItemNumber>
    </CartItemWrap>
  );
};

export default CartItem;
