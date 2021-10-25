import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import type {ProductsType} from "data/types/productType"










const initialStateValue = {
  items: [],
  status: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: initialStateValue,
  },
  reducers: {},
});

export default productsSlice.reducer;
