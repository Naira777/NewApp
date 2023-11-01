import {configureStore} from "@reduxjs/toolkit";
import BrandSlice from "./Brands/slice";
import ProductSlice from "./Products/slice";
import NewsSlice from "./News/slice";


export const store = configureStore({
    reducer: {
      brands: BrandSlice.reducer, 
      products: ProductSlice.reducer, 
      news: NewsSlice.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: process.env.REACT_APP_ENV !== 'dev',
});