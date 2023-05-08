import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css'
import Cart from './Cart';

const Header = ({cartProduct}) => {

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
        document.body.classList.toggle('modal-open');
    };

    const handleModalContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <header>
            <nav className='header'>
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
                    <Cart modal={modal} handleModalContentClick={handleModalContentClick} cartProduct={cartProduct} />
                </div>
                <div>
                    <button className='btn primary-btn sign-in-btn' onClick={() => navigate("/sign-in")}>Sign in</button>
                </div>
                </div>
                
            </nav>
            <hr className='line-break'></hr>
        </header>
    )
}

export default Header;