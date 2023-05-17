package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.modal.Cart;

import java.util.List;

public interface ICartService {

    Cart addProductToCart(Cart cart);

    List<Cart> getAllCartProducts(String token);

    Cart getCartProductBySlug(String slug);

    Cart updateCartProduct(Cart newCart, String slug, String mailId);

    void deleteCartProductBySlug(String slug, String mailId);

    Cart updateProductQuantity(Cart cart);

    void deleteAllProductsFromCart(String mailId);
}
