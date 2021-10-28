import Image from "next/image";
import Link from "next/link";
import {
  CartItemWrap,
  CartItemImage,
  CartItemDetail,
  CartItemCounter,
  CartItemNumber,
} from "components/shared/cartItem/cartItemStyles";
import ProductCounter from "components/shared/counter/productCounter";
import type { ProductType } from "data/types/productType";
import { CURRENCY_SYMBOL } from "helpers/constants";

interface CartItemProps {
  summary?: boolean;
  editable?: boolean;
  data: ProductType;
}

const CartItem = ({
  summary,
  editable,
  data,
}: CartItemProps): JSX.Element => {
  return (
    <CartItemWrap>
      <Link href="/headphones" prefetch>
        <CartItemImage>
          <Image src={data.cartIcon} alt={data.name} layout="fill" priority />
        </CartItemImage>
      </Link>
      <CartItemDetail>
        <h4>{data.shortName}</h4>
        <p>
          {CURRENCY_SYMBOL} {data.subTotal.toLocaleString("en-US")}
        </p>
      </CartItemDetail>
      <CartItemCounter summary={summary}>
        <ProductCounter custom data={data} />
      </CartItemCounter>
      <CartItemNumber editable={editable}>
        <p>x{data.cartQuantity}</p>
      </CartItemNumber>
    </CartItemWrap>
  );
};

export default CartItem;
