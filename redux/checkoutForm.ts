import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

//TODO: Manage the checkout form input data state

interface InputDataType {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  emoneyNumber: number;
  emoneyPin: number;
}

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
