import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./Layout";
import api from "./api/apiConfig";
import apiSecurity from './api/apiSecurityConfig';
import './App.css';
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop.js";
import CheckoutPage from "./pages/CheckoutPage";
import SignInPage from "./pages/SignInPage";
import useAuthentication from "./components/useAuthentication";

function App() {
  const { isLoggedIn, login, logout } = useAuthentication();
  const handleLogin = (requestBody) => {
    // Call your login API endpoint in the backend to get the JWT
    // Pass the JWT to the login function from the useAuthentication hook
    apiSecurity.post('/users/login', requestBody)
      .then(response => {
        login(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  };

  const handleLogout = () => {
    logout();
  };

  const [cartProduct, setCartProduct] = useState();

  const getProductsForCart = async () => {
    api.get(`/api/products/cart/all-carts`)
      .then(response => setCartProduct(response.data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    // getProductsForCart();
  }, [cartProduct])

  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home cartProduct={cartProduct} isLoggedIn={isLoggedIn} />} />
            <Route path="/:category" element={<CategoryPage cartProduct={cartProduct} isLoggedIn={isLoggedIn}/>} />
            <Route path="/:category/:slug" element={<ProductPage cartProduct={cartProduct} isLoggedIn={isLoggedIn}/>} />
            <Route path="/checkout" element={<CheckoutPage cartProduct={cartProduct} isLoggedIn={isLoggedIn}/>} />

            <Route path="/sign-in" element={<SignInPage handleLogin={handleLogin} />} />
            <Route path="/sign-up" element={<SignInPage />} />
            <Route path="*" element={<NotFound cartProduct={cartProduct} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
