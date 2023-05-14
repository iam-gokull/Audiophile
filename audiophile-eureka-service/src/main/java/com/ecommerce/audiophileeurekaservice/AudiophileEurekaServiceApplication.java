package com.ecommerce.audiophileeurekaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class AudiophileEurekaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AudiophileEurekaServiceApplication.class, args);
	}

}
