import React from 'react';
import './Cart.css';
import QuantityButton from './QuantityButton';
import { useNavigate } from 'react-router-dom';

const Cart = ({ modal, handleModalContentClick, cartProduct }) => {

    const navigate = useNavigate();

    return (
        <div>
            {modal && (
                <div className={`modal ${modal ? 'active' : ''}`}>
                    <div className="modal-content" onClick={handleModalContentClick}>
                        <div className='cart-header'>
                            <h6>Cart(1)</h6>
                            <p><button className='remove-all-btn btn'>Remove all</button></p>
                        </div>
                        <div className='cart-main'>
                            {cartProduct && cartProduct.map((product, index) => {
                                console.log(Array.isArray(cartProduct));
                                return (
                                    <div key={index}>
                                        <div>
                                            <img src={product.image} alt={product.name}></img>
                                            <div>
                                                <p>{product.name}</p>
                                                <p>${product.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <QuantityButton quantity={product.quantity} />
                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div>
                                <div>
                                    <div>
                                        <img src='https://ik.imagekit.io/dpkmzcpsk/Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt="product"></img>
                                        <div>
                                            <p>XX99</p>
                                            <p>$ 2999</p>
                                        </div>
                                    </div>

                                    <div>
                                        <QuantityButton quantity={1} />
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
                                        <QuantityButton quantity={1} />
                                    </div>
                                </div>
                        
                            </div> */}
                        </div>
                        <div className='cart-price'>
                            <h6>Total</h6>
                            <h6>$000</h6>
                        </div>
                        <button className='checkout-btn btn primary-btn' onClick={() => navigate("/checkout")}>Checkout</button>
                    </div>
                    <div className={`overlay ${modal ? 'active' : ''}`}></div>
                </div>
            )}
        </div>
    )
}

export default Cart;