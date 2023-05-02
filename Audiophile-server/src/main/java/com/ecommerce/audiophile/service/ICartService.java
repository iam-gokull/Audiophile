package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.modal.Cart;

import java.util.List;

public interface ICartService {

    Cart addProductToCart(Cart cart);

    List<Cart> getAllCartProducts();

    Cart getCartProductBySlug(String slug);

    Cart updateCartProduct(Cart newCart, String slug);

    void deleteCartProductBySlug(String slug);

    Cart updateProductQuantity(Cart cart, String slug);

    void deleteAllProductsFromCart();
}
