import React, { useState } from 'react'

import api from '../api/apiConfig';

import QuantityButton from './QuantityButton';

const CartData = ({ product, index, updateTotal, total }) => {

    const [cartQuantity, setCartQuantity] = useState(product.quantity);

    const updateCartQuantity = (updatedQuantity) => {
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
            quantity: updatedQuantity,
        };

        api.put(`/api/products/cart/update/${product.slug}`, requestBody)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const increaseQuantity = () => {
        if (cartQuantity < 10) {
            const newQuantity = cartQuantity + 1;
            setCartQuantity(newQuantity);
            updateCartQuantity(newQuantity);
            updateTotal(total + product.price);
        }
    };

    const decreaseQuantity = () => {
        if (cartQuantity > 1) {
            const newQuantity = cartQuantity - 1;
            setCartQuantity(newQuantity);
            updateCartQuantity(newQuantity);
            updateTotal(total - product.price);
        }

        if (cartQuantity === 1) {
            deleteCartProduct();
        }
    };

    const deleteCartProduct = () => {
        api.delete(`/api/products/cart/delete/${product.slug}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div key={product.id}>
            <div>
                <img src={product.image.mobile} alt={product.name}></img>
                <div>
                    <p>{product.name.split(" ")[0]}</p>
                    <p>₹ {product.price}</p>
                </div>
            </div>
            <div>
                <QuantityButton quantity={cartQuantity} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
            </div>
        </div>
    )
}

export default CartData