import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/AdminPage/index";
import HomePage from "./pages/HomePage/homePage";
import BrandAdminPage from "./pages/AdminPage/AdminBrandPage/index";
import AdminProductPage from "./pages/AdminPage/AdminProductPage";
import ProductItemsPage from "./pages/HomePage/ProductItemsPage";
import ProductsListPage from "./pages/HomePage/ProductsListPage";
import ContactPageMainLayout from "./pages/ContactPage/ContactPageMainLayout";
import ProductPageMainLayout from "./pages/HomePage/ProductPage/ProductPageMainLayout";
import NewsPage from "./pages/NewsPage";
import AdminNewsPage from "./pages/AdminPage/NewsPage";
import "./App.css";
import AboutPageMainLayout from "./pages/HomePage/AboutPageMainLayout";

function App() {

const isLogin =localStorage.getItem("password") && localStorage.getItem("login")


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />

        {isLogin && <Route path="/admin/brands" element={<BrandAdminPage />} />}

        {isLogin && <Route path="/admin/news" element={<AdminNewsPage />} />}
        {isLogin && (
          <Route path="/admin/products" element={<AdminProductPage />} />
        )}

        <Route path="/product" element={<ProductItemsPage />} />
        <Route path="/products" element={<ProductPageMainLayout />} />
        <Route path="/contact" element={<ContactPageMainLayout />} />
        <Route path="/about" element={<AboutPageMainLayout />} />

        
        <Route path="/news" element={<NewsPage />} />
        <Route path="/product/:filtertype" element={<ProductItemsPage />} />
        <Route path="/product/:filtertype" element={<ProductItemsPage />} />
        <Route path="/products/:filtertype" element={<ProductsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
