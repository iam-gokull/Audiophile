import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import apiSecurity from '../api/apiSecurityConfig';
import "./SignInForm.css";

const SignInForm = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [valid, isValid] = useState(true);

    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
            isValid(false);
        } else {
            setEmailError('')
            isValid(true);
        }

        if (!password) {
            setPasswordError('Passowrd is required');
            isValid(false);
        } else {
            setPasswordError('')
            isValid(true);
        }

        if (valid) {
            const requestBody = {
                mailId: email,
                password: password
            };

            apiSecurity.post('/users/login', requestBody)
                .then(response => {
                    console.log(response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.error(error);
                });

        }
    };

    return (
        <div className='sign-in-form'>
            <div className='logo'>
                <Link to="/" >
                    <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo-black.svg" alt='logo' className='logo-img'></img>
                </Link>
            </div>
            <div className='login-heading'>
                <h2>Hello Again</h2>
                <p>Get into the world of Audiophiles</p>
            </div>
            <form onSubmit={handleSubmit} className='sign-in-form-wrapper'>
                <div className={emailError ? 'error' : null}>
                    <div className={emailError ? 'error error-field' : null}>
                        <label htmlFor='email' className={emailError ? 'error' : null}>
                            Email
                        </label>
                        <small>{emailError}</small>
                    </div>

                    <input type='email' name='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={passwordError ? 'error' : null}>
                    <div className={passwordError ? 'error error-field' : null}>
                        <label htmlFor='email' className={passwordError ? 'error' : null}>
                            Password
                        </label>
                        <small>{passwordError}</small>
                    </div>

                    <input type='password' name='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className='btn primary-btn' type='submit'>Sign in</button>
                    <div>
                        <p>Not registered yet?</p>
                        <Link to="/sign-up" onClick={() => navigate("/sign-up")}>
                            Sign up here
                        </Link>
                    </div>
                </div>
                <div>
                    <p>Forgot your password?</p>
                    <p>Click here!</p>
                </div>
            </form>
        </div>
    )
}

export default SignInForm