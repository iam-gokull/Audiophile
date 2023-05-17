package com.ecommerce.audiophile.repository;

import com.ecommerce.audiophile.modal.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends MongoRepository<Cart, Integer> {
    Optional<Cart> findBySlug(String slug);

    Optional<Cart> findBySlugAndMailId(String slug, String mailId);

    boolean existsBySlugAndMailId(String slug, String mailId);

    void deleteBySlugAndMailId(String slug, String mailId);

    List<Cart> findAllByMailId(String mailId);

    void deleteAllByMailId(String mailId);
}
