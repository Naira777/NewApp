import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const BrandSlice = createSlice({
  name: "Brands",
  initialState: {
   brands: [], 


  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getBrands.fulfilled, (state, action) => {
       state.brands = action.payload.data?.data;
       console.log(action.payload.data?.data)
    })

   
  },
});

export default BrandSlice;