import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

//TODO: Manage the cart menu toggle state

const initialStateValue: boolean = false;

export const cartMenuSlice = createSlice({
  name: "cartMenu",
  initialState: { value: initialStateValue },
  reducers: {
    toggleCartMenu: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleCartMenu } = cartMenuSlice.actions;

export default cartMenuSlice.reducer;
