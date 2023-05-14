package com.ecommerce.audiophilesecurityserver.controller;

import lombok.Data;

import java.io.Serializable;

@Data
public class AuthRequest implements Serializable {
    private String mailId;
    private String password;
}
