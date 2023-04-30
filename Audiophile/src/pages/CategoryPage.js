import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ProductDisplay from "../components/ProductDisplay";

const CategoryPage = ({getProductsByCategory, categoryProducts}) => {
    const params = useParams();
    const category = params.category;

    useEffect(() => {
        getProductsByCategory(category);
    });

    return (
        <div className={category}>
            <Header />
            <h1 className="category-heading">{category}</h1>
            <ProductDisplay categoryProducts={categoryProducts}/>
            <Categories />
            <About/>
            <Footer/>
        </div>
    )
}

export default CategoryPage