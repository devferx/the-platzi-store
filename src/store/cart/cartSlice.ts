import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "@shared/models/cart";
import { Product } from "@shared/models/product";

export interface CartState {
  items: { [key: string]: CartItem };
}

const initialState: CartState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items[item.id];

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
