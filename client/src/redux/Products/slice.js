import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const ProductSlice = createSlice({
  name: "Products",
  initialState: {
   products: [], 
   language: '',
   
  },

  reducers: {
    langChange (state, action) {
      state.language = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getProducts.fulfilled, (state, action) => {
       state.products = action.payload.data?.data;
      
    })   
   
  },
});

export default ProductSlice;
export const {langChange} = ProductSlice.actions;
