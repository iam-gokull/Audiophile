package com.ecommerce.audiophilesecurityserver;

import com.ecommerce.audiophilesecurityserver.entity.User;
import com.ecommerce.audiophilesecurityserver.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.util.List;

@SpringBootApplication
public class AudiophileSecurityServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AudiophileSecurityServerApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner initData(UserRepository userRepository) {
//		return args -> {
//			userRepository.save(new User("Gokul", "L", "gokul@gmail.com", passwordEncoder().encode("Goks@1927"),  List.of(new SimpleGrantedAuthority("USER"))));
//		};
//	}
//
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}

}
