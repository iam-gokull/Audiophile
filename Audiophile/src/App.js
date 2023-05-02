import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
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

  const [cartProduct, setCartProduct] = useState();

  const getProductsForCart = async () => {
    api.get(`/api/products/cart`)
      .then(response => {
        setCartProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    getProductsForCart();
  }, [cartProduct])

  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home cartProduct={cartProduct} />} />
              <Route path="/:category" element={<CategoryPage cartProduct={cartProduct} />} />
              <Route path="/:category/:slug" element={<ProductPage cartProduct={cartProduct} />} />
              <Route path="/checkout" element={<CheckoutPage cartProduct={cartProduct} />} />
              <Route path="*" element={<NotFound cartProduct={cartProduct} />}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
