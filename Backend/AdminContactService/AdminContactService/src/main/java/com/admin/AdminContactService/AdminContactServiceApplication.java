package com.admin.AdminContactService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;


@SpringBootApplication
@EnableEurekaClient
@OpenAPIDefinition
public class AdminContactServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminContactServiceApplication.class, args);
	}
}
