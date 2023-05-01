import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import QuantityButton from './QuantityButton';

const ProductDetails = ({ product, addProductToCart }) => {

    let [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const increaseQuantity = () => {
        if (quantity < 10)
            setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    return (
        <div className='product-details'>
            <div className='product'>
            <button className='go-back-btn btn' onClick={() => navigate(-1)}>Go back</button>
                <div className='main-detials'>
                    <img src={product.image.mobile} alt={product.name} />
                    <div className='product-content'>
                        {product.new ? <p className='eyebrow'>New product</p> : null}
                        <h2 className='product-heading'>{product.name}</h2>
                        <p className='product-description'>{product.description}</p>
                        <h5 className='price'>$ {product.price}</h5>
                        <div className='product-buttons'>
                            <QuantityButton increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity}/>
                            <button className='btn primary-btn' onClick={() => addProductToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='sub-details'>
                    <div className='features'>
                        <h2>Features</h2>
                        {product.features.split('\n').map(feature => {
                            return (
                                <p className='feature-description'>{feature}</p>
                            )
                        })}

                    </div>
                    <div className='includes'>
                    <h2>In the box</h2>
                        {product.includes.map(include => {
                            return (
                                <div>
                                    <span className='quantity'>{include.quantity}x</span>
                                    <span className='item'>{include.item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='product-gallery'>
                    <img src={product.gallery.first.desktop} alt='product gallery'></img>
                    <img src={product.gallery.second.desktop} alt='product gallery'></img>
                    <img src={product.gallery.third.desktop} alt='product gallery'></img>
                </div>

            </div>
            <div className=''>

            </div>
        </div>
    )
}

export default ProductDetails