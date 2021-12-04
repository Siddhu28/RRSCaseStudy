package com.admin.AdminContactService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//import io.swagger.v3.oas.models.PathItem.HttpMethod;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .httpBasic()
        .and()
        .authorizeRequests()
        .antMatchers("/contacts/**").hasRole("ADMIN")
        .anyRequest()
        .authenticated()
        .and()
        .csrf().disable()
        .formLogin().disable();
               
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("Siddharth").password(this.passwordEncoder().encode("Sid28")).roles("ADMIN");
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }
}