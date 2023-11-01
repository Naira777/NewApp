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
    //  .addCase(API.createCareer.rejected, (state, action) => {
    //    state.errors = action.payload;
    // })
    // .addCase(API.updateCareer.fulfilled, (state, action) => {
    //   state.dataUpdate = action.payload.data.data;
    // })
    //   .addCase(API.getCareerList.fulfilled, (state, action) => {
    //   state.careerList = action.payload.data.data;
    // })
    // .addCase(API.getCareerCategoryList.fulfilled, (state, action) => {
    //   state.categoryList = action.payload.data.data;
    // }) 
 
   
  },
});

export default BrandSlice;