package com.ecommerce.audiophile.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "audiophile")
public class Product {
    @Id
    private int id;
    private String slug;
    private String name;
    private ImageUrls image;
    private String category;
    private ImageUrls categoryImage;
    private boolean isNew;
    private int price;
    private String description;
    private String features;
    private List<Item> includes;
    private Gallery gallery;
    private List<Product> others;
}
