import React from 'react';
import "./ProductGallery.css"

const ProductGallery = ({ product, screenSize }) => {
    return (
        <div className='product-gallery'>
            {product && <>
                {screenSize === 'large' && <img src={product.gallery.first.desktop} alt='product gallery'></img>}
                {screenSize === 'large' && <img src={product.gallery.second.desktop} alt='product gallery'></img>}
                {screenSize === 'large' && <img src={product.gallery.third.desktop} alt='product gallery'></img>}

                {screenSize === 'medium' && <img src={product.gallery.first.tablet} alt='product gallery'></img>}
                {screenSize === 'medium' && <img src={product.gallery.second.tablet} alt='product gallery'></img>}
                {screenSize === 'medium' && <img src={product.gallery.third.tablet} alt='product gallery'></img>}

                {screenSize === 'small' && <img src={product.gallery.first.mobile} alt='product gallery'></img>}
                {screenSize === 'small' && <img src={product.gallery.second.mobile} alt='product gallery'></img>}
                {screenSize === 'small' && <img src={product.gallery.third.mobile} alt='product gallery'></img>}
            </>
            }

        </div>
    )
}

export default ProductGallery