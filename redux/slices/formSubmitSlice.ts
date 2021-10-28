import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const formSubmitSlice = createSlice({
  name: "formSubmit",
  initialState,
  reducers: {
    checkFormSubmit: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
    },
  },
});

export const { checkFormSubmit } = formSubmitSlice.actions;

export default formSubmitSlice.reducer;
