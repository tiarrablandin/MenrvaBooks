package com.menrva.spring.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.web.SecurityFilterChain
import org.springframework.http.HttpMethod.OPTIONS

@Configuration
@EnableWebSecurity
class WebSecurityConfig {

    @Bean
    @Throws(Exception::class)
    fun configure(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf().disable()
            .authorizeHttpRequests { requests ->
                requests
                    .requestMatchers(OPTIONS).permitAll() // Allow CORS option calls
                    .requestMatchers("/api/books/").permitAll() // Swagger UI openapi file
                    .anyRequest().authenticated()
            }
            .httpBasic()
        return http.build()
    }
}
