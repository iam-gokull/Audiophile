package com.ecommerce.audiophile.controller;

import com.ecommerce.audiophile.exception.InvalidTokenException;
import com.ecommerce.audiophile.feign.SecurityClient;
import com.ecommerce.audiophile.modal.Cart;
import com.ecommerce.audiophile.service.CartServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products/cart")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartController {

    private final CartServiceImpl cartService;
    private final SecurityClient securityClient;

    private static final String INVALID_TOKEN_ERROR = "Token is invalid";

    @GetMapping("/all-carts")
    public ResponseEntity<List<Cart>> getAllProducts(@RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }

        String mailId = securityClient.getMailIdFromToken(token);
        return new ResponseEntity<>(cartService.getAllCartProducts(mailId), HttpStatus.OK);
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Cart> getProductBySlug(@PathVariable String slug) {
        return new ResponseEntity<>(cartService.getCartProductBySlug(slug), HttpStatus.OK);
    }

    @PostMapping(path = "/add", consumes = "application/json")
    public ResponseEntity<Cart> addProductToCart(@RequestBody Cart cart, @RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }
        return new ResponseEntity<>(cartService.addProductToCart(cart), HttpStatus.CREATED);
    }

    @PutMapping(path = "/update/quantity/{slug}", consumes = "application/json")
    public ResponseEntity<Cart> updateCartProductQuantity(@PathVariable("slug") String slug, @RequestBody Cart cart, @RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }

        return new ResponseEntity<>(cartService.updateProductQuantity(cart), HttpStatus.CREATED);
    }

    @PutMapping(path = "/update/{slug}", consumes = "application/json")
    public ResponseEntity<Cart> updateCartProduct(@PathVariable("slug") String slug, @RequestBody Cart cart, @RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }

        String mailId = securityClient.getMailIdFromToken(token);
        return new ResponseEntity<>(cartService.updateCartProduct(cart, slug, mailId), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{slug}")
    public ResponseEntity<HttpStatus> deleteCartProductBySlug(@PathVariable String slug, @RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }
        String mailId = securityClient.getMailIdFromToken(token);
        cartService.deleteCartProductBySlug(slug, mailId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<HttpStatus> deleteAllCartProductsBySlug(@RequestHeader (name = "Authorization") String token) {
        if (!securityClient.validateToken(token)) {
            throw new InvalidTokenException(INVALID_TOKEN_ERROR);
        }
        String mailId = securityClient.getMailIdFromToken(token);
        cartService.deleteAllProductsFromCart(mailId);
        return ResponseEntity.noContent().build();
    }
}
