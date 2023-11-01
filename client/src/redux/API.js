
import axios from "axios";
import  { instanceGet } from "../axios/axiosGet";
import axiosPost from "../axios/axiosPost";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const API = Object.freeze({   
    getBrands: createAsyncThunk(
        'get/brands',
        async () => {
            return await  axios.get("http://localhost:5000/get-image")
        }
    ),

    createBrand: createAsyncThunk(
        'post/brands',
        async (data) => {                        
            return await axios.post(
                "http://localhost:5000/upload-image",
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
            return axios.delete(`http://localhost:5000/delete-image/${id}`, )
        }
    ),

    //products

    getProducts: createAsyncThunk(
        'get/products',
        async () => {
            return await  axios.get("http://localhost:5000/get-products")
        }
    ),

    createProduct: createAsyncThunk(
        'post/products',
        async (data) => {                        
            return await axios.post(
                "http://localhost:5000/upload-product",
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
            return axios.delete(`http://localhost:5000/delete-product/${id}`, )
        }
    ),

//news
getNews: createAsyncThunk(
    'get/news',
    async () => {
        return await  axios.get("http://localhost:5000/get-news")
    }
),

createNews: createAsyncThunk(
    'post/news',
    async (data) => {                        
        return await axios.post(
            "http://localhost:5000/upload-news",
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
        return axios.delete(`http://localhost:5000/delete-news/${id}`, )
    }
),




  
    })