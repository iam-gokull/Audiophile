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
}
