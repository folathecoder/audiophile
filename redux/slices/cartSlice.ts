import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "data/types/productType";
import { toast } from "react-toastify";
import { RootState } from "redux/store";

//TODO: cartSlice interface
interface CartSliceType {
  cartItems: ProductType[];
}

//TODO: Declare the initial state of the cartSlice (Get cartItems data from the localStorage)
const initialState: CartSliceType = {
  cartItems:
    typeof window !== "undefined" &&
    (localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []),
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

        //Calculate the subtotal price of each "multiple" product
        const subTotal =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].cartQuantity;
        state.cartItems[itemIndex].subTotal = subTotal;

        //Notification: Alert an increase in product quantity
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //TODO: Reducer => Increase the number of products in the cart (with toastify alerts)
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity += 1;

        //Calculate the subtotal price of each "multiple" product
        const subTotal =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].cartQuantity;
        state.cartItems[itemIndex].subTotal = subTotal;
      }

      //localStorage: Update state and push to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //TODO: Reducer => Decrease the number of products in the cart (with toastify alerts)
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        //Calculate the subtotal price of each "multiple" product
        const subTotal =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].cartQuantity;
        state.cartItems[itemIndex].subTotal = subTotal;

        //localStorage: Update state and push to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }

      //!: Delete the product from cart if the count is below 1
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;

        //localStorage: Update state and push to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        //Notification: Alert a product remove in product quantity
        toast.error(`Removed ${action.payload.name} form cart`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
    //TODO: Reducer => Clear all products in the cart and localStorage (with toastify alerts)
    clearCart(state, action) {
      if (action.payload === true) {
        state.cartItems = [];
      }

      //localStorage: Clear localStorage
      localStorage.removeItem("cartItems");

      //Notification: Alert an all-cleared product cart
      toast.error(`Your cart is cleared`, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
  },
});

//TODO: Calculate the total number of item(s) in the cart
export const totalCartQuantity = (state: RootState) => {
  const total = (state.cart.cartItems || [])
    .map((cartItem) => cartItem.cartQuantity)
    .reduce((acc, curr) => acc + curr, 0);
  return total;
};

//TODO: Calculate the total number price of products in the cart
export const productTotal = (state: RootState) => {
  const total = (state.cart.cartItems || [])
    .map((cartItem) => cartItem.subTotal)
    .reduce((acc, curr) => acc + curr, 0);

  return total;
};

export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
