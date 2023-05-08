import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const SignInForm = () => {

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
            // Submit the form
        }
    };

    return (
        <div className='sign-in-form'>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
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
                            Email
                        </label>
                        <small>{passwordError}</small>
                    </div>

                    <input type='text' name='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className='btn primary-btn' type='submit'>Sign in</button>
                    <div>
                        <p>Not registered yet?</p>
                        <Link to="/sign-up">
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