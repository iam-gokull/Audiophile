import React from 'react'
import './About.css'

const About = ({screenSize}) => {
  return (
    <div className="about-wrapper">
      <div className='about'>
        <div className='about-content'>
          <h1 className='about-heading'>BRINGING YOU THE <span className='orange'>BEST</span> AUDIO GEAR</h1>
          <p className='about-description'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        {screenSize === 'large' && <img className='about-thumbnail' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/image-best-gear.jpg' alt='A man wearing a headphone'></img>}
        {screenSize === 'medium' && <img className='about-thumbnail' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/tablet/image-best-gear.jpg' alt='A man wearing a headphone'></img>}
        {screenSize === 'small' && <img className='about-thumbnail' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/mobile/image-best-gear.jpg' alt='A man wearing a headphone'></img>}

      </div>
    </div>

  )
}

export default About