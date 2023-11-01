import { createSlice } from "@reduxjs/toolkit";
import { API } from "../API";

const NewsSlice = createSlice({
  name: "News",
  initialState: {
   news: [], 
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getNews.fulfilled, (state, action) => {
       state.news = action.payload.data?.data;
      
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

export default NewsSlice;