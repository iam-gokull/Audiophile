import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiSecurity from '../api/apiSecurityConfig';
import './SignInForm.css';

const ForgotPassword = ({verifyToken}) => {
    const navigate = useNavigate();
    const [isEmailVerified, setEmailVerified] = useState(false)

    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState('');

    const [token, setToken] = useState('');

    const [tokenError, setTokenError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }

        if (!token) {
            setTokenError('token is required');
        } else {
            setTokenError('');
        }

        if (email && !token) {
 
            apiSecurity.post(`/users/forgot-password?mailId=${email}`)
                .then(response => {
                    localStorage.setItem('passwordToken', response.data);
                    setToken(response.data);
                    setEmailVerified(true);
                })
                .catch(error => {
                    console.error(error.response);
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes("Mail")) {
                        setEmailError(errorMessage);
                    }
                });
        }

        if (email && token) {
            apiSecurity.get(`/users/verify-token?token=${token}&mailId=${email}`)
                .then(response => {
                    verifyToken(true);
                    navigate('/reset-password')
                })
                .catch(error => {
                    console.error(error.response);
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes("Mail")) {
                        setEmailError(errorMessage);
                    }
                    if (errorMessage.includes("token")) {
                        setTokenError(errorMessage);
                    }
                });
        }
    };

    return (
        <div className="sign-in-form">
            <div className="logo">
                <Link to="/">
                    <img
                        src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo-black.svg"
                        alt="logo"
                        className="logo-img"
                    ></img>
                </Link>
            </div>
            <div className="login-heading">
                <h2>Forgot your password?</h2>
                <p>We got you covered, kindly reset your password below</p>
            </div>
            <form onSubmit={handleSubmit} className="sign-in-form-wrapper">
                <div className={emailError ? 'error' : null}>
                    <div className={emailError ? 'error error-field' : null}>
                        <label htmlFor="email" className={emailError ? 'error' : null}>
                            Email
                        </label>
                        <small>{emailError}</small>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                {isEmailVerified && <div className={tokenError ? 'error' : null}>
                    <div className={tokenError ? 'error error-field' : null}>
                        <label htmlFor="token" className={tokenError ? 'error' : null}>
                            Token
                        </label>
                        <small>{tokenError}</small>
                    </div>
                    <input
                        type="text"
                        name="token"
                        id="token"
                        onChange={(e) => setToken(e.target.value)}
                    ></input>
                </div>}
                
                <div>
                    <button className="btn primary-btn" type="submit">
                        Submit
                    </button>
                
                </div>
                
            </form>
        </div>
    );
};

export default ForgotPassword;
