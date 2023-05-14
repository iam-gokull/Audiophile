package com.ecommerce.audiophile.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "SECURITY-SERVICE")
public interface SecurityClient {

    @GetMapping("/users/validate")
    boolean validateToken(@RequestHeader (name = "Authorization") String token);
}
