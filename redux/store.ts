import { configureStore } from "@reduxjs/toolkit";
import cartMenuReducer from "redux/slices/cartMenuSlice";
import checkoutDataReducer from "redux/slices/checkoutFormSlice";
import productsReducer, { productsFetch } from "redux/slices/productsSlice";
import cartReducer from "redux/slices/cartSlice";
import formSubmitReducer from "redux/slices/formSubmitSlice";
import modalReducer from "redux/slices/modalSlice";

//TODO: Manage the universal state of the application
export const store = configureStore({
  reducer: {
    cartMenu: cartMenuReducer,
    checkoutFormData: checkoutDataReducer,
    products: productsReducer,
    cart: cartReducer,
    formSubmit: formSubmitReducer,
    modal: modalReducer,
  },
});

store.dispatch(productsFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
