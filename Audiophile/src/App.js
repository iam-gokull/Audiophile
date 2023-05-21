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
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [screenSize, setScreenSize] = useState('');

  const handleLogin = (token) => {
    login(token);
  };

  const handleLogout = () => {
    logout();
  };

  const [cartProduct, setCartProduct] = useState();

  useEffect(() => {
    const handleRsize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            setScreenSize('small');
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            setScreenSize('medium');
        } else {
            setScreenSize('large');
        }
    };

    window.addEventListener('resize', handleRsize);
    handleRsize();

    return () => {
        window.removeEventListener('ressize', handleRsize);
    }
}, []);

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('jwt');
      api.get(`/api/products/cart/all-carts`, {
        headers: {
          Authorization: token
        }
      })
        .then(response => setCartProduct(response.data))
        .catch(error => console.error(error))
    }
  }, [cartProduct, isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('jwt');
      apiSecurity.get('/users/fullname', {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setFullname(response.data);
        console.log(response.data);
      }).catch(err => console.error(err));

      apiSecurity.get('/users/mail-id', {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setEmail(response.data);
        console.log(response.data);
      }).catch(err => console.error(err));
    }
  }, [isLoggedIn])

  const addProductToCart = async (cartProduct) => {
    if (isLoggedIn) {
      const token = localStorage.getItem('jwt');
      api.post(`/api/products/cart/add`, cartProduct, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response);
        return true;
      })
      .catch(error => {
        console.error(error);
      })
    } else {
      return false;
    }
    
  }


  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize}/>} />
            <Route path="/:category" element={<CategoryPage cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize}/>} />
            <Route path="/:category/:slug" element={<ProductPage addProductToCart={addProductToCart} cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize}/>} />
            <Route path="/checkout" element={<CheckoutPage cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize}/>} />
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
