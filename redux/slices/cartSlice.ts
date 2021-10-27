import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "data/types/productType";
import { toast } from "react-toastify";
import { RootState } from "redux/store";

//TODO: cartSlice interface
interface CartSliceType {
  cartItems: ProductType[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

//TODO: Declare the initial state of the cartSlice (Get cartItems data from the localStorage)
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
    //TODO: Reducer => Add products to the cart and update localStorage (with toastify alerts)
    addItemToCart(state, action: PayloadAction<ProductType>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

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
    //TODO: Reducer => Increase the number of products in the cart (with toastify alerts)
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Increased ${action.payload.name} quantity`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //TODO: Reducer => Decrease the number of products in the cart (with toastify alerts)
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(`Decreased ${action.payload.name} quantity`, {
          position: "top-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(`Removed ${action.payload.name} form cart`, {
          position: "top-left",
        });
      }
    },
    //TODO: Reducer => Clear all products in the cart and localStorage (with toastify alerts)
    clearCart(state, action) {
      if (action.payload === true) {
        state.cartItems = [];
        state.cartTotalAmount = 0;
        state.cartTotalQuantity = 0;
      }
      localStorage.removeItem("cartItems");
      toast.error(`Your cart is cleared`, {
        position: "top-left",
      });
    },

    totalQuantity(state, action: PayloadAction<number>) {
      let { total, quantity } = (state.cartItems || []).reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const subTotal = (state: RootState) => {
  const total = (state.cart.cartItems || [])
    .map((cartItem) => cartItem.cartQuantity)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(total);
  return total;
};

export const {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  totalQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
