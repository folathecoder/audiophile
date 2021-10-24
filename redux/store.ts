import { configureStore } from "@reduxjs/toolkit";
import cartMenuReducer from "redux/cartMenu";

//TODO: Manage the universal state of the application
const store = configureStore({
  reducer: {
    cartMenu: cartMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
