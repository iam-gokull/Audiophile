import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import QuantityButton from './QuantityButton';

import api from '../api/apiConfig';
import ProductGallery from './ProductGallery';

const ProductDetails = ({ product }) => {

    const navigate = useNavigate();
    let [quantity, setQuantity] = useState(1);
    
    const increaseQuantity = () => {
        if (quantity < 10)
            setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
    }

    const requestBody = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: {
            mobile: product.image.mobile,
            tablet: product.image.tablet,
            desktop: product.image.desktop,
        },
        category: product.category,
        quantity: quantity
    }

    const addProductToCart = async (cartProduct) => {
        api.post(`/api/products/cart/add`, cartProduct)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          })
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
                        <h5 className='price'>₹ {product.price}</h5>
                        <div className='product-buttons'>
                            <QuantityButton increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity}/>
                            <button className='btn primary-btn' onClick={() => addProductToCart(requestBody)}>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='sub-details'>
                    <div className='features'>
                        <h2>Features</h2>
                        {product.features.split('\n').map( (feature, index) => {
                            return (
                                <p key={index} className='feature-description'>{feature}</p>
                            )
                        })}

                    </div>
                    <div className='includes'>
                    <h2>In the box</h2>
                        {product.includes.map((include, index) => {
                            return (
                                <div key={index}>
                                    <span className='quantity'>{include.quantity}x</span>
                                    <span className='item'>{include.item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ProductGallery product={product} />

            </div>
            <div className=''>

            </div>
        </div>
    )
}

export default ProductDetails