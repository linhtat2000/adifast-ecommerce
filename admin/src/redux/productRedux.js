import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductError } =
  productSlice.actions;
export default productSlice.reducer;
