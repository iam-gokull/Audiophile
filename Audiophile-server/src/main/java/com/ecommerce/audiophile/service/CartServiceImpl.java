package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.exception.ProductNotFoundException;
import com.ecommerce.audiophile.modal.Cart;
import com.ecommerce.audiophile.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CartServiceImpl implements ICartService {

    private final CartRepository cartRepository;
    @Override
    public Cart addProductToCart(Cart cart) {
        if (cartRepository.existsBySlug(cart.getSlug())) {
            return updateProductQuantity(cart, cart.getSlug());
        }

        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAllCartProducts() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getCartProductBySlug(String slug) {
        Optional<Cart> optionalProduct = cartRepository.findBySlug(slug);

        if (optionalProduct.isEmpty()) {
            throw new ProductNotFoundException(slug);
        }
        return optionalProduct.get();
    }



    @Override
    public Cart updateCartProduct(Cart newCart, String slug) {
        Cart updatedCart = cartRepository.findBySlug(slug).map(product -> {
            product.setName(newCart.getName());
            product.setSlug(newCart.getSlug());
            product.setPrice(newCart.getPrice());
            product.setImage(newCart.getImage());
            product.setCategory(newCart.getCategory());
            product.setQuantity(newCart.getQuantity());

            return product;
        }).orElseGet(() -> {
            return newCart;
        });

        return cartRepository.save(updatedCart);
    }

    @Override
    public void deleteCartProductBySlug(String slug) {
        if(!cartRepository.existsBySlug(slug)) {
            throw new ProductNotFoundException(slug);
        }

        cartRepository.deleteBySlug(slug);
    }

    @Override
    public Cart updateProductQuantity(Cart updatedCart, String slug) {
        return cartRepository.save(cartRepository.findBySlug(updatedCart.getSlug()).map(product -> {
            product.setQuantity(updatedCart.getQuantity() + product.getQuantity());
            return product;
        }).orElseGet(() -> {
            return updatedCart;
        }));
    }

    @Override
    public void deleteAllProductsFromCart() {
        cartRepository.deleteAll();
    }
}
