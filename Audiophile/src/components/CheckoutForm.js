import React from 'react'

import "./CheckoutForm.css"
import CheckoutSummary from '../components/CheckoutSummary'

const CheckoutForm = ({ cartProduct }) => {
    return (
        <div>
            <form className='form'>
                <div className='checkout-form'>
                    <h1>Checkout</h1>
                    <div className='billing-details form-wrapper'>
                        <h5 className='form-heading'>Billing details</h5>
                        <div>
                            <div>
                                <label htmlFor='name'>
                                    Name
                                </label>
                                <input type='text' name='name' id='name'></input>
                            </div>
                            <div>
                                <label htmlFor='email'>
                                    Email address
                                </label>
                                <input type='email' name='email' id='email'></input>
                            </div>
                            <div>
                                <label htmlFor='phone-number'>
                                    Phone number
                                </label>
                                <input type='number' name='phone-number' id='phone-number'></input>
                            </div>

                        </div>
                    </div>
                    <div className='shipping-info form-wrapper'>
                        <h5 className='form-heading'>Shipping info</h5>
                        <div>
                            <div>
                                <label htmlFor='address'>
                                    Address
                                </label>
                                <input type='text' name='address' id='address'></input>
                            </div>

                            <div>
                                <label htmlFor='zipcode'>
                                    Zipcode
                                </label>
                                <input type='number' name='zipcode' id='zipcode'></input>
                            </div>

                            <div>
                                <label htmlFor='city'>
                                    City
                                </label>
                                <input type='text' name='city' id='city'></input>
                            </div>

                            <div>
                                <label htmlFor='country'>
                                    Country
                                </label>
                                <input type='text' name='country' id='country'></input>
                            </div>

                        </div>
                    </div>
                    <div className='payment-details form-wrapper'>
                        <h5 className='form-heading'>Payment details</h5>
                        <div>
                            <label>Payment method</label>
                            <div>
                                <div className='radio-wrapper'>
                                    <input type="radio" id="e-money" name="payment-method" value="e-money" checked></input>
                                    <label htmlFor="e-money" class="radio-label">e-money</label>
                                </div>
                                <div className='radio-wrapper'>
                                    <input type="radio" id="cash" name="payment-method" value="cash"></input>
                                    <label htmlFor="cash" class="radio-label">Cash on Delivery</label>
                                </div>
                            </div>
                            <div className='e-payment-details'>
                                <div>
                                    <label htmlFor='e-money-number'>
                                        e-money number
                                    </label>
                                    <input type='text' name='e-money-number' id='e-money-number'></input>
                                </div>

                                <div>
                                    <label htmlFor='e-money-pin'>
                                        e-money pin
                                    </label>
                                    <input type='text' name='e-money-number' id='e-money-number'></input>
                                </div>
                            </div>
                            <div>
                                <img></img>
                                <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='summary-form'>
                    <CheckoutSummary cartProduct={cartProduct} />
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm