import { configureStore } from "@reduxjs/toolkit";
import cartMenuReducer from "redux/cartMenu";
import checkoutDataReducer from "redux/checkoutForm";

//TODO: Manage the universal state of the application
const store = configureStore({
  reducer: {
    cartMenu: cartMenuReducer,
    checkoutFormData: checkoutDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
