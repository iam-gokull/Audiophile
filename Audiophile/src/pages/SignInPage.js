import React from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { useLocation } from 'react-router-dom';
import ForgotPassword from '../components/ForgotPassword';
import ResetPassword from '../components/ResetPassword';

const SignInPage = ({handleLogin, verifyToken}) => {

    const location = useLocation();

    return (
        <div className="sign-in">
            <div className='sign-in-wrapper'>
                <div className='login-image'>
                    <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/shared/desktop/login-image.jpg" alt='logo' className='logo-img'></img>
                </div>
                <div className='login-register-form'>
                    {console.log(location)}
                    {location.pathname === '/sign-in' &&  <SignInForm handleLogin={handleLogin}/>}
                    {location.pathname === '/sign-up' &&  <SignUpForm handleLogin={handleLogin}/>}
                    {location.pathname === '/reset-password' &&  <ResetPassword />}
                    {location.pathname === '/forgot-password' &&  <ForgotPassword verifyToken={verifyToken}/>}
                </div>
            </div>

        </div>
    );
};

export default SignInPage;