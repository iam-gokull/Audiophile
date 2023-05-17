package com.ecommerce.audiophile.service;

import com.ecommerce.audiophile.exception.ProductNotFoundException;
import com.ecommerce.audiophile.modal.Cart;
import com.ecommerce.audiophile.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Slf4j
public class CartServiceImpl implements ICartService {

    private final CartRepository cartRepository;

    @Override
    public Cart addProductToCart(Cart cart) {
        if (cartRepository.existsBySlugAndMailId(cart.getSlug(), cart.getMailId())) {
            return updateProductQuantity(cart);
        }

        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAllCartProducts(String mailId) {
        return cartRepository.findAllByMailId(mailId);
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
    public void deleteCartProductBySlug(String slug, String mailID) {
        if(!cartRepository.existsBySlugAndMailId(slug, mailID)) {
            throw new ProductNotFoundException(slug);
        }

        cartRepository.deleteBySlugAndMailId(slug, mailID);
    }

    @Override
    public Cart updateProductQuantity(Cart updatedCart) {
        return cartRepository.save(cartRepository.findBySlugAndMailId(updatedCart.getSlug(), updatedCart.getMailId()).map(product -> {
            product.setQuantity(updatedCart.getQuantity() + product.getQuantity());
            log.info(String.valueOf(product));
            return product;
        }).orElseGet(() -> {
            return updatedCart;
        }));
    }


    @Override
    public Cart updateCartProduct(Cart newCart, String slug, String mailId) {
        Cart updatedCart = cartRepository.findBySlug(slug).map(product -> {
            product.setName(newCart.getName());
            product.setSlug(newCart.getSlug());
            product.setPrice(newCart.getPrice());
            product.setImage(newCart.getImage());
            product.setCategory(newCart.getCategory());
            product.setQuantity(newCart.getQuantity());
            product.setMailId(newCart.getMailId());
            return product;
        }).orElseGet(() -> {
            return newCart;
        });

        return cartRepository.save(updatedCart);
    }

    @Override
    public void deleteAllProductsFromCart(String mailId) {
        cartRepository.deleteAllByMailId(mailId);
    }
}
