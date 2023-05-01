import React from 'react'

import "./CheckoutSummary.css"

const CheckoutSummary = () => {
    return (
        <div className='checkout-summary'>
            <h2>Summary</h2>
            <div className='summary-products'>
                <div>
                    <div>
                        <div>
                            <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt="product"></img>
                            <div>
                                <p>XX99</p>
                                <p>$ 2999</p>
                            </div>
                        </div>

                        <div>
                            <p>x3</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt="product"></img>
                            <div>
                                <p>XX99</p>
                                <p>$ 2999</p>
                            </div>
                        </div>

                        <div>
                            <p>x3</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt="product"></img>
                            <div>
                                <p>XX99</p>
                                <p>$ 2999</p>
                            </div>
                        </div>

                        <div>
                            <p>x3</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt="product"></img>
                            <div>
                                <p>XX99</p>
                                <p>$ 2999</p>
                            </div>
                        </div>

                        <div>
                            <p>x1</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='price-distributions'>
                <p>Total</p>
                <p>$ 25,139</p>
            </div>
            <div className='price-distributions'>
                <p>Shipping</p>
                <p>$ 25</p>
            </div>
            <div className='price-distributions'>
                <p>VAT (Included)</p>
                <p>$ 5,000</p>
            </div>
            <div className='price-distributions grand-total'>
                <p>Grand total</p>
                <p>$ 30,000</p>
            </div>
            <div>
                <button className='pay-btn btn primary-btn'>Continue & Pay</button>
            </div>

        </div>
    )
}

export default CheckoutSummary