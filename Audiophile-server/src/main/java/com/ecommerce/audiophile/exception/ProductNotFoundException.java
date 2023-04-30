package com.ecommerce.audiophile.exception;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(String name) {
        super("Unable to find product with name: " + name);
    }

    public ProductNotFoundException(int id) {
        super("Unable to find product with id: " + id);
    }
}
