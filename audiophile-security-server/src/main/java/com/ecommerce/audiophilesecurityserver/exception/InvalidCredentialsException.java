package com.ecommerce.audiophilesecurityserver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class InvalidCredentialsException extends RuntimeException {
    private final String error;
    public InvalidCredentialsException(String message) {

        super(message);
        this.error = message;
    }

    public String getError() {
        return this.error;
    }
}
