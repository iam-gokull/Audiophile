import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from "../api/apiConfig";
import Header from "../components/Header";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ProductDisplay from "../components/ProductDisplay";
import NotFound from './NotFound';

const CategoryPage = ({ cartProduct, isLoggedIn, fullname, handleLogout, screenSize }) => {
    const params = useParams();
    const category = params.category;

    const allowedCategory = /^(headphones|earphones|speakers)$/;
    const isAllowedCategory = allowedCategory.test(category);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        if (isAllowedCategory) {
            const getProductsByCategory = async (category) => {
                try {
                    const response = await api.get(`/api/products/category/${category}`);
                    const products = response.data;
                    products.sort((a, b) => b.new - a.new);
                    setCategoryProducts(products);
                } catch (error) {
                    console.error(error);
                }
            };
            getProductsByCategory(category);
        }

    }, [category, isAllowedCategory]);

    return (
        <div className={category}>
            {isAllowedCategory ?
                <>
                    <Header cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} handleLogout={handleLogout} />
                    <h1 className="category-heading">{category}</h1>
                    <ProductDisplay categoryProducts={categoryProducts} screenSize={screenSize} />
                    <Categories />
                    <About screenSize={screenSize} />
                    <Footer /></> : <NotFound cartProduct={cartProduct} />}
        </div>
    )
}

export default CategoryPage