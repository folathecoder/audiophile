import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface formSubmitSliceType {
  value: boolean;
}

const initialState: formSubmitSliceType = {
  value: false,
};

const formSubmitSlice = createSlice({
  name: "formSubmit",
  initialState,
  reducers: {
    checkFormSubmit: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { checkFormSubmit } = formSubmitSlice.actions;

export default formSubmitSlice.reducer;
