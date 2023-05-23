import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import apiSecurity from '../api/apiSecurityConfig';
import "./SignUpForm.css";

const SignUpForm = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [valid, isValid] = useState(true);

    const [firstnameError, setfirstnameError] = useState('');
    const [lastnameError, setlastnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstname) {
            setfirstnameError('First name is required');
            isValid(false)
        } else {
            setfirstnameError('')
            isValid(true);
        }

        if (!lastname) {
            setlastnameError('Last name is required');
            isValid(false)
        } else {
            setlastnameError('')
            isValid(true);
        }

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
            // Submit the form
            const requestBody = {
                firstname: firstname,
                lastname: lastname,
                mailId: email,
                password: password
            };

            apiSecurity.post('/users/register', requestBody)
                .then(response => {
                    console.log(response.data);
                    navigate("/sign-in");
                })
                .catch(error => {
                    console.error(error);
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes("email")) {
                        setEmailError(errorMessage);
                    } else if (errorMessage.includes("Password")) {
                        setPasswordError(errorMessage);
                    }
                });
        }
    };

    return (
        <div className='sign-up-form'>
            <div className='logo'>
                <Link to="/" >
                    <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/logo-black.svg" alt='logo' className='logo-img'></img>
                </Link>
            </div>
            <div className='login-heading'>
                <h2>Welcome</h2>
                <p>Join us in the flew of Audiophiles</p>
            </div>
            <form onSubmit={handleSubmit} className='sign-up-form-wrapper'>
                <div className={firstnameError ? 'error' : null}>
                    <div className={firstnameError ? 'error error-field' : null}>
                        <label htmlFor='firstname' className={firstnameError ? 'error' : null}>
                            Firstname
                        </label>
                        <small>{firstnameError}</small>
                    </div>

                    <input type='firstname' name='firstname' id='firstname' value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}></input>
                </div>
                <div className={lastnameError ? 'error' : null}>
                    <div className={lastnameError ? 'error error-field' : null}>
                        <label htmlFor='lastname' className={lastnameError ? 'error' : null}>
                            Lastname
                        </label>
                        <small>{lastnameError}</small>
                    </div>

                    <input type='lastname' name='lastname' id='lastname' value={lastname}
                        onChange={(e) => setLastname(e.target.value)}></input>
                </div>

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
                    <div>
                        <button className='btn primary-btn' type='submit'>Sign Up</button>
                        <div>
                            <p>Already registered?</p>
                            <Link to="/sign-in">
                                Sign in here
                            </Link>
                        </div>
                    </div>
                    <p>* We'll new share your info to anyone</p>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm;