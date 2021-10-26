import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "data/types/productType";
import { toast } from "react-toastify";

interface CartSliceType {
  cartItems: ProductType[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartSliceType = {
  cartItems:
    typeof window !== "undefined" &&
    (localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ProductType>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const currentPrice = action.payload.price * action.payload.cartQuantity;

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        });
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQuantity(state, action) {},
    decreaseQuantity(state, action) {},
    clearCart: () => {
      return initialState
    },
  },
});

export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;