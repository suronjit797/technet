/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICartState {
  products: IProduct[];
  total: number;
}

const initialState: ICartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find((p) => p._id === action.payload._id);
      state.total += action.payload.price;
      if (isExist) {
        isExist.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find((p) => p._id === action.payload._id);
      if (isExist && isExist.quantity! > 1) {
        isExist.quantity! -= 1;
        state.total -= action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const products = state.products.filter(
        (p) => p._id !== action.payload._id
      );
      state.products = products;

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeOneFromCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
