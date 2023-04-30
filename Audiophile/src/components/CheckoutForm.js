import React from 'react'

const CheckoutForm = () => {
    return (
        <div>
            <form className='checkout-form'>
                <h1>Checkout</h1>
                <div className='billing-details'>
                    <h5 className='form-heading'>Billing details</h5>
                    <div>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input type='text' name='name' id='name'></input>
                        <label htmlFor='email'>
                            Email address
                        </label>
                        <input type='email' name='email' id='email'></input>
                        <label htmlFor='phone-number'>
                            Phone number
                        </label>
                        <input type='number' name='phone-number' id='phone-number'></input>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CheckoutForm