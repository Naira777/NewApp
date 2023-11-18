
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const API = Object.freeze({   
    getBrands: createAsyncThunk(
        'get/brands',
        async () => {
            return await  axios.get(`${process.env.REACT_APP_BASE_URL}/get-image`)
        }
    ),

    createBrand: createAsyncThunk(
        'post/brands',
        async (data) => {                        
            return await axios.post(
                `${process.env.REACT_APP_BASE_URL}/upload-image`,
                data,
                {
                  headers: { "Content-Type": "multipart/form-data" },
                }
              );
        }
    ),
    deleteBrand: createAsyncThunk(
        'delete/brands',
        async (id) => {                        
            return axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-image/${id}`, )
          
        }
    ),

    //products

    getProducts: createAsyncThunk(
        'get/products',
        async () => {
            return await  axios.get(`http://localhost:5000/get-products`)
        }
    ),

    createProduct: createAsyncThunk(
        'post/products',
        async (data) => {                        
            return await axios.post(
                `${process.env.REACT_APP_BASE_URL}/upload-product`,
                data,
                {
                  headers: { "Content-Type": "multipart/form-data" },
                }
              );
        }
    ),
    deleteProduct: createAsyncThunk(
        'delete/products',
        async (id) => {                        
            return axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-product/${id}`,)
        }
    ),

//news
getNews: createAsyncThunk(
    'get/news',
    async () => {
        return await  axios.get(`${process.env.REACT_APP_BASE_URL}/get-news`)
    }
),

createNews: createAsyncThunk(
    'post/news',
    async (data) => {                        
        return await axios.post(
            `${process.env.REACT_APP_BASE_URL}/upload-news`,
            data,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
    }
),
deleteNews: createAsyncThunk(
    'delete/news',
    async (id) => {                        
        return axios.delete(`${process.env.REACT_APP_BASE_URL}/delete-news/${id}`, )
    }
),




  
    })