import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface modalSliceType {
  value: boolean;
}

const initialState: modalSliceType = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { modalOpen } = modalSlice.actions;

export default modalSlice.reducer;
