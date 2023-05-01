package com.ecommerce.audiophile.repository;

import com.ecommerce.audiophile.modal.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CartRepository extends MongoRepository<Cart, Integer> {
    Optional<Cart> findBySlug(String slug);

    boolean existsBySlug(String slug);

    void deleteBySlug(String slug);

}
