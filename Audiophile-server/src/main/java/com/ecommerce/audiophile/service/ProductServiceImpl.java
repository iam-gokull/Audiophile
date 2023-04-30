package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.exception.ProductNotFoundException;
import com.ecommerce.audiophile.modal.Product;
import com.ecommerce.audiophile.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;

    private final MongoTemplate mongoTemplate;

    @Override
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> findAllProductsByCategory(String category) {
        return productRepository.findAllByCategory(category);
    }

    @Override
    public Product findProductBySlug(String slug) {
        Optional<Product> optionalProduct = productRepository.findBySlug(slug);

        if (optionalProduct.isEmpty()) {
            throw new ProductNotFoundException(slug);
        }
        return optionalProduct.get();
    }

    @Override
    public Product findProductById(int id) {
        Optional<Product> optionalProduct = productRepository.findById(id);

        if (optionalProduct.isEmpty()) {
            throw new ProductNotFoundException(id);
        }
        return optionalProduct.get();
    }

}
