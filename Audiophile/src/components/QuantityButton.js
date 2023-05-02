import React from 'react'

const QuantityButton = ({ decreaseQuantity, increaseQuantity, quantity }) => {

    return (
        <div className="quantity-btn">
            <button className="increase-btn btn" onClick={decreaseQuantity}>
                -
            </button>
            <p className="quantity">{quantity}</p>
            <button className="increase-btn btn" onClick={increaseQuantity}>
                +
            </button>
        </div>
    );
};

export default QuantityButton;