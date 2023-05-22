import React from 'react';
import './Hero.css';
import Header from './Header';

const Hero = ({cartProduct, isLoggedIn, fullname, email, handleLogout, screenSize}) => {


  return (
    <div className='hero'>
      <Header cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize} isHero={true}/>
    </div>
  )
}

export default Hero;