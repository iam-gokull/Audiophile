package com.ecommerce.audiophile.repository;

import com.ecommerce.audiophile.modal.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, Integer> {

    List<Product> findAllByCategory(String category);

    Optional<Product> findBySlug(String slug);

    String findCategoryBySlug(String slug);
}
