package com.ecommerce.audiophilesecurityserver.service;

import com.ecommerce.audiophilesecurityserver.entity.User;
import com.ecommerce.audiophilesecurityserver.exception.UserAlreadyExistsException;
import com.ecommerce.audiophilesecurityserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService, IUserService {

    private final UserRepository userRepository;
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
        User newUser = new User(user.getFirstname(), user.getLastname(), user.getMailId(), encodedPassword, user.getAuthorities());
        return userRepository.save(newUser);
    }

    @Override
    public User loadByMailId(String mailId) {
        Optional<User> optionalUser = userRepository.findByMailId(mailId);
        if (optionalUser.isEmpty()) {
            throw new UsernameNotFoundException("Unable to fine user: " + mailId);
        }

        return optionalUser.get();
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

    @Bean
    public PasswordEncoder Encoder() {
        return new BCryptPasswordEncoder();
    }
}
