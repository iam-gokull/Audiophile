import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckoutForm from '../components/CheckoutForm'
import { useNavigate } from 'react-router-dom'


const CheckoutPage = ({cartProduct}) => {

    const navigate = useNavigate();

    return (
        <div className='checkout'>
            <Header cartProduct={cartProduct}/>
            <div className='checkout-main'>
                <button className='go-back-btn btn' onClick={() => navigate(-1)}>Go back</button>
                <div className='checkout-details'>
                    <CheckoutForm cartProduct={cartProduct}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CheckoutPage