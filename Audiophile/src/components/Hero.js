import React from 'react';
import './Hero.css';
import Header from './Header';

import { useNavigate } from 'react-router-dom';

const Hero = ({cartProduct, isLoggedIn, fullname, email, handleLogout}) => {

  const navigate = useNavigate();

  return (
    <div className='hero'>
      <Header cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout}/>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <p className='eyebrow'>New product</p>
          <h1 className='product-heading'>XX99 MARK II HEADPHONES</h1>
          <p className='product-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='primary-btn btn' onClick={() => navigate("/headphones/xx99-mark-two-headphones")}>See product</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;