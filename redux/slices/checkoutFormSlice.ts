import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { InputDataType } from "data/types/checkoutInputType";

//TODO: Manage the checkout form input data state
const initialStateValue: InputDataType = {
  name: "",
  email: "",
  phone: 0,
  address: "",
  zipCode: 0,
  city: "",
  country: "",
  emoneyNumber: 0,
  emoneyPin: 0,
};

export const cartCheckoutFormSlice = createSlice({
  name: "cartMenu",
  initialState: { value: initialStateValue },
  reducers: {
    checkoutFormData: (state, action: PayloadAction<InputDataType>) => {
      state.value = action.payload;
    },
  },
});

export const { checkoutFormData } = cartCheckoutFormSlice.actions;

export default cartCheckoutFormSlice.reducer;
