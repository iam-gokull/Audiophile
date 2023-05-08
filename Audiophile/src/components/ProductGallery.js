import React from 'react';
import "./ProductGallery.css"

const ProductGallery = ({ product }) => {
    return (
        <div className='product-gallery'>
            {product && <>
                <img src={product.gallery.first.desktop} alt='product gallery'></img>
                <img src={product.gallery.second.desktop} alt='product gallery'></img>
                <img src={product.gallery.third.desktop} alt='product gallery'></img>
            </>
            }

        </div>
    )
}

export default ProductGallery