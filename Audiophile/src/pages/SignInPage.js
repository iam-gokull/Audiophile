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
                    <SignInForm />
                </div>
                <div>
                    {randomProduct && <ProductGallery product={randomProduct} />}
                </div>
            </div>

        </div>
    );
};

export default SignInPage;