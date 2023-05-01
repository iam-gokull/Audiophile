import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckoutForm from '../components/CheckoutForm'
import { useNavigate } from 'react-router-dom'
import CheckoutSummary from '../components/CheckoutSummary'

const CheckoutPage = () => {

    const navigate = useNavigate();

    return (
        <div className='checkout' style={{ backgroundColor: '#fafafa' }}>
            <Header />
            <div className='checkout-main' style={{ width: '1250px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <button className='go-back-btn btn' onClick={() => navigate(-1)}>Go back</button>
                <div className='checkout-details' style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
                    <CheckoutForm />
                    <CheckoutSummary />
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default CheckoutPage