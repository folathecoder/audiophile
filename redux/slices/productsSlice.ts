import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductType } from "data/types/productType";
// import type {ProductsType} from "data/types/productType"

interface ProductsSliceType {
  items: ProductType[];
  status: string | null;
}

const initialState: ProductsSliceType = {
  items: [],
  status: "",
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
         const response = await fetch(
           "https://audiophile-api.herokuapp.com/products"
         );
         if (response.ok) {
           const data = (await response.json()) as ProductType[];
           return data;
         } 
    } catch (error) {
      
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.items = action.payload;
    });
  },
});

export default productsSlice.reducer;
