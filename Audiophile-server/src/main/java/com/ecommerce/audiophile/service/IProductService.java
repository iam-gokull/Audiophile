package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.modal.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAllProducts();

    List<Product> findAllProductsByCategory(String category);

    Product findProductBySlug(String slug);

    Product findProductById(int id);
    
}
