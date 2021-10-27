import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/types/reduxTypes";
import { subTotal, totalQuantity } from "redux/slices/cartSlice";

const CartCounter = () => {
  const {cartTotalQuantity} = useAppSelector((state) => state.cart);
  const count = useAppSelector(subTotal)

  console.log(count)

  return (
    <>
      <p>{count}</p>
    </>
  );
};

export default CartCounter;
