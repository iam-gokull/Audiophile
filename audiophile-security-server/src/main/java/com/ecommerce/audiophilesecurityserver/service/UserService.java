package com.ecommerce.audiophilesecurityserver.service;

import com.ecommerce.audiophilesecurityserver.controller.AuthRequest;
import com.ecommerce.audiophilesecurityserver.entity.User;
import com.ecommerce.audiophilesecurityserver.entity.Token;
import com.ecommerce.audiophilesecurityserver.exception.InvalidCredentialsException;
import com.ecommerce.audiophilesecurityserver.exception.InvalidTokenException;
import com.ecommerce.audiophilesecurityserver.exception.TokenException;
import com.ecommerce.audiophilesecurityserver.exception.UserAlreadyExistsException;
import com.ecommerce.audiophilesecurityserver.jwt.JwtTokenProvider;
import com.ecommerce.audiophilesecurityserver.repository.PasswordResetTokenRepository;
import com.ecommerce.audiophilesecurityserver.repository.UserRepository;
import com.ecommerce.audiophilesecurityserver.repository.VerificationTokenRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

import static com.ecommerce.audiophilesecurityserver.jwt.JwtTokenFilter.HEADER_PREFIX;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final JavaMailSender mailSender;

    private final VerificationTokenRepository verificationTokenRepository;

    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final JwtTokenProvider jwtTokenProvider;
    @Override
    public UserDetails loadUserByUsername(String mailId) throws UsernameNotFoundException {
        return loadByMailId(mailId);
    }

    public User addUser(User user) {
        if (checkIfUserExists(user)) {
            throw new UserAlreadyExistsException("User already exists with email: " + user.getMailId());
        }

        String encodedPassword = Encoder().encode(user.getPassword());
        User newUser = new User(user.getFirstname(), user.getLastname(), user.getMailId(), encodedPassword);


        String verificationTokenValue = UUID.randomUUID().toString();
        Token token = new Token(verificationTokenValue, newUser.getId());
        verificationTokenRepository.save(token);
        newUser.setVerificationTokenId(token.getId());
        User savedUser = userRepository.save(newUser);

        String to = newUser.getMailId();
        String subject = "Welcome, " + newUser.getUsername();
        String htmlContent = """
                <html>
                <body>
                <h1>Welcome</h1>
                <p>Please click the below button to verify your account</p>""" +
                        "<a href=\"http://localhost:8081/verification/verify?token=" + verificationTokenValue + "&email=" + savedUser.getMailId() + "\">Verify Email</a>" +
                """
                </body>
                </html>        
                        """;
        sendEmail(to, subject, htmlContent);
        return savedUser;
    }

    public boolean validateVerificationToken(String token, String mailId) {
        User user = userRepository.findByMailId(mailId).orElseThrow();
        Token verificationToken = verificationTokenRepository.findById(user.getVerificationTokenId()).orElseThrow();

        if (!Objects.equals(token, verificationToken.getToken())) {
            log.info(("token not matching"));
            return false;
        }

        if (verificationToken.getExpiryDate().before(new Date())) {
            log.info(("token expired"));
            return false;
        }

        verificationTokenRepository.deleteById(verificationToken.getId());
        user.setVerified(true);
        updateUserVerification(user, mailId, verificationToken.getId());

        return true;
    }

    public boolean checkUserVerification(String mailId) {
        User user = userRepository.findByMailId(mailId).orElseThrow();
        return user.isEnabled();
    }

    private void sendEmail(String to, String subject, String htmlContent) {
        MimeMessage message = mailSender.createMimeMessage();

        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, true, "UTF-8");
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setTo(to);
            mimeMessageHelper.setText(htmlContent, true);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

        mailSender.send(message);
    }

    public String saveForgotPasswordToken(String mailId) {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        String verificationTokenValue = String.format("%06d", number);
        Token token = new Token(verificationTokenValue, loadByMailId(mailId).getId());

        passwordResetTokenRepository.save(token);
        User user = loadByMailId(mailId);
        user.setVerificationTokenId(token.getId());
        userRepository.save(user);

        String subject = "Password reset";
        String htmlContent = """
                <html>
                <body>
                <h1>Welcome</h1>
                <p>Here is your one time token for password reset</p>
                <p>It'll expire in a day, kindly don't share it with anyone</p>""" +
                verificationTokenValue +
                """
                </body>
                </html>
                        """;
        sendEmail(mailId, subject, htmlContent);
        return verificationTokenValue;
    }

    public boolean verifyPasswordToken(String mailId, String token) {
        User user = userRepository.findByMailId(mailId).orElseThrow();
        Token verificationToken = verificationTokenRepository.findById(user.getVerificationTokenId()).orElseThrow();

        if (!Objects.equals(token, verificationToken.getToken())) {
            log.info(("token not matching"));
            throw new TokenException("token not matching");
        }

        if (verificationToken.getExpiryDate().before(new Date())) {
            log.info(("token expired"));
            throw new TokenException("token not matching");
        }

        return true;
    }

    public User updatePassword(AuthRequest authRequest, String token) {
        User user = userRepository.findByMailId(authRequest.getMailId()).orElseThrow();
        Token verificationToken = verificationTokenRepository.findById(user.getVerificationTokenId()).orElseThrow();

        if (!Objects.equals(token, verificationToken.getToken())) {
            log.info(("token not matching"));
            throw new TokenException("token not matching");
        }

        if (verificationToken.getExpiryDate().before(new Date())) {
            log.info(("token expired"));
            throw new TokenException("token not matching");
        }
        verificationTokenRepository.deleteById(verificationToken.getId());

        String encodedPassword = Encoder().encode(authRequest.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

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
        newUser.setVerified(user.isVerified());
        return userRepository.save(newUser);
    }

    public User updateUserVerification(User user, String mailId, ObjectId verificationTokenId) {
        String encodedPassword = Encoder().encode(user.getPassword());
        User newUser = loadByMailId(mailId);
        newUser.setFirstname(user.getFirstname());
        newUser.setLastname(user.getLastname());
        newUser.setMailId(user.getMailId());
        newUser.setPassword(encodedPassword);
        newUser.setVerified(user.isVerified());
        newUser.setVerificationTokenId(verificationTokenId);
        return userRepository.save(newUser);
    }

    public String getFullname(String mailId) {
        User user = userRepository.findByMailId(mailId).orElseThrow();
        return user.getFirstname() + " " + user.getLastname();
    }


    public boolean checkIfUserExists(User user) {
        return userRepository.existsByMailId(user.getMailId());
    }


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
