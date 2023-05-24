package com.ecommerce.audiophilesecurityserver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class TokenException extends RuntimeException{
    private final String error;
    public TokenException(String message) {

        super(message);
        this.error = message;
    }

    public String getError() {
        return this.error;
    }
}
