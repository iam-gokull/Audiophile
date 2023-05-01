package com.ecommerce.audiophile.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "audiophile-cart")
public class Cart {
    @Id
    private int id;
    private String slug;
    private String name;
    private int price;
    private ImageUrls image;
    private String category;
}
