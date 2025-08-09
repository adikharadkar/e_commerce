import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../utils/types";

interface State {
  items: Product[];
}

const initialState: State = {
  items: [],
};

const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = Cart.actions;
export default Cart.reducer;
