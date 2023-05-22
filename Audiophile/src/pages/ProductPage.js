import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from "../api/apiConfig";
import Header from "../components/Header";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import OtherProducts from '../components/OtherProducts';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ addProductToCart, cartProduct, isLoggedIn, fullname, email, handleLogout, screenSize }) => {

    const params = useParams();
    const slug = params.slug;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductBySlug = async (slug) => {
            try {
                const response = await api.get(`/api/products/product/${slug}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getProductBySlug(slug);
    }, [slug]);

    return (
        <div className={slug}>
            <Header cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout}/>
            {product && (
                <ProductDetails addProductToCart={addProductToCart} product={product} email={email} screenSize={screenSize}/>
            )}
            {product && (
                <OtherProducts product={product} screenSize={screenSize}/>
            )}
            <Categories />
            <About screenSize={screenSize}/>
            <Footer />
        </div>
    )
}

export default ProductPage;