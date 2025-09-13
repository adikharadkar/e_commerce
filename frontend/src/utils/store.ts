import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducers/Cart";

const store = configureStore({
  reducer: {
    cart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
