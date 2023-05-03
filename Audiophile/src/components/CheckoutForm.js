import React, { useState } from 'react'

import "./CheckoutForm.css"
import CheckoutSummary from '../components/CheckoutSummary'

const CheckoutForm = ({ cartProduct }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('e-money');
    const [eMoneyNumber, setEMoneyNumber] = useState('');
    const [eMoneyPin, setEMoneyPin] = useState('');
    const [valid, isValid] = useState(true);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [zipcodeError, setZipcodeError] = useState('');
    const [cityError, setCityError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [eMoneyError, setEMoneyError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name) {
            setNameError('Name is required');
            isValid(false);
        } else {
            setNameError('')
            isValid(true);
        }

        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
            isValid(false);
        } else {
            setEmailError('')
            isValid(true);
        }

        if (!phone) {
            setPhoneError('Phone number is required');
        } else if (!/^[0-9]*$/.test(phone)) {
            setPhoneError('Invalid phone number format');
            isValid(false);
        } else {
            setPhoneError('')
            isValid(true);
        }

        if (!address) {
            setAddressError('Address is required');
            isValid(false);
        } else {
            setAddressError('')
            isValid(true);
        }

        if (!zipcode) {
            setZipcodeError('Zipcode is required');
        } else if (!/^[0-9]*$/.test(zipcode)) {
            setZipcodeError('Invalid zipcode format');
            isValid(false);
        } else {
            setZipcodeError('')
            isValid(true);
        }

        if (!city) {
            setCityError('City is required');
            isValid(false);
        } else {
            setCityError('')
            isValid(true);
        }

        if (!country) {
            setCountryError('Country is required');
            isValid(false);
        } else {
            setCountryError('')
            isValid(true);
        }

        if (paymentMethod === 'e-money' && (!eMoneyNumber || !eMoneyPin)) {
            setEMoneyError('e-money details are required');
            isValid(false);
        } else {
            setEMoneyError('')
            isValid(true);
        }

        if (valid) {
            // Submit the form
        }
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='checkout-form'>
                    <h1>Checkout</h1>
                    <div className='billing-details form-wrapper'>
                        <h5 className='form-heading'>Billing details</h5>
                        <div>
                            <div className={nameError ? 'error' : null}>
                                <div className={nameError ? 'error error-field' : null}>
                                    <label htmlFor='name' className={nameError ? 'error' : null}>
                                        Name
                                    </label>
                                    <small>{nameError}</small>
                                </div>

                                <input type='text' name='name' id='name' value={name}
                                    onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className={emailError ? 'error' : null}>
                                <div className={emailError ? 'error error-field' : null}>
                                    <label htmlFor='email' className={emailError ? 'error' : null}>
                                        Email address
                                    </label>
                                    <small>{emailError}</small>
                                </div>

                                <input type='email' name='email' id='email' value={email}
                                    onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className={phoneError ? 'error' : null}>
                                <div className={phoneError ? 'error error-field' : null}>
                                    <label htmlFor='phone-number' className={phoneError ? 'error' : null}>
                                        Phone number
                                    </label>
                                    <small>{phoneError}</small>
                                </div>

                                <input type='number' name='phone-number' id='phone-number' value={phone}
                                    onChange={(e) => setPhone(e.target.value)}></input>
                            </div>

                        </div>
                    </div>
                    <div className='shipping-info form-wrapper'>
                        <h5 className='form-heading'>Shipping info</h5>
                        <div>
                            <div className={addressError ? 'error' : null}>
                                <div className={addressError ? 'error error-field' : null}>
                                    <label htmlFor='address' className={addressError ? 'error' : null}>
                                        Address
                                    </label>
                                    <small>{addressError}</small>
                                </div>

                                <input type='text' name='address' id='address' value={address}
                                    onChange={(e) => setAddress(e.target.value)}></input>
                            </div>

                            <div className={zipcodeError ? 'error' : null}>
                                <div className={zipcodeError ? 'error error-field' : null}>
                                    <label htmlFor='zipcode' className={zipcodeError ? 'error' : null}>
                                        Zipcode
                                    </label>
                                    <small>{zipcodeError}</small>
                                </div>

                                <input type='number' name='zipcode' id='zipcode' value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}></input>
                            </div>

                            <div className={cityError ? 'error' : null}>
                                <div className={cityError ? 'error error-field' : null}>
                                    <label htmlFor='city' className={cityError ? 'error' : null}>
                                        City
                                    </label>
                                    <small>{cityError}</small>
                                </div>

                                <input type='text' name='city' id='city' value={city}
                                    onChange={(e) => setCity(e.target.value)}></input>
                            </div>

                            <div className={countryError ? 'error' : null}>
                                <div className={countryError ? 'error error-field' : null}>
                                    <label htmlFor='country' className={countryError ? 'error' : null}>
                                        Country
                                    </label>
                                    <small>{countryError}</small>
                                </div>

                                <input type='text' name='country' id='country' value={country}
                                    onChange={(e) => setCountry(e.target.value)}></input>
                            </div>

                        </div>
                    </div>
                    <div className='payment-details form-wrapper'>
                        <h5 className='form-heading'>Payment details</h5>
                        <div>
                            <label>Payment method</label>
                            <div>
                                <div className={paymentMethod === 'e-money' ? 'radio-wrapper checked' : 'radio-wrapper'}>
                                    <input type="radio" id="e-money" name="payment-method" value="e-money" checked={paymentMethod === 'e-money'} onChange={(e) => setPaymentMethod(e.target.value)}></input>
                                    <label htmlFor="e-money" className="radio-label">e-money</label>
                                </div>
                                <div className={paymentMethod === 'cash' ? 'radio-wrapper checked' : 'radio-wrapper'}>
                                    <input type="radio" id="cash" name="payment-method" value="cash" checked={paymentMethod === 'cash'} onChange={(e) => setPaymentMethod(e.target.value)}></input>
                                    <label htmlFor="cash" className="radio-label">Cash on Delivery</label>
                                </div>
                            </div>
                            <div className={paymentMethod === 'e-money' ? 'e-payment-details payment-sub-details' : 'e-payment-details payment-sub-details hide'}>
                                <div className={eMoneyError ? 'error' : null}>
                                    <div className={eMoneyError ? 'error error-field' : null}>
                                        <label htmlFor='e-money-number' className={eMoneyError ? 'error' : null}>
                                            e-money number
                                        </label>
                                        <small>{eMoneyError}</small>
                                    </div>

                                    <input type='text' name='e-money-number' id='e-money-number' value={eMoneyNumber}
                                        onChange={(e) => setEMoneyNumber(e.target.value)}></input>
                                </div>

                                <div className={eMoneyError ? 'error' : null}>
                                    <div className={eMoneyError ? 'error error-field' : null}>
                                        <label htmlFor='e-money-pin' className={eMoneyError ? 'error' : null}>
                                            e-money pin
                                        </label>
                                        <small>{eMoneyError}</small>
                                    </div>

                                    <input type='text' name='e-money-pin' id='e-money-pin' value={eMoneyPin}
                                        onChange={(e) => setEMoneyPin(e.target.value)}></input>
                                </div>
                            </div>
                            <div className={paymentMethod === 'cash' ? 'payment-sub-details cod' : 'payment-sub-details cod hide'}>
                                <p>*</p>
                                <p >The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>

                            </div >

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