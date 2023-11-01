
import React from 'react'
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import Admin from './pages/AdminPage/index'
import HomePage from './pages/HomePage/homePage';
import BrandAdminPage from './pages/AdminPage/AdminBrandPage/index';
import AdminProductPage from './pages/AdminPage/AdminProductPage';
import ProductItemsPage from './pages/HomePage/ProductItemsPage';
import ProductsListPage from './pages/HomePage/ProductsListPage';
import ContactPageMainLayout from './pages/ContactPage/ContactPageMainLayout';
import ProductPageMainLayout from './pages/HomePage/ProductPage/ProductPageMainLayout';
import NewsPage from './pages/NewsPage';
import AdminNewsPage from './pages/AdminPage/NewsPage';
import './App.css'



function App() {
  return (<BrowserRouter>
    <Routes>
      <Route  path="/" element={ <HomePage /> }/>
      <Route  path="/home" element={ <HomePage /> }/>
      <Route path="/admin" element={ <Admin/>} />
      <Route path="/admin/brands" element={<BrandAdminPage />}/>
      <Route path="/admin/news" element={<AdminNewsPage />}/>
       <Route path="/product" element={<ProductItemsPage />}/>
       <Route path="/products" element={<ProductPageMainLayout />}/>
       <Route path="/contact" element={<ContactPageMainLayout/>}/>
       <Route path="/news" element={<NewsPage/>}/>
       <Route path="/product/:filtertype" element={<ProductItemsPage />}/>
       <Route path="/product/:filtertype" element={<ProductItemsPage />}/>
       <Route path="/products/:filtertype" element={<ProductsListPage />}/>
       <Route path="/admin/products" element={<AdminProductPage />}/>
    </Routes>
    </BrowserRouter>
  );
}





export default App;




