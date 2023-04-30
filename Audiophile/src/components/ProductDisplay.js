import React from 'react';

import './ProductDisplay.css';
import DisplayProduct from './DisplayProduct';

const ProductDisplay = ({ categoryProducts }) => {
    
    return (
        <div className='product-display'>
            {categoryProducts && categoryProducts.map((product, index) => {
                return (
                    <div key={product.id} className={product.slug}>
                        {index % 2 === 0 ? (
                            <div className='products'><DisplayProduct product={product} /></div>
                        ) : (
                            <div className='products reverse'><DisplayProduct product={product} /></div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ProductDisplay