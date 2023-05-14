package com.ecommerce.audiophilesecurityserver.exception;

import io.jsonwebtoken.ExpiredJwtException;

public class InvalidTokenException extends RuntimeException {

    public InvalidTokenException(String message) {
        super(message);
    }

    public InvalidTokenException(String message, Throwable cause) {
        super(message, cause);
    }
}
