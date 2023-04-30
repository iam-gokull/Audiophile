import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-navbar'>
                <div className='logo'>
                    <Link exact to="/" activeClassName="active">
                        <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo.svg" alt='logo' className='logo-img'></img>
                    </Link>
                </div>
                <div className='header-links'>
                    <Link to="/headphones" activeClassName="active" className="header-link">
                        Headphones
                    </Link>
                    <Link to="/speakers" activeClassName="active" className="header-link">
                        Speakers
                    </Link>
                    <Link to="/earphones" activeClassName="active" className="header-link">
                        Earphones
                    </Link>
                </div>
            </div>
            <div className='footer-description'>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className='fat-footer'>
                <h3>Copyright {(new Date().getFullYear())}. All Rights Reserved</h3>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/'><img className='facebook-icon' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-facebook.svg' alt='Facebook icon'></img>
                    </a>
                    <a href='https://www.twitter.com/'><img className='twitter-icon' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-twitter.svg' alt='Twitter icon'></img>
                    </a>
                    <a href='https://www.instagram.com/'><img className='instagram-icon' src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-instagram.svg' alt='Instagram icon'></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer