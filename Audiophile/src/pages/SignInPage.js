import React from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { useLocation } from 'react-router-dom';

const SignInPage = () => {

    const location = useLocation();

    return (
        <div className="sign-in">
            <div className='sign-in-wrapper'>
                <div className='login-image'>
                    <img src="/pexels-sound-on-3755931.jpg" alt='logo' className='logo-img'></img>
                </div>
                <div className='form'>
                    {console.log(location)}
                    {location.pathname === '/sign-in' ?  <SignInForm /> : <SignUpForm />}
                </div>
            </div>

        </div>
    );
};

export default SignInPage;