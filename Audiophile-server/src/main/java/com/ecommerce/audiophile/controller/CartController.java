package com.ecommerce.audiophile.controller;

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

    @GetMapping
    public ResponseEntity<List<Cart>> getAllProducts() {
        return new ResponseEntity<>(cartService.getAllCartProducts(), HttpStatus.OK);
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Cart> getProductBySlug(@PathVariable String slug) {
        return new ResponseEntity<>(cartService.getCartProductBySlug(slug), HttpStatus.OK);
    }

    @PostMapping(path = "/add", consumes = "application/json")
    public ResponseEntity<Cart> addProductToCart(@RequestBody Cart cart) {
        return new ResponseEntity<>(cartService.addProductToCart(cart), HttpStatus.CREATED);
    }

    @PutMapping(path = "/update/{slug}", consumes = "application/json")
    public ResponseEntity<Cart> updateCartProduct(@PathVariable("slug") String slug, @RequestBody Cart cart) {
        return new ResponseEntity<>(cartService.updateCartProduct(cart, slug), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{slug}")
    public ResponseEntity<HttpStatus> deleteCartProductBySlug(@PathVariable String slug) {
        cartService.deleteCartProductBySlug(slug);

        return ResponseEntity.noContent().build();
    }
}
