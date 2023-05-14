import React, { useEffect, useState } from 'react';
import ProductGallery from '../components/ProductGallery';
import api from '../api/apiConfig';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
    const [randomProduct, setRandomProduct] = useState(null);
    useEffect(() => {
        api.get('/api/products')
            .then(response => {
                const randomIndex = Math.floor(Math.random() * response.data.length);
                setRandomProduct(response.data[randomIndex]);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="sign-in">
            <div className='sign-in-wrapper'>
                <div>
                    <img src="https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" alt='logo' className='logo-img'></img>
                </div>
                <div>
                    <SignInForm />
                </div>
            </div>

        </div>
    );
};

export default SignInPage;