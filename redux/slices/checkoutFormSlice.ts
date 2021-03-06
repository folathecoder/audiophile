import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { InputDataType } from "data/types/checkoutInputType";

//TODO: Manage the checkout form input data state and fetch data from localStorage if present
const initialStateValue: InputDataType | null =
  typeof window !== "undefined" &&
  (localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null);

export const cartCheckoutFormSlice = createSlice({
  name: "cartMenu",
  initialState: { value: initialStateValue },
  reducers: {
    checkoutFormData: (state, action: PayloadAction<InputDataType>) => {
      state.value = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.value));
    },
  },
});

export const { checkoutFormData } = cartCheckoutFormSlice.actions;

export default cartCheckoutFormSlice.reducer;
