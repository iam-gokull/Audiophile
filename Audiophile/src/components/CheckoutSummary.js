import React, {useState, useEffect} from 'react'

import "./CheckoutSummary.css"

const CheckoutSummary = ({ cartProduct }) => {

    const [total, updateTotal] = useState(0);
    const [grandTotal, updateGrandTotal] = useState(0);
    const [GST, updateGST] = useState(0);

    useEffect(() => {
        const quantities = cartProduct && cartProduct.map(product => product.quantity);
        const totalPrice = cartProduct && cartProduct.reduce((total, product, index) => {
            return total + product.price * quantities[index];
        }, 0);
       
        updateTotal(totalPrice);

        const gstPrice = (total * 18)/100;
        updateGST(gstPrice); 

        const grandTotalPrice = total + GST + (total < 1000 && total > 0 ? 100 : 0);
        updateGrandTotal(grandTotalPrice);
    }, [cartProduct, total, GST]);

    return (
        <div className='checkout-summary'>
            <h2>Summary</h2>
            <div className='summary-products'>
                <div>
                    {cartProduct && cartProduct.map((product) => {
                        return (
                            <div>
                                <div>
                                    <img src={product.image.mobile} alt={product.name}></img>
                                    <div>
                                        <p>{product.name.split(" ")[0]}</p>
                                        <p>₹ {product.price}</p>
                                    </div>
                                </div>

                                <div >
                                    <p>x{product.quantity}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='price-distributions'>
                <p>Total</p>
                <p>₹ {total}</p>
            </div>
            <div className='price-distributions'>
                <p>Shipping</p>
                <p>₹ {total < 1000 && total > 0 ? 100 : 0}</p>
            </div>
            <div className='price-distributions'>
                <p>GST (Included)</p>
                <p>₹ {GST}</p>
            </div>
            <div className='price-distributions grand-total'>
                <p>Grand total</p>
                <p>₹ {grandTotal}</p>
            </div>
            <div>
                <button className='pay-btn btn primary-btn' type='submit'>Continue & Pay</button>
            </div>

        </div>
    )
}

export default CheckoutSummary