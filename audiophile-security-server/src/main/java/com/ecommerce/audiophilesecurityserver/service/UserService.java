package com.ecommerce.audiophilesecurityserver.service;

import com.ecommerce.audiophilesecurityserver.entity.User;
import com.ecommerce.audiophilesecurityserver.exception.InvalidCredentialsException;
import com.ecommerce.audiophilesecurityserver.exception.InvalidTokenException;
import com.ecommerce.audiophilesecurityserver.exception.UserAlreadyExistsException;
import com.ecommerce.audiophilesecurityserver.jwt.JwtTokenProvider;
import com.ecommerce.audiophilesecurityserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

import static com.ecommerce.audiophilesecurityserver.jwt.JwtTokenFilter.HEADER_PREFIX;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService implements UserDetailsService, IUserService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    @Override
    public UserDetails loadUserByUsername(String mailId) throws UsernameNotFoundException {
        return loadByMailId(mailId);
    }

    @Override
    public User addUser(User user) {
        if (checkIfUserExists(user)) {
            throw new UserAlreadyExistsException("User already exists with email: " + user.getMailId());
        }

        String encodedPassword = Encoder().encode(user.getPassword());
        User newUser = new User(user.getFirstname(), user.getLastname(), user.getMailId(), encodedPassword);
        return userRepository.save(newUser);
    }

    @Override
    public User loadByMailId(String mailId) {
        Optional<User> optionalUser = userRepository.findByMailId(mailId);
        if (optionalUser.isEmpty()) {
            throw new InvalidCredentialsException("MailId doesn't exists");
        }

        return optionalUser.get();
    }

    public User updateUser(User user, String mailId) {
        String encodedPassword = Encoder().encode(user.getPassword());
        User newUser = loadByMailId(mailId);
        newUser.setFirstname(user.getFirstname());
        newUser.setLastname(user.getLastname());
        newUser.setMailId(user.getMailId());
        newUser.setPassword(encodedPassword);
        return userRepository.save(newUser);
    }

    public String getFullname(String mailId) {
        User user = userRepository.findByMailId(mailId).orElseThrow();
        return user.getFirstname() + " " + user.getLastname();
    }

    @Override
    public boolean checkIfUserExists(User user) {
        return userRepository.existsByMailId(user.getMailId());
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteAll() {
        userRepository.deleteAll();
    }

    public String getMailIdFromToken(String token) {
        String jwtToken = token.substring(HEADER_PREFIX.length()).trim();

        if (jwtTokenProvider.validateToken(jwtToken)) {
            return jwtTokenProvider.getMailIdFromToken(jwtToken);
        } else {
            throw new InvalidTokenException("Token is invalid");
        }
    }

    @Bean
    public PasswordEncoder Encoder() {
        return new BCryptPasswordEncoder();
    }
}
