import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./Layout";
import api from "./api/apiConfig";
import './App.css';
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop.js";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  const [categoryProducts, setcategoryProducts] = useState();
  const [product, setProduct] = useState();

  const getProductsByCategory = async (category) => {
    try {
      const response = await api.get(`/api/products/category/${category}`);
      const products = response.data;
      products.sort((a, b) => b.new - a.new);
      setcategoryProducts(products);
    } catch (err) {
      console.log(err);
    }
  }

  const getProductBySlug = async (slug) => {
    try {
      const response = await api.get(`/api/products/product/${slug}`);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CategoryPage getProductsByCategory={getProductsByCategory} categoryProducts={categoryProducts} />} />
            <Route path="/:category/:slug" element={<ProductPage getProductBySlug={getProductBySlug} product={product} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
