import React from 'react'
import { useNavigate } from 'react-router-dom';

const DisplayProduct = ({ product }) => {

    const navigate = useNavigate();

    return (
        <>
            <img src={product.image.mobile} alt={product.name} />
            <div className='product-content'>
                {product.new ? <p className='eyebrow'>New product</p> : null}
                <h2 className='product-heading'>{product.name}</h2>
                <p className='product-description'>{product.description}</p>
                <button className='btn primary-btn' onClick={() => navigate(`/${product.category}/${product.slug}`)}>See Product</button>
            </div>
        </>

    )
}

export default DisplayProduct