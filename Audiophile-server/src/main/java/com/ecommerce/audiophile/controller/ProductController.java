package com.ecommerce.audiophile.controller;

import com.ecommerce.audiophile.modal.Product;
import com.ecommerce.audiophile.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final ProductServiceImpl productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getAllProductsByCategory(@PathVariable String category) {
        return new ResponseEntity<>(productService.findAllProductsByCategory(category), HttpStatus.OK);
    }

    @GetMapping("/product/{slug}")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug) {
        return new ResponseEntity<>(productService.findProductBySlug(slug), HttpStatus.OK);
    }

    @GetMapping("/product/id/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id) {
        return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
    }
}
