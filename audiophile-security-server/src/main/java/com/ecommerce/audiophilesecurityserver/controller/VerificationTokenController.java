package com.ecommerce.audiophilesecurityserver.controller;

import com.ecommerce.audiophilesecurityserver.entity.Token;
import com.ecommerce.audiophilesecurityserver.repository.VerificationTokenRepository;
import com.ecommerce.audiophilesecurityserver.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders = "Authorization")
@RequiredArgsConstructor
@RequestMapping(path = "/verification", produces = "application/json")
public class VerificationTokenController {

    private final UserService userService;

    private final VerificationTokenRepository repository;

    @GetMapping("/all-verifications")
    public ResponseEntity<List<Token>> allVerifications() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<HttpStatus> deleteAllVerifications() {
        repository.deleteAll();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/verify")
    public RedirectView verifyEmail(@RequestParam("token") String token, @RequestParam("email") String email) throws URISyntaxException {
        log.info("verification started");
        if (userService.validateVerificationToken(token, email)) {
            return new RedirectView("http://localhost:3000/sign-in");
        } else {
            return new RedirectView("http://localhost:3000/sign-up");
        }

    }
}
