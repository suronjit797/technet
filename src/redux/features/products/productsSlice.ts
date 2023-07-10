import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  status: boolean;
  priceRange: number;
};

const initialState = {
  status: true,
  priceRange: 100,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.status = !state.status;
    },
    changePriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { changeStatus, changePriceRange } = productsSlice.actions;

export default productsSlice.reducer;
