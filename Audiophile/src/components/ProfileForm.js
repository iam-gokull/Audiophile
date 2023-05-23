import React, { useEffect, useState } from 'react'
import apiSecurity from '../api/apiSecurityConfig';

import './ProfileForm.css'
import { useNavigate } from 'react-router-dom';

const ProfileForm = ({ isLoggedIn, fullname, handleLogout }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [valid, isValid] = useState(false);

    const [firstnameError, setfirstnameError] = useState('');
    const [lastnameError, setlastnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem('jwt');
            apiSecurity.get(`/users/user`, {
                headers: {
                    Authorization: token
                }
            })
                .then(response => {
                    setFirstname(response.data.firstname);
                    setLastname(response.data.lastname);
                    setEmail(response.data.mailId);
                })
                .catch(error => console.error(error))
        }
    }, [isLoggedIn])

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
            const requestBody = {
                firstname: firstname,
                lastname: lastname,
                mailId: email,
                password: password
            };

            if (isLoggedIn) {
                const token = localStorage.getItem('jwt');

                apiSecurity.put('/users/update', requestBody, {
                    headers: {
                        Authorization: token
                    }
                })
                    .then(response => {
                        console.log(response);
                        navigate("/sign-in")
                        handleLogout();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    };

    return (
        <div className='profile-wrapper'>
            <div className='profile-form'>
                <div className='profile-summary'>
                    <div className='profile-heading'>
                        <h2>Welcome, {fullname}</h2>
                    </div>
                    <h6>Kindly update the user details if it is incorrect.</h6>
                    <div>
                        <button className='btn primary-btn sign-out-btn' onClick={() => {navigate('/sign-in')
                            handleLogout()}}>Sign out</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='profile-form-wrapper'>
                    <div>
                        <h4>Update your info here.</h4>
                    </div>
                    <div className='name-wrapper'>
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
                        <button type='submit' className='btn primary-btn'>Update info</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default ProfileForm