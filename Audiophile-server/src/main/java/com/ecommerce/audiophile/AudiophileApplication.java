package com.ecommerce.audiophile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AudiophileApplication {

	public static void main(String[] args) {

		SpringApplication.run(AudiophileApplication.class, args);
	}

}
