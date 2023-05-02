import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from "../api/apiConfig";
import Header from "../components/Header";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ProductDisplay from "../components/ProductDisplay";

const CategoryPage = ({cartProduct}) => {
    const params = useParams();
    const category = params.category;
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
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
    }, [category]);

    return (
        <div className={category}>
            <Header cartProduct={cartProduct}/>
            <h1 className="category-heading">{category}</h1>
            <ProductDisplay categoryProducts={categoryProducts}/>
            <Categories />
            <About/>
            <Footer/>
        </div>
    )
}

export default CategoryPage