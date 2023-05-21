import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css'
import Cart from './Cart';
import ProfileModal from './ProfileModal';

const Header = ({ cartProduct, isLoggedIn, fullname, email, handleLogout }) => {

    const [modal, setModal] = useState(false);
    const [mobileHeader, setMobileHeader] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
        document.body.classList.toggle('modal-open');
    };

    const handleModalContentClick = (event) => {
        event.stopPropagation();
    };

    const toggleProfileModal = () => {
        setProfileModal(!profileModal);
        document.body.classList.toggle('modal-open');
    };

    const handleProfileModalContentClick = (event) => {
        event.stopPropagation();
    };

    const handleHamburgerClick = (e) => {
        document.body.classList.toggle('modal-open');
        e.stopPropagation();
        setMobileHeader(!mobileHeader);
        // document.querySelector('.hamburger').classList.toggle('checked');
        // document.querySelector('.mobile-header').classList.toggle('checked');
    }

    return (
        <header>
            <nav className='header'>
                <input className="hamburger" type="checkbox" role="button" aria-label="Display the menu" aria-expanded="false" aria-controls="header-links" onClick={handleHamburgerClick}></input>
                <div className='mobile-header'>
                    <div className='logo'>
                        <NavLink to="/" onClick={handleHamburgerClick} >
                            <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo.svg" alt='logo' className='logo-img'></img>
                        </NavLink>
                    </div>
                    <div className='mobile-header-links'>
                        <NavLink to="/headphones" onClick={handleHamburgerClick} activeclassname="active" className="header-link" >
                            Headphones
                        </NavLink>
                        <NavLink to="/speakers" onClick={handleHamburgerClick} activeclassname="active" className="header-link" >
                            Speakers
                        </NavLink>
                        <NavLink to="/earphones" onClick={handleHamburgerClick} activeclassname="active" className="header-link" >
                            Earphones
                        </NavLink>
                    </div>
                    <button className='btn primary-btn sign-in-btn' onClick={() => navigate("/sign-in")}>Sign in</button>
                </div>
                <div className='logo'>
                    <NavLink to="/" >
                        <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo.svg" alt='logo' className='logo-img'></img>
                    </NavLink>
                </div>
                <div className='header-links'>
                    <NavLink to="/headphones" activeclassname="active" className="header-link">
                        Headphones
                    </NavLink>
                    <NavLink to="/speakers" activeclassname="active" className="header-link">
                        Speakers
                    </NavLink>
                    <NavLink to="/earphones" activeclassname="active" className="header-link">
                        Earphones
                    </NavLink>
                </div>

                <div className='header-right'>
                    <div className='cart' onClick={toggleModal}>
                        <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/icon-cart.svg' alt='cart-icon' className='cart-icon'>
                        </img>
                        <Cart modal={modal} handleModalContentClick={handleModalContentClick} cartProduct={cartProduct} email={email} isLoggedIn={isLoggedIn} />
                    </div>
                    <div>
                        {isLoggedIn ? <div className='profile-logo' onClick={toggleProfileModal}>
                            {fullname.slice(0, 1)}{fullname.slice(-1)}
                            <ProfileModal profileModal={profileModal} handleProfileModalContentClick={handleProfileModalContentClick} handleLogout={handleLogout} />
                        </div> :
                            <button className='btn primary-btn sign-in-btn' onClick={() => navigate("/sign-in")}>Sign in</button>}
                    </div>
                </div>

            </nav>
            <hr className='line-break'></hr>
        </header>
    )
}

export default Header;