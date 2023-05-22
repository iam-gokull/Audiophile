import React from 'react'
import { useNavigate } from 'react-router-dom';

const DisplayProduct = ({ product, screenSize }) => {

    const navigate = useNavigate();

    return (
        <>
            {screenSize === 'large' && <img src={product.categoryImage.desktop} alt={product.name} />}
            {screenSize === 'medium' && <img src={product.categoryImage.tablet} alt={product.name} />}
            {screenSize === 'small' && <img src={product.categoryImage.mobile} alt={product.name} />}
            <div className='product-content'>
                {product.new ? <p className='eyebrow'>New product</p> : null}
                <h2 className='product-heading'>{product.name}</h2>
                <p className='product-description'>{product.description}</p>
                <div><button className='btn primary-btn' onClick={() => navigate(`/${product.category}/${product.slug}`)}>See Product</button>
                    </div>
            </div>
        </>

    )
}

export default DisplayProduct