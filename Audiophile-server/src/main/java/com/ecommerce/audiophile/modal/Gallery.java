package com.ecommerce.audiophile.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Gallery {
    private ImageUrls first;
    private ImageUrls second;
    private ImageUrls third;
}
