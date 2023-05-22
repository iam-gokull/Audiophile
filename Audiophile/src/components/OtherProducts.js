import React from 'react'

import './OtherProducts.css'

import { useNavigate } from 'react-router-dom';

const OtherProducts = ({ product, screenSize }) => {

    const navigate = useNavigate();

    return (
        <div className='other-products'>
            <h1>You may also like</h1>
            <div className='others'>
                {product && product.others.map(otherProduct => {
                    return (
                        <div className={otherProduct.name} key={otherProduct.slug}>
                            {screenSize === 'large' && <img src={otherProduct.image.desktop} alt={otherProduct.name} />}
                            {screenSize === 'medium' && <img src={otherProduct.image.tablet} alt={otherProduct.name} />}
                            {screenSize === 'small' && <img src={otherProduct.image.desktop} alt={otherProduct.name} />}
                            <h2 className='product-heading'>{otherProduct.name}</h2>
                            <button className='btn primary-btn' onClick={() => navigate(`/${otherProduct.category}/${otherProduct.slug}`)}>See Product</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default OtherProducts;